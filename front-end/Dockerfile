FROM node:latest

WORKDIR /front-end

COPY . .

EXPOSE 4040

ENV PORT 4040

RUN npm install

CMD ["npm", "start"]