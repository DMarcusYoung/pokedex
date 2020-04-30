
INSERT INTO room (room_number, closed)
VALUES (111, 'n'),
		(222, 'n'),
        (999, 'y');

INSERT INTO restaurants (room_number, restaurant_name, restaurant_image_url, rating, num_of_yes)
VALUES (111, "Four Barrel Coffee 111 1", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 1, 0),
		(111, "Four Barrel Coffee 111 2", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 2, 0),
		(111, "Four Barrel Coffee 111 3", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 3, 0),
		(111, "Four Barrel Coffee 111 4", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 4, 0),
		(222, "Four Barrel Coffee 222 1", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 5, 0),
		(222, "Four Barrel Coffee 222 2", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 6, 0),
		(999, "Four Barrel Coffee 999 1", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 7, 0),
    	(999, "Four Barrel Coffee 999 2", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 8, 1),
		(999, "Four Barrel Coffee 999 2", "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg", 9, 2)        
        ;