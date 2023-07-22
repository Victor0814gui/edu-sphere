# Use a imagem oficial do Node.js como base
FROM node:16-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app


COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./


COPY . .

RUN npm install



# Exponha a porta do servidor do Express.js
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
