FROM node:12.14.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "prod" ]
