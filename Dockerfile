#base image
FROM node:18

# set working directory
RUN mkdir /usr/src/app
#copy all files from current directory to docker
COPY . /usr/src/app

WORKDIR /usr/src/app

# install and cache app dependencies
RUN npm install

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# start app
CMD ["npm", "start"]