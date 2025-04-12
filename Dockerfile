# ———————— Etapa 1: Builder ————————
FROM node:18-alpine AS builder

# Directorio de trabajo
WORKDIR /usr/src/app

# Copiamos package.json y package-lock.json, e instalamos deps
COPY package*.json ./
RUN npm ci

# Copiamos el resto del código y compilamos TS
COPY . .
RUN npm run build

# ————— Etapa 2: Producción ——————
FROM node:18-alpine AS production

WORKDIR /usr/src/app

# Copiamos sólo lo necesario desde builder
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
# Si tienes assets públicos (admin, public), también:
COPY --from=builder /usr/src/app/public ./public

# Exponemos el puerto que usa Strapi
EXPOSE 1337

# Arrancamos Strapi en modo producción
CMD ["node", "dist/server.js"]
