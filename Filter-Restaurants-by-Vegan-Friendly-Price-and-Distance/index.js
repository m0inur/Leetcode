/**
 * @param {number[][]}
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
	var restaurantID = [];
	for (var i = 0; i < restaurants.length; i++) {
		if (restaurants[i][2] == 0 && veganFriendly == 1 || restaurants[i][3] > maxPrice || restaurants[i][4] > maxDistance) {
			restaurants.splice(i, 1);
			i--;
			continue;
		}
	}

	// Order restaurants by ratings from highest to lowest, if ratings are the same order ratings from highest to lowest
	restaurants.sort((a, b) => {
		if (a[1] > b[1]) {
			return -1;
		}
		if (a[1] == b[1]) {
			if(a[0] > b[0]) {
				return -1;
			}
			return 0;
		}
		return 0;
	});

	for(var i = 0; i < restaurants.length; i++) {
		restaurantID.push(restaurants[i][0]);
	}

	return restaurantID;
};
