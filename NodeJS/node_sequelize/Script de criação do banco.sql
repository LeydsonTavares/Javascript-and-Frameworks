create database node_mysql;

use node_mysql;

create table if not exists users(
id int auto_increment primary key,
name varchar(40),
cpf decimal(11,0),
date_of_birth date
)default charset=utf8;

create table if not exists Todos (
id int not null auto_increment primary Key,
title varchar(40),
description varchar(100)
);

select * from Todos;