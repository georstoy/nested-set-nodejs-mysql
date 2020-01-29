FROM mysql:8
COPY ./bootstrap/* /docker-entrypoint-initdb.d/
