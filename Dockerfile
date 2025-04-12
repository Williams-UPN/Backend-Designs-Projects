# 1. Imagen base con Node.js
FROM node:18-alpine

# 2. Crear carpeta de la app
WORKDIR /usr/src/app

# 3. Copiar package.json y lock, e instalar deps
COPY package*.json ./
RUN npm install

# 4. Copiar todo el código
COPY . .

# 5. Build de TypeScript (si tu proyecto usa TS)
RUN npm run build

# 6. Exponer el puerto Strapi
EXPOSE 1337

# 7. Comando de arranque en producción
CMD ["npm", "run", "start"]
