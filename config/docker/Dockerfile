#latest node version (18.11.0)
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3300

CMD ["npm", "run", "dev"]
