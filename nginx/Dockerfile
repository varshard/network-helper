FROM nginx

WORKDIR /etc/nginx

COPY mime.types mime.types
COPY pac.conf conf.d/
COPY contents/. /www/data/
