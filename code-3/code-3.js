function divideAndShort(num) {
    if (typeof num !== 'number') {
        return 'Input harus angka'
    } else {
        const str = num.toString()
        const arr = str.split('0')
        console.log(arr)
        const map = arr.map(item => {
            return item.split('').sort((a, b) => parseInt(a) - parseInt(b))
        })
        const join = map.join('').split(',').join('')
        const parse = parseInt(join)
        return parse
    }
}

console.log(divideAndShort(69565601594646056))