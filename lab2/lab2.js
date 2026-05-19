
// 2.1 функция pow(x,n), которая возвращает x в степени n (n - целое число). 
function pow(x,n){
    return x**n;
}

// 2.2 функция sumTo(n), которая для данного натурального n вычисляет сумму чисел от 1 до n включительно.
function sumTo(n){
    return n*(n+1)/2;
}

// 2.3 функция-предикат isLeapYear(year), которая проверят год year на високосность.
function isLeapYear(year){
    return (year%400==0)||(year%4==0 && year%100!=0);
}

// 2.4 функция factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов n!= n*(n-1)!. 
function factorial(n){ 
    if(n==0) return 1n;
    return BigInt(n)*factorial(n-1);
    
}

// 2.5 функция fib(n), которая возвращает n-е число Фибоначчи.
function fib(n){ 
    if(n==0) return 0n;

    
}

// 2.6 функция compare(), которая принимает целочисленное значение x и возвращает анонимную функцию.
function compare(n){ 

}

// 2.7 функция sum(), которая возвращает сумму всех своих аргументов.
function sum(n){ 

}

// 2.8 функция addBlackSpot(), которая принимает на вход объект и возвращает этот объект с добавленным к нему символьным свойством blackSpot=true, которое бёрется из глобального реестра символов.
function addBlackSpot(obj){ 
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}