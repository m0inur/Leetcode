var asteroidCollision = function (asteroids) {
    var smallest = 0;
    var hasCrashed = true;

    for (let i = 0; 1 == 1; i++) {
        if (asteroids[i] > -1 && asteroids[i + 1] < 0) {
            if (asteroids[i] == Math.abs(asteroids[i + 1])) {
                asteroids.splice(i, 1);
                asteroids.splice(i, 1);
            } else {
                smallest = Math.min(asteroids[i], Math.abs(asteroids[i + 1]));
                if (asteroids[i] == smallest) {
                    asteroids.splice(i, 1);
                } else {
                    asteroids.splice(i + 1, 1);
                }
            }
            hasCrashed = true;
        }

        if (asteroids[i + 1] == undefined) {
            i = -1;

            if (!hasCrashed || Math.min(...asteroids) > 0) {
                return asteroids;
            }

            hasCrashed = false;
        }
    }
};