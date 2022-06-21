
# Base image
FROM node:14-alpine

# installes required packages for our script
RUN apk add --no-cache \
  bash \
  ca-certificates \
  curl \
  jq


# Copies your code file  repository to the filesystem
COPY . .

RUN npm i
RUN ls
# change permission to execute the script and
RUN chmod +x /entrypoint.sh

# file to execute when the docker container starts up
ENTRYPOINT ["sudo", "sh","/entrypoint.sh"]
# CMD ["npm", "run", "start"]