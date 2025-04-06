FROM node:18-alpine

WORKDIR /website/
COPY ./public /website/public/
COPY ./src /website/src/
COPY ./*.* /website/
RUN npm install

EXPOSE 80


ENTRYPOINT ["npm", "run", "dev"]
