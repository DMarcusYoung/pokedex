CREATE TABLE  room (
    id INT AUTO_INCREMENT NOT NULL,
    room_number INT NOT NULL,
    closed VARCHAR(1) DEFAULT 'n',
    PRIMARY KEY(id)
);

CREATE TABLE restaurants (
    id INT AUTO_INCREMENT NOT NULL,
    room_number INT NOT NULL,
    restaurant_name VARCHAR(255),
    restaurant_image_url VARCHAR(255),
    num_of_yes INT DEFAULT 0,
    PRIMARY KEY(id)
);
