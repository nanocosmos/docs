# stage1 - build app first 
FROM node:14-slim as build

WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app/website
RUN npm i
RUN npm run build
ENV PORT 3000
ENV DOCS_ENV gitlab
EXPOSE $PORT
#CMD [ "npm", "start"]

# stage 2 - build the final image and copy the react build files
FROM nginx:1.18
COPY --from=build /app/website/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY dockerfile-setup/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
