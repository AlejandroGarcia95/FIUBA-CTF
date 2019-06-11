FROM andrewmichaelsmith/docker-heartbleed

RUN openssl req -x509 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt -subj "/C=JP/ST=Osaka/L=Domino City/O=Kaiba Corp/CN= ######## CONGRATULATIONS! YOU HAVE CLEARED THIS LEVEL! ########/CN=10.0.0.2" -nodes -multivalue-rdn

COPY ./website/ /usr/share/apache2/default-site/
COPY ./website/ /var/www/
COPY ./startup.sh /startup.sh

EXPOSE 80

ENTRYPOINT ["bash", "/startup.sh"]

