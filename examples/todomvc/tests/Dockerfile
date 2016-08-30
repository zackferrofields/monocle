FROM node

# Create app directory
RUN mkdir -p /usr/src/test
WORKDIR /usr/src/test

# Install app dependencies
COPY package.json /usr/src/test/
RUN npm i
