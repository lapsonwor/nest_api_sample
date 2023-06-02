FROM public.ecr.aws/docker/library/node:16.14.2-buster AS builder
WORKDIR /app
COPY ./package*.json ./
COPY ./yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
# CMD [ "sh", "-c", "npm run start:prod" ]
RUN chmod +x entrypoint.sh
CMD ["/bin/bash", "./entrypoint.sh"]
