FROM node:16 as runner
WORKDIR /express-cicd

COPY package.json .
RUN npm install 
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]