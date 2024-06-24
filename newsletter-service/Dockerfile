# Usar a imagem oficial do Node.js como a base
FROM node:16

# Definir o diretório de trabalho na imagem
WORKDIR /usr/src/app

# Copiar os arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

COPY .env /usr/src/app/newsletter-service/.env

# Compilar o código TypeScript
RUN npm run build

# Executar as migrações do Prisma
RUN npx prisma migrate deploy --preview-feature

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
