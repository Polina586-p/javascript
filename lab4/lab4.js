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
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    /**
     * Получает название книги.
     * @id70533735 (@returns) {string} Название книги.
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
     * @id70533735 (@returns) {number} Год публикации.
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
     * @id70533735 (@returns) {number} Цена книги.
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
        console.log(`Название: ${this._title}\nГод публикации: ${this._pubYear}\nЦена: ${this._price}`);
    }

    /**
     * Статический метод для сравнения двух книг по году их издания.
     * Используется для сортировки массива книг.
     ** @param {Book} book1 - Первая книга для сравнения.
     * @param {Book} book2 - Вторая книга для сравнения.
     * @id70533735 (@returns) {number} Разница между годами издания (отрицательная, если book1 старше).
     */
    static compare(book1, book2) {
        return book1.pubYear - book2.pubYear;
    }
}

try {
    const book1 = new Book('1984', 1949, 1000);
    book1.show();
    book1.price = 1900;
    book1.show();

    console.log("Цена book1:", book1.price);

    const book2 = new Book('Война и мир', 1867, 890);
    book2.show();
    const book3 = new Book('Игрок', 1896, 750);
    book3.show();

    const books = [book1, book2, book3];
    books.sort(Book.compare);
    console.log("Книги после сортировки по году издания:");
    for (let i = 0; i < books.length; ++i) {
        books[i].show();
    }

    // Демонстрация ошибки при создании некорректной книги
    try {
        const badBook = new Book('', -1949, -1000);
        badBook.show();
    } catch (err) {
        console.error('Ошибка при создании badBook:', err.message);
    }

} catch (err) {
    console.error('Ошибка в основном блоке:', err.message);
}

/**
 * Проверяет, является ли объект пустым (не содержит собственных строковых и символьных свойств).
 * 
 * @param {Object} obj - Проверяемый объект.
 * @id70533735 (@returns) {boolean} True, если объект пустой или не является объектом, иначе false.
 */
function isEmpty(obj) {
    if (typeof obj !== 'object' || obj === null) return true;

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return Object.getOwnPropertySymbols(obj).length === 0;
}

const obj1 = { [Symbol()]: true };
const obj2 = {};
const obj3 = Object.defineProperty({}, 'name', { value: 'John', enumerable: true });

console.log('obj1 isEmpty?', isEmpty(obj1)); // false, есть символьное свойство
console.log('obj2 isEmpty?', isEmpty(obj2)); // true
console.log('obj3 isEmpty?', isEmpty(obj3)); // false (собственное свойство name)
try {
  // Надёжная реализация isEmpty для разных типов
  function isEmpty(obj) {
    if (obj == null) return true;               // null или undefined
    if (typeof obj === 'string') return obj.trim() === '';
    if (Array.isArray(obj)) return obj.length === 0;
    if (obj instanceof Date) return false;
    if (typeof obj === 'object') return Object.keys(obj).length === 0;
    return false; // для чисел/булевых и т.д.
  }

  // Тестовые объекты
  const obj1 = {};
  const obj2 = { a: 1 };
  const obj3 = [];

  console.log("Объект 1", isEmpty(obj1)); // true
  console.log("Объект 2", isEmpty(obj2)); // false
  console.log("Объект 3", isEmpty(obj3)); // true

  // Объект для управления строкой CSS-классов (улучшенный)
  let classObject = {
    className: "open menu",

    // Добавляет класс, избегая дубликатов; поддерживает chaining
    addClass(cls) {
      if (!cls || typeof cls !== 'string') return this;
      const classes = new Set(this.className.split(/\s+/).filter(Boolean));
      classes.add(cls);
      this.className = Array.from(classes).join(' ');
      return this;
    },

    // Удаляет класс, возвращает this для chaining
    removeClass(cls) {
      if (!cls || typeof cls !== 'string') return this;
      const classes = this.className.split(/\s+/).filter(Boolean).filter(c => c !== cls);
      this.className = classes.join(' ');
      return this;
    }
  };

  classObject.addClass('close');
  console.log("className после addClass('close'):", classObject.className);

  classObject.addClass('open'); // уже есть — не добавится повторно
  console.log("className после addClass('open'):", classObject.className);

  classObject.removeClass('menu');
  console.log("className после removeClass('menu'):", classObject.className);

  // Сериализация в JSON — функции не попадут в JSON
  let jsonString = JSON.stringify(classObject, null, 2);
  console.log("JSON строка:", jsonString);

  // При парсинге мы получаем только данные, без методов
  let object2 = JSON.parse(jsonString);
  console.log('Сравнение JSON строк:', JSON.stringify(object2) === JSON.stringify(classObject)); // true

  // Если нужно восстановить объект с методами, можно воспользоваться классом или прототипом
  class ClassManager {
    constructor(className = '') { this.className = className; }
    addClass(cls) {
      if (!cls) return this;
      const classes = new Set(this.className.split(/\s+/).filter(Boolean));
      classes.add(cls);
      this.className = Array.from(classes).join(' ');
      return this;
    }
    removeClass(cls) {
      if (!cls) return this;
      this.className = this.className.split(/\s+/).filter(Boolean).filter(c => c !== cls).join(' ');
      return this;
    }
  }

  // Восстановление с методами:
  const parsed = JSON.parse(jsonString);             // { className: 'open close' }
  const revived = Object.assign(new ClassManager(), parsed);
  console.log('revived имеет методы:', typeof revived.addClass === 'function');

  // Функция подсчёта секунд с начала дня
  function getSecondsToday() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - start) / 1000);
  }
  console.log("Секунд с начала дня: ", getSecondsToday());

  // Форматирование даты (учитывайте, что месяц в new Date() 0‑based)
  function formatDate(date) {
    return date.toLocaleDateString();
  }

  let date1 = new Date(2026, 5, 9);   // 2026-06-09 (месяцы: 0=январь)
  let date2 = new Date(2000, 11, 1);  // 2000-12-01
  let date3 = new Date(1995, 9, 10);  // 1995-10-10

  console.log("Дата 1:", formatDate(date1));
  console.log("Дата 2:", formatDate(date2));
  console.log("Дата 3:", formatDate(date3));
} catch (error) {
  console.error("Произошла ошибка:", error.message);
}
