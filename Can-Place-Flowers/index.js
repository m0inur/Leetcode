var canPlaceFlowers = function (flowerbed, n) {
    var placedFlower = true;
    var i = 0;

    while (n > 0) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
            n--;
            flowerbed[i] = 1;
            placedFlower = true;
        }

        i++;
        if (i == flowerbed.length) {
            if (!placedFlower) {
                return false;
            }
            i = 0;
            placedFlower = false;
        }
    }

    return true;
}