function palindrom1(str){
    //нижний регистр
    str = str.toLowerCase();
    //строку в массив
    let str2 = str.split('');
    //развернуть массив
    str2 = str2.reverse();
    //обьединить в строку
    str2 = str2.join('');
    if (str == str2) return true;
    else return false;
}

function palindrom2(str){
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}

const palindrom = str => {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}

console.log(palindrom('hello'))
console.log(palindrom('abba'))