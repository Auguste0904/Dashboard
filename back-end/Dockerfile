FROM node:latest

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package.json /

USER node

RUN npm i

COPY --chown=node:node . .

EXPOSE 8080

CMD ["node", "app"]






# ADD ./ /node_app

# WORKDIR /node_app

# EXPOSE 8080

# RUN rm -rf node_modules

# RUN npm install dotenv@latest

# RUN npm install --dotenv-extended

# RUN npm install /node_app

# ENV NODE_ENV=development

# CMD ["node", "app"]