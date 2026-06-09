import { fib } from './lab2.js';

/**
 * Возвращает дробную часть числа num, округленную до двух знаков после запятой.
 * Корректно обрабатывает отрицательные числа.
 *
 * @param {number} num - Исходное число.
 * @returns {number} Дробная часть числа.
 */
export function getDecimal(num) {
    return +(num >= 0 ? num % 1 : 1 + (num % 1)).toFixed(2);
}

/**
 * Нормализует URL-адрес, приводя его к протоколу HTTPS.
 * Если протокол отсутствует, добавляет 'https://'.
 *
 * @param {string} url - Исходный URL-адрес.
 * @returns {string} Нормализованный URL-адрес с протоколом HTTPS.
 */
export function normalizeUrl(url) {
   if (url.startsWith('http://')) {
    return 'https://' + url.slice(7);
   }
   if (url.startsWith('https://')) {
    return url;
   }
   return 'https://' + url;
}

/**
 * Проверяет строку на наличие спам-слов ('viagra' или 'xxx').
 * Проверка производится без учета регистра символов.
 *
 * @param {string} str - Проверяемая строка.
 * @returns {boolean} Возвращает true, если найден спам, иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку str до максимальной длины maxlength.
 * Если строка усекается, её последний символ заменяется на многоточие '…',
 * чтобы итоговая длина строки была строго равна maxlength.
 *
 * @param {string} str - Исходная строка.
 * @param {number} maxlength - Максимально допустимая длина строки.
 * @returns {string} Исходная или усеченная строка с многоточием на конце.
 */
export function truncate(str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 1) + '…';
    return str;
}

/**
 * Преобразует строку из дефисного регистра (kebab-case) в верблюжий регистр (camelCase).
 * Например: 'var-test-text' превращается в 'varTestText'.
 *
 * @param {string} str - Строка в формате kebab-case.
 * @returns {string} Строка в формате camelCase.
 */
export function camelize(str) {
    return str.split('-').map((word, index) => {
        if (index === 0)
            return word;
        return word ? word[0].toUpperCase() + word.slice(1) : '';
    }).join('');
}

/**
 * Генерирует массив, содержащий первые n чисел Фибоначчи (от 0-го до n-1-го).
 *
 * @param {number} n - Натуральное число, определяющее количество элементов.
 * @returns {bigint[]} Массив чисел Фибоначчи типа BigInt.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

/**
 * Создает копию массива чисел и сортирует её по убыванию.
 * Не мутирует оригинальный массив.
 *
 * @param {number[]} arr - Неупорядоченный массив чисел.
 * @returns {number[]} Новый массив, отсортированный по убыванию.
 */
export function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}

/**
 * Возвращает новый массив, содержащий только уникальные значения из исходного массива.
 *
 * @template T - Тип элементов массива.
 * @param {T[]} arr - Исходный массив с возможными дубликатами.
 * @returns {T[]} Массив уникальных значений.
 */
export function unique(arr) {
    return [...new Set(arr)];
}
