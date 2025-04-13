# ————— Etapa 1: Builder —————
FROM node:18-slim AS builder

# Instalamos herramientas de compilación y limpiamos cache
RUN apt-get update && \
    apt-get install -y build-essential python3 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Copiamos package.json y lockfile, e instalamos deps
COPY package*.json ./
RUN npm ci

# Copiamos el resto y compilamos TS
COPY . .
RUN npm run build

# ————— Etapa 2: Producción —————
FROM node:18-slim AS production

WORKDIR /usr/src/app

# Copiamos solo lo necesario
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
# Si tienes assets públicos:
# COPY --from=builder /usr/src/app/public ./public

# Limpiamos posibles caches de npm (opcional)
RUN npm prune --production

EXPOSE 1337

CMD ["npm", "run", "start"]
