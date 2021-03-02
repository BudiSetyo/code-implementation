function reverse(par) {
    let len = par.length
    let str = ''
    for (let i = len; i > 0; i--) {
        str += word[i - 1]
    }
    return str
}

let word = 'malam'

if (typeof word !== 'string') {
    console.log('Input harus string')
} else if (word === reverse(word)) {
    console.log(`Kata ${word} termasuk kata Palindrome.`);
} else {
    console.log(`Kata ${word} termasuk bukan kata Palindrome.`);
}