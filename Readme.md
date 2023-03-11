docker run --name booking_care_db -e MYSQL_ROOT_PASSWORD=123123 -p 3308:3306 -d mysql:latest
mysql -h localhost -u root -p123123