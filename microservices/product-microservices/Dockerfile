# Etapa de construcción
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build


# Etapa de producción
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

RUN apk add --no-cache postgresql-client
RUN npm ci --only=production

EXPOSE 3000

CMD ["node", "dist/main.js"]