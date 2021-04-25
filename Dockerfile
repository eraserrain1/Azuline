# Generate Enviorment
FROM node:latest

# Create the directory!
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Copy and Install our bot
COPY package.json /usr/src/bot
RUN npm install

# Our precious bot
COPY . /usr/src/bot

# Enviorment Variables
ENV BOT_TOKEN=""
ENV COMMAND_PREFIX=""

# Start me!
CMD ["node", "index.js"]