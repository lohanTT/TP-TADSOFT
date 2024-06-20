# TP-TADSOFT
Trabalho prático da disciplina de Técnicas Avançadas de Desenvolvimento de Software

# Dependências do projeto
- Docker

# Estrutura do repositório
O repositório contemplará os arquivos de implementação e implantação de duas aplicações de serviço e de um gateway.

Cada aplicação terá sua própria pasta, com seus próprios arquivos e scripts de execução.

Em cada pasta, quando em ambiente de desenvolvimento, deve conter um arquivo ```.env``` preenchido conforme sugerem os arquivos ```.env.example``` para que cada aplicação possa passar pelo processo de **Build**
## Scripts comuns
**Build:** comando para que ocorra o build da aplicação
```
npm run build
```
**Start:** comando para que a aplicação seja iniciada, dado que o build já foi realizado
```
npm start
```
**Dev:** comando para a execução da aplicação em modo de desenvolvimento, apenas com transpilação de código
```
npm run dev
```

**docker-compose:** comando que deverá ser executado ao menos para subir o container do Postgres
```
docker-compose up -d
```

# Deploy
Para realizar o deploy de todas as aplicações, basta ir para a raíz do diretório e, então rodar o comando:
```
docker-compose up -d
```


