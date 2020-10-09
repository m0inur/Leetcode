var defangIPaddr = function (address) {
    address = address.split('');

    for (var i = 0; i < address.length; i++) {
        if (address[i] == ".") {
            address.splice(i, 1, "[.]");
        }
    }

    return address.join('');
};