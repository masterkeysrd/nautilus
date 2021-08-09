FROM node:14.17.4-alpine as builder
WORKDIR /usr/app
COPY package*.json .
RUN npm i

FROM node:14.17.4-alpine
WORKDIR /usr/app
COPY --from=builder /usr/app ./
COPY . .
CMD ["npm", "start"]
