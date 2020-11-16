var arrangeWords = function (text) {
    text = text.toLowerCase().split(" ").sort((a, b) => a.length - b.length).join(" ");
    return text.charAt(0).toUpperCase() + text.slice(1);
}