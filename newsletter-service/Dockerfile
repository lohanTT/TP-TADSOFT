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

# Compilar o código TypeScript
RUN npm run build

RUN npx prisma generate

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
