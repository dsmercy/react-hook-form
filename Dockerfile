FROM node:18-alpine
WORKDIR /react-hook-form/
COPY public/ /react-hook-form/public
COPY src/ /react-hook-form/src
COPY package.json /react-hook-form/
RUN npm install
CMD ["npm", "start"]
