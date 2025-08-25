import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { UserSchema } from './models/user.model';
import { createUser } from './utils/user.utils';

const server = new McpServer({
    name: 'test-mcp',
    version: '1.0.0',
    // что поддерживает этот сервер
    capabilities: {
        // resources — описание доступных серверу внешних или внутренних ресурсов (например, базы данных, файлы, API)
        resources: {},
        // tools — описание инструментов/функций, которые сервер может выполнять (например, создание пользователя, отправка письма)
        tools: {},
        // prompts — шаблоны или инструкции для генерации сообщений/запросов к модели (например, промпты для LLM)
        prompts: {},
    },
});

server.registerTool(
    'create user',
    {
        title: 'Create User',
        description: 'create new user in the database',
        annotations: {
            readOnlyHint: false, // сервер может изменять данные
            destructiveHint: false, // сервер НЕ удаляет/разрушает данные
            title: 'Create User', // заголовок сервера
            idempotentHint: false, // повторный вызов с теми же параметрами может дать разный результат
            openWorldHint: true, // сервер может взаимодействовать с внешними системами
        },
        inputSchema: UserSchema.shape,
    },
    async ({ name, email, address, phoneNumber }) => {
        try {
            const id = await createUser({ name, email, address, phoneNumber });

            console.log(id);

            return {
                content: [
                    {
                        type: 'text',
                        text: `User ${name} with id: ${id} created successfully`,
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error creating user: ${error}`,
                    },
                ],
            };
        }
    },
);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main();
