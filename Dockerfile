FROM node:lts-alpine

WORKDIR /app

# instala um servidor http simples para servir conteúdo estático
COPY package*.json .

RUN npm i -g @vue/cli

RUN npm i

COPY . .

EXPOSE 8080
