# mysql CLI client 
 - connect
    `mysql -h 127.0.0.1 -P 3306 --protocol=tcp -u root -D nested-set -p`
 - bootstrap
    `mysql -h 127.0.0.1 -P 3306 --protocol=tcp -u root -D mysql -p -e 'source ./bootstrap/db.sql'`