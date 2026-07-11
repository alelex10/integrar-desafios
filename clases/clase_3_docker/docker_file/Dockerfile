# imagen node: verciom
FROM node:18.20.6-alpine3.21
# carpeta de trabajo
WORKDIR /app
# copiar archivos
COPY package.json ./
# instalar dependencias
RUN npm install
# copiar archivos
COPY . .
# 
EXPOSE 3000
CMD ["npm", "start"]
