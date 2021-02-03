# stage1 - build app first 
FROM node:12 as build
WORKDIR /website
COPY . /website
ENV PATH /website/node_modules/.bin:$PATH
RUN cd website
RUN npm install
RUN npm start -- --port 5000
EXPOSE 5000

# stage 2 - build the final image and copy the react build files
#FROM nginx:1.18
#COPY --from=build /website/website/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY dockerfile-setup/nginx.conf /etc/nginx/conf.d
#EXPOSE 5000
#CMD ["nginx", "-g", "daemon off;"]
