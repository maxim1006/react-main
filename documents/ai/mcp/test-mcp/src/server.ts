import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
    name: 'test-mcp',
    version: '1.0.0',
    // что поддерживает этот сервер
    capabilities: {
        resources: {},
        tools: {},
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
        inputSchema: {
            name: z.string(),
            email: z.string(),
            address: z.string(),
            phoneNumber: z.string(),
        },
    },
    ({ name, email, address, phoneNumber }) => {
        return {
            content: [
                {
                    type: 'text',
                    text: `User ${name} created successfully`,
                },
            ],
        };
    },
);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main();
