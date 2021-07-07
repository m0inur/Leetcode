/*
    https://leetcode.com/problems/encode-and-decode-tinyurl/
    TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.
    
    There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
    
    Implement the Solution class:
        Solution() Initializes the object of the system.
        String encode(String longUrl) Returns a tiny URL for the given longUrl.
        String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.
    
    Example 1:
        Input: url = "https://leetcode.com/problems/design-tinyurl"
        Output: "https://leetcode.com/problems/design-tinyurl"
        
        Explanation:
        Solution obj = new Solution();
        string tiny = obj.encode(url); // returns the encoded tiny url.
        string ans = obj.decode(tiny); // returns the original url after deconding it.
        
    Constraints:
        1 <= url.length <= 104
        url is guranteed to be a valid URL.
 */

let tinyUrlsMap = new Map();
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let encode = function(longUrl) {
    let tinyUrl = "http://tinyurl.com/";
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < 6; i++) {
        let char = characters.charAt(Math.floor(Math.random() *
            characters.length));
        tinyUrl += char;
    }
    tinyUrlsMap.set(tinyUrl, longUrl);
    return tinyUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
let decode = function(shortUrl) {
    return tinyUrlsMap.get(shortUrl);
};
// Memory Usage: 39.5 MB, less than 98.86% of JavaScript online submissions for Encode and Decode TinyURL.