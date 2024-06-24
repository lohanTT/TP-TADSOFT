import swaggerJSDoc, { Options } from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Express } from 'express'

const options: Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API documentation for the project',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT}`, // URL do servidor
        },
      ],
    },
    apis: ['./src/routes/*.ts'], // Caminho para os arquivos com anotações JSDoc
}

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};