DROP TABLE IF EXISTS clients;

create table clients (
    id int unsigned auto_increment primary key,
    first_name varchar(50), 
    last_name varchar(50)
) ENGINE=INNODB;

 
