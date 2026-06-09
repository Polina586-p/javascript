/**
 * Класс, представляющий книгу.
 */
class Book {
    /**
     * Создает экземпляр книги.
     * 
     * @param {string} title - Название книги (непустая строка).
     * @param {number} pubYear - Год публикации (положительное целое число).
     * @param {number} price - Цена книги (положительное число).
     * @throws {Error} Если переданные аргументы не валидны.
     */
    constructor(title, pubYear, price) {
        /** @private {string} */
        this._title = '';
        /** @private {number} */
        this._pubYear = 0;
        /** @private {number} */
        this._price = 0;

        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    /**
     * Получает название книги.
     * @returns {string} Название книги.
     */
    get title() {
        return this._title;
    }

    /**
     * Устанавливает название книги.
     * 
     * @param {string} text - Название книги (без пробелов по краям).
     * @throws {Error} Если значение не является строкой или строка пустая.
     */
    set title(text) {
        if (typeof text !== 'string' || text.trim() === '') {
            throw new Error('Title must be a non-empty string.');
        }
        this._title = text.trim();
    }

    /**
     * Получает год публикации.
     * @returns {number} Год публикации.
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * Устанавливает год публикации.
     * 
     * @param {number} newPubYear - Год публикации.
     * @throws {Error} Если значение не является положительным целым числом.
     */
    set pubYear(newPubYear) {
        if (typeof newPubYear !== 'number' || newPubYear <= 0 || !Number.isInteger(newPubYear)) {
            throw new Error('pubYear must be a positive integer.');
        }
        this._pubYear = newPubYear;
    }

    /**
     * Получает цену книги.
     * @returns {number} Цена книги.
     */
    get price() {
        return this._price;
    }

    /**
     * Устанавливает цену книги.
     * 
     * @param {number} newPrice - Цена книги.
     * @throws {Error} Если значение не является положительным числом.
     */
    set price(newPrice) {
        if (typeof newPrice !== 'number' || newPrice <= 0) {
            throw new Error('Price must be a positive number.');
        }
        this._price = newPrice;
    }

    /**
     * Выводит информацию о книге в консоль.
     */
    show() {
        console.log(`Название: ${this._title},
Год публикации: ${this._pubYear},
Цена: ${this._price}`);
    }

    /**
     * Статический метод для сравнения двух книг по году их издания.
     * Используется для сортировки массива книг.
     * 
     * @param {Book} book1 - Первая книга для сравнения.
     * @param {Book} book2 - Вторая книга для сравнения.
     * @returns {number} Разница между годами издания (отрицательная, если book1 старше).
     */
    static compare(book1, book2) {
        return book1.pubYear - book2.pubYear;
    }
}

try {
    let book1 = new Book('1984', 1949, 1000);
    book1.show();
    book1.price = 1900;
    book1.show();

    console.log("Цена book1:", book1.price);

    let book2 = new Book('Война и мир', 1867, 890);
    book2.show();
    let book3 = new Book('Игрок', 1896, 750);
    book3.show();

    let books = [book1, book2, book3];
    books.sort(Book.compare);
    console.log("Книги после сортировки по году издания:");
    for (let i = 0; i < books.length; ++i) {
        books[i].show();
    }

    /**
     * Проверяет, является ли объект пустым (не содержит собственных строковых и символьных свойств).
     * 
     * @param {Object} obj - Проверяемый объект.
     * @returns {boolean} True, если объект пустой или не является объектом, иначе false.
     */
    function isEmpty(obj) {
        if (typeof obj !== 'object' || obj === null) return true;

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) return false;
        }
        return Object.getOwnPropertySymbols(obj).length === 0;
    }

    let obj1 = { [Symbol()]: true };
    let obj2 = {};

    console.log("Объект 1", isEmpty(obj1));
    console.log("Объект 2", isEmpty(obj2));

    /**
     * Объект для управления строкой CSS-классов.
     * 
     * @type {{
     *   className: string,
     *   addClass: function(string): this,
     *   removeClass: function(string): void
     * }}
     */
    let classObject = {
        className: "open menu",

        /**
         * Добавляет класс в строку классов, если его там еще нет.
         * Поддерживает цепочку вызовов (Chaining).
         * 
         * @param {string} cls - Имя добавляемого класса.
         * @returns {this} Текущий контекст объекта для цепочки вызовов.
         */
        addClass(cls) {
            let classes = this.className.split(' ');
            if (!classes.includes(cls)) {
                this.className += " " + cls;
            }
            return this;
        },

        /**
         * Удаляет класс из строки классов.
         * 
         * @param {string} cls - Имя удаляемого класса.
         */
        removeClass(cls) {
            let classes = this.className.split(' ');
            let index = classes.indexOf(cls);
            if (index !== -1) {
                classes.splice(index, 1);
                this.className = classes.join(' ');
            }
        }
    };

    classObject.addClass('close');
    console.log("className после addClass('close'):", classObject.className);

    classObject.addClass('open');
    console.log("className после addClass('open'):", classObject.className);

    classObject.removeClass('menu');
    console.log("className после removeClass('menu'):", classObject.className);


    let jsonString = JSON.stringify(classObject, null, 2);
    console.log("JSON строка:", jsonString);

    let object2 = JSON.parse(jsonString);
    console.log('Сравнение объектов из JSON:', JSON.stringify(object2) === JSON.stringify(classObject));

    /**
     * Вычисляет количество секунд, прошедших с начала сегодняшнего дня.
     * 
     * @returns {number} Количество секунд.
     */
    function getSecondsToday() {
        let now = new Date();
        let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        return Math.floor((now - start) / 1000); 
    }

    console.log("Секунд с начала дня: ", getSecondsToday());

    /**
     * Форматирует объект даты в локальную строковую запись.
     * 
     * @param {Date} date - Объект даты для форматирования.
     * @returns {string} Локализованное представление даты.
     */
    function formatDate(date) {
        return date.toLocaleDateString();
    }

    let date1 = new Date(2026, 6, 9); 
    let date2 = new Date(2000, 11, 1); 
    let date3 = new Date(1995, 9, 10); 

    console.log("Дата 1:", formatDate(date1));
    console.log("Дата 2:", formatDate(date2));
    console.log("Дата 3:", formatDate(date3));
} catch (error) {
    console.error("Произошла ошибка:", error.message);
}