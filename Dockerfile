FROM node:18-alpine3.15

# Set working directory
RUN mkdir -p /var/www/pokedex
WORKDIR /var/www/pokedex

# Copiar el directorio y su contenido
COPY . ./var/www/pokedex
COPY package.json tsconfig.json tsconfig.build.json /var/www/pokedex/
RUN yarn install --prod
RUN yarn build


# Dar permiso para ejecutar la applicación
RUN adduser --disabled-password willcas
RUN chown -R willcas:8134 /var/www/pokedex
USER willcas

# Limpiar el caché
RUN yarn cache clean --force

EXPOSE 3000

CMD [ "yarn","start" ]