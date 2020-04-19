DROP DATABASE IF EXISTS chicken_tinder_db;

CREATE DATABASE chicken_tinder_db;

USE chicken_tinder_db;

CREATE TABLE room (
    id INT AUTO_INCREMENT NOT NULL,
    room_number INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE choies (
    id INT AUTO_INCREMENT NOT NULL,
    room_id INT,
    restaurant_name VARCHAR(255),
    count INT DEFAULT 0,
    PRIMARY KEY(id)
);


