module.exports = function reverse (n) {
    let number = Math.abs(n);
    let digits = Array.from(number.toString());
    return digits.reverse().join('');
}
