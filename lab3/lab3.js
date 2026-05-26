// 3.1 Функция getDecimal(num), которая возвращает дробную часть числа num.

export function getDecimal(num){
    return num%1;
}

// 3.2  Функция normalizeUrl(url), которая выполняет так называемую нормализацию данных.

export function normalizeUrl(url){
   if(url.startsWith('http://')){
    return 'https://' + url.slice(7);
   }
   if(url.startsWith('https://')){
    return url;
   }
   return 'http://' + url;
}

// 3.3 Функция checkSpam(str), которая возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false. 

export function checkSpam(str){

}

// 3.4 Функция truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…" (номер в Юникоде U+2026), так чтобы ее длина стала равна maxlength. 

export function truncate(str, maxlength){
    
}

// 3.5 Функция camelize(str), которая преобразуйте строку вида 'var-test-text' в 'varTestText'.

export function camelize(str){

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

}

// 3.8 Функция unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr. 

export function unique(arr){

}