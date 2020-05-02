INSERT INTO room (room_number, closed)
VALUES (111, 'n'),
		(222, 'n'),
        (999, 'y');

INSERT INTO restaurants (room_number, restaurant_name, restaurant_image_url, rating, num_of_yes, city, rest_url)
VALUES (111, "Baan Thai Restaurant", "https://s3-media3.fl.yelpcdn.com/bphoto/1B9y37pclxYmEWh0uMtESQ/o.jpg", 4, 0, "Orinda", "http://www.baanthai-orinda.com/"),
		(111, "Petra Cafe", "https://s3-media2.fl.yelpcdn.com/bphoto/JomN2PkFM0o7J_9T5SqAWQ/o.jpg", 4, 0, "Orinda", "http://www.orindatheatresquare.com/index.php/dinning/petra-cafe"),
		(111, "Reem's Steaks", "https://s3-media4.fl.yelpcdn.com/bphoto/7bSsp7yp7dLxkJUxh5INxw/o.jpg", 4, 0, "Orinda", "https://www.yelp.com/biz/reems-steaks-orinda?start=80"),
		(111, "Hanazen", "https://s3-media4.fl.yelpcdn.com/bphoto/v7qHrEAbs6JqjYVKfYqqxA/o.jpg", 5, 0, "Orinda","http://www.myhanazen.com/"),
		(222, "Serika Restaurant", "https://s3-media3.fl.yelpcdn.com/bphoto/nUiUjdxYZ5Qg0C7GfJUIRg/o.jpg", 4, 0, "Orinda","https://www.yelp.com/biz/serika-restaurant-orinda"),
		(222, "La Piazza Pizzeria Trattoria", "https://s3-media1.fl.yelpcdn.com/bphoto/CA-mvEsnJgTv2q0G2xUqDQ/o.jpg", 4, 0, "Orinda","https://www.lapiazzaorinda.com/"),
		(999, "Maya Mexican Grill", "https://s3-media2.fl.yelpcdn.com/bphoto/huNqPnGh5Kync7bEI78V6w/o.jpg", 4, 0, "Orinda","https://www.yelp.com/biz/maya-mexican-grill-orinda-4"),
    	(999, "Village Pizza", "https://s3-media4.fl.yelpcdn.com/bphoto/XnMlFC_auD6gCAT4xCSa3A/o.jpg", 3, 1, "Orinda","http://www.villagepizzaorinda.com/"),
		(999, "Four Barrel Coffee", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 4, 2, "Orinda","https://www.fourbarrelcoffee.com/")       
        ;