// 3.1 Функция getDecimal(num), которая возвращает дробную часть числа num.

function getDecimal(num){
    return num%1;
}

// 3.2  Функция normalizeUrl(url), которая выполняет так называемую нормализацию данных.

function normalizeUrl(url){
   if(url.startsWith('http://')){
    return 'https://' + url.slice(7);
   }
   if(url.startsWith('https://')){
    return url;
   }
   return 'http://' + url;
}