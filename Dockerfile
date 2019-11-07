FROM node:lts-alpine

WORKDIR /app

# instala um servidor http simples para servir conteúdo estático
COPY package*.json .

RUN yarn global add @vue/cli

RUN yarn

COPY . .

EXPOSE 8080
