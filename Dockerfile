<<<<<<< HEAD
FROM node:10.16.0 as build

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app
COPY . /app
WORKDIR /app
RUN npm run dll
RUN npm run build

FROM nginx:alpine as production
RUN rm -rf /etc/nginx/nginx.conf
ADD nginx.conf  /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["/bin/sh", "-c", "envsubst '$SERVER_URL $API_TOKEN' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"]
=======
#Stage 1
FROM node:10.16.0 as build
COPY . /app
WORKDIR /app
RUN npm install

#Stage 2 - the production environment
FROM nginx:alpine as production
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 7235a11... CI
