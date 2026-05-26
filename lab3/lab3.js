// 3.1 Функция getDecimal(num), которая возвращает дробную часть числа num.

export function getDecimal(num){
    return+(num>=0?num%1:1+(num%1)).toFixed(2);
}

// 3.2  Функция normalizeUrl(url), которая выполняет так называемую нормализацию данных.

export function normalizeUrl(url){
   if(url.startsWith('http://')){
    return 'https://' + url.slice(7);
   }
   if(url.startsWith('https://')){
    return url;
   }
   return 'https://' + url;
}

// 3.3 Функция checkSpam(str), которая возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false. 

export function checkSpam(str){
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra')||lowerStr.includes('xxx');
}

// 3.4 Функция truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…" (номер в Юникоде U+2026), так чтобы ее длина стала равна maxlength. 

export function truncate(str, maxlength){
    if(str.length>maxlength)
        return str.slice(0,maxlength-1)+ '…';
    return str;
}

// 3.5 Функция camelize(str), которая преобразуйте строку вида 'var-test-text' в 'varTestText'.

export function camelize(str){
    return str.split('-').map((word,index)=>{
        if(index===0)
            return word;
        return word?word[0].toUpperCase()+word.slice(1):'';
    }).join('');
}

// 3.6 Функция fibs(n), которая для натурального n возвращает массив, заполненный числами Фибоначчи до n-го (не включая его).

import {fib} from './lab2.js';

export function fibs(n){
    const result = [];
    for (let i=0; i<n; i++){
        result.push(fib(i));
    }
    return result;
}

// 3.7 Функция arrReverseSorted(arr), которая принимает неупорядоченный массив чисел arr и возвращает массив из тех же элементов, но отсортированный по убыванию.

export function arrReverseSorted(arr){
    return arr.slice().sort((a,b)=>b-a);
}

// 3.8 Функция unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr. 

export function unique(arr){
    return [...new Set(arr)];
}