# Dockerfile
FROM node:18.18.1-alpine3.18

# create destination directory
RUN mkdir -p /usr/src/antonioyosica-website
WORKDIR /usr/src/antonioyosica-website

# copy the app, note .dockerignore
COPY src /usr/src/antonioyosica-website
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "start" ]
