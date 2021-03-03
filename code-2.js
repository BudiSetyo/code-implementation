const split = string => {
    if (typeof string !== 'string') {
        return 'Input harus string';
    }

    let arr = [];
    
    for (let i = 0; i < string.length; i++) {
        const length = arr.length < 1 ? arr.length : arr.length - 1;

        if (!arr[length]) {
            arr[length] = '';
        }

        if (string[i] === ' ') {
            arr[length + 1] = ' ';
        } else if (arr[length] === ' ') {
            arr[length + 1] = '';
            arr[length + 1] = string[i];
        } else {
            arr[length] += string[i];
        }
    }

    let words = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        words += arr[i];
    }
    return words
}

console.log(split('ada berapa buku'))