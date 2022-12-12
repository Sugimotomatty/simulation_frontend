FROM node:16.15.1-alpine
WORKDIR /usr/src/app
CMD ["sh"]

# RUN apt-get update

RUN npm install -g @aws-amplify/cli

