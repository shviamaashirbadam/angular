# FROM node:8.9-alpine

# # set working directory
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY webapp/package.json /usr/src/app/package.json
# RUN npm install npm@latest -g
# RUN npm install -g @angular/cli@v6.0.3
# RUN ng update @angular/cli --migrate-only --from=1.7.4

# # add app
# COPY . /usr/src/app

# # start app
# CMD ng serve --host 0.0.0.0
FROM node:8.9-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install npm@v6.1.0
RUN npm install -g @angular/cli@v6.0.8
RUN npm install chart.js --save
RUN npm install ng2-charts --save
RUN npm install d3
RUN npm install ng6-o2-chart --save
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 4200
CMD ng serve --host 0.0.0.0