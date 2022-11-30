FROM node:18

WORKDIR /issue-api
COPY package.json .
RUN npm install
COPY . .

CMD npm run migrate && npm start