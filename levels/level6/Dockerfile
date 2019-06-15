FROM strm/apache

RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y slapd ldap-utils php5-ldap && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY phpldap /www

COPY ./ldap-conf /etc/ldap/slapd.d
RUN chown openldap -R /etc/ldap/slapd.d

COPY ./ldap-data /var/lib/ldap
RUN chown openldap -R /var/lib/ldap

COPY main.sh /
COPY config.php /www/config/config.php

EXPOSE 80

ENTRYPOINT ["/main.sh"]
