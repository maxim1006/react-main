import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import express from 'express'
import type { NextFunction, Request, Response } from 'express'
import { createServer as createViteServer, type ViteDevServer } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resolve = (p: string) => path.resolve(__dirname, p)

const isProd = process.env.NODE_ENV === 'production'

type RenderResult = { html: string }
type RenderModule = { render: (url: string) => Promise<RenderResult> | RenderResult }

async function createApp() {
  const app = express()
  let vite: ViteDevServer | undefined

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    app.use(
      '/assets',
      express.static(resolve('dist/client/assets'), { index: false }),
    )
    app.use(express.static(resolve('dist/client'), { index: false }))
  }

  app.use(
    '*',
    async (req: Request, res: Response, next: NextFunction) => {
      const url = req.originalUrl

      try {
        let template: string
        let render: RenderModule['render']

        if (!isProd && vite) {
          template = fs.readFileSync(resolve('index.html'), 'utf-8')
          template = await vite.transformIndexHtml(url, template)
          ;({ render } = (await vite.ssrLoadModule(
            '/src/entry-server.tsx',
          )) as RenderModule)
        } else {
          template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
          const entryUrl = pathToFileURL(
            resolve('dist/server/entry-server.js'),
          ).href
          ;({ render } = (await import(entryUrl)) as RenderModule)
        }

        const { html: appHtml } = await render(url)
        const html = template.replace(`<!--ssr-outlet-->`, appHtml)

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
      } catch (error) {
        if (!isProd && vite && error instanceof Error) {
          vite.ssrFixStacktrace(error)
        }
        next(error)
      }
    },
  )

  return { app }
}

createApp()
  .then(({ app }) => {
    const port = Number(process.env.PORT ?? 5173)
    app.listen(port, () => {
      console.log(`✅  SSR сервер запущен: http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

