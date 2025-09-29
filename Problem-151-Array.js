/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s1 = s.trim();

    let word = s1.split(/\s+/);
    word.reverse();
    return word.join(" ")

};
