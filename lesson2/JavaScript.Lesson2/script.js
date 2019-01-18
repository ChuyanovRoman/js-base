//The task 1.
function task1() {
    alert('Задание 1:Дан код:\n1.   var a = 1, b = 1, c, d;\n2.   c = ++a; alert(c);  // 2\n3.   d = b++; alert(d);  // 1\n4.   c = (2+ ++a); alert(c);  // 5\n5.   d = (2+ b++); alert(d);  // 4\n6.   alert(a);  // 3\n7.   alert(b);  // 3\nПочему код даёт именно такие результаты?');
    var a = 1,
        b = 1,
        c, d;
    c = ++a;
    alert('Строки 1 и 2:\n1.   var a = 1,b = 1,c, d;\n2.   c = ++a;alert(c);  // 2\n\nЗдесь c=' + c + ',потому что<++>находятся перед<a>,поэтому<с>становится равно<а>,когда<а>уже стало равно 2.')
    d = b++;
    alert('Строка 3:\n3.   d = b++;alert(d);  // 1\n\nЗдесь d=' + d + ',потому что<++>находятся после<b>,поэтому<d>становится равно<b>,когда<b>еще равно 1.');
    c = (2 + ++a);
    alert('Строка 4:\n4.   c = (2 + ++a);alert(c);  // 5\n\nЗдесь c=' + c + ',потому что<++>находятся перед<a>,поэтому<2>плюсуется с<а>,когда<а>уже стало равно 3.');
    d = (2 + b++);
    alert('Строка 5:\n5.   d = (2 + b++);alert(d);  // 4\n\nЗдесь d=' + d + ',потому что<++>находятся после<b>,поэтому<2>плюсуется с<b>,когда<b>еще равно 2.');
    alert('Строка 6:\n6.   alert(a);  // 3\n\nЗдесь a=' + a + ',потому что на строке 1-|var a = 1,b = 1,c, d;|мы приствоили переменной<a>значение<1>,на строке 2-|c = ++a;alert(c);|<a>стало равно 2,на строке 4-|c = (2+ ++a);alert(c);|<a>стало равно 3.');
    alert('Строка 7:\n7.   alert(b);  // 3\n\nЗдесь b=' + b + ',потому что на строке 1-|var a = 1,b = 1,c, d;|мы приствоили переменной<b>значение<1>,на строке 3-|d = b++;alert(d);|<b>стало равно 2,на строке 5-|d = (2+ b++);alert(d);|<b>стало равно 3.');
}

//The task 2.
var a, x;

function task2() {
    alert('Задание 2:Чему будет равен x в примере ниже?\n\nvar a = 2;\nvar x = 1 + (a *= 2);');
    a = 2;
    x = 1 + (a *= 2);
    alert('x будет равен пяти(' + x + ')');
}

//The task 3.
function task3() {
    alert('Задание 3:Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.Затем написать скрипт,который работает по следующему принципу:\no  если a и b положительные,вывести их разность.\no  если а и b отрицательные,вывести их произведение.\no  если а и b разных знаков,вывести их сумму.\nНоль можно считать положительным числом.');
    a = parseInt(prompt('Введите число <a>:'));
    b = parseInt(prompt('Введите число <b>:'));
    if (isNaN(a) || isNaN(b)) {
        alert('Нужно ввести число в обе строки.');
        task3();
    } else if (a >= 0 && b >= 0) {
        c = a - b;
        alert('a и b положительные.Арифметическая операция:Разность.');
        alert('Разность a и b равна:' + c);
    } else if (a < 0 && b < 0) {
        c = a * b;
        alert('a и b отрицательные.Арифметическая операция:Произведение.');
        alert('Произведение a и b равно:' + c);
    } else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
        c = a + b;
        alert('a и b разных знаков.Арифметическая операция:Сумма.');
        alert('Сумма a и b равна:' + c);
    } else {
        alert('Нужно ввести число в обе строки.');
        task3();
    }
}

//The task 4.
function task4() {
    alert('Задание 4:Присвоить переменной а значение в промежутке [0..15].С помощью оператора switch организовать вывод чисел от a до 15.');
    check();
}

function check() {
    a = parseInt(prompt('Введите число от 0 до 15.'));
    switch (a) {
        case 0:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 1:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 2:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 3:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 4:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 5:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 6:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 7:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 8:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 9:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 10:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 11:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 12:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 13:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 14:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        case 15:
            for (; a <= 15; a++) {
                alert(a);
            }
            break;
        default:
            check();
    }
}
/*Данный код можно записать гораздо проще и короче,не используя цикл,
       но условие задания требует обязательное использование switсh,
       а использование цикла делает эту часть кода интереснее.*/

//The task 5.
function task5() {
    let a, b;
    alert('Задание 5:Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.');

    //Сумма.
    fplus();

    function fplus() {
        alert('Арифметическая операция 1:Сумма:');
        a = parseInt(prompt('Введите первое число:'));
        b = parseInt(prompt('Введите второе число:'));
        if (isNaN(a) || isNaN(b)) {
            alert('Нужно ввести число в обе строки.');
            (fplus());
        }
    }

    function plus(a, b) {
        return (a + b);
    }
    c = plus(a, b);
    alert(c);

    //Разность.
    fminus();

    function fminus() {
        alert('Арифметическая операция 2:Разность:');
        a = parseInt(prompt('Введите первое число:'));
        b = parseInt(prompt('Введите второе число:'));
        if (isNaN(a) || isNaN(b)) {
            alert('Нужно ввести число в обе строки.');
            (fminus());
        }
    }

    function minus(a, b) {
        return (a - b);
    }
    c = minus(a, b);
    alert(c);

    //Деление.
    fdiv();

    function fdiv() {
        alert('Арифметическая операция 3:Деление:');
        a = parseInt(prompt('Введите первое число:'));
        b = parseInt(prompt('Введите второе число:'));
        if (isNaN(a) || isNaN(b)) {
            alert('Нужно ввести число в обе строки.');
            (fdiv());
        }
    }

    function div(a, b) {
        return (a / b);
    }
    c = div(a, b);
    alert(c);

    //Произведение.
    fmult();

    function fmult() {
        alert('Арифметическая операция 4:Произведение:');
        a = parseInt(prompt('Введите первое число:'));
        b = parseInt(prompt('Введите второе число:'));
        if (isNaN(a) || isNaN(b)) {
            alert('Нужно ввести число в обе строки.');
            (fmult());
        }
    }

    function mult(a, b) {
        return (a * b);
    }
    c = mult(a, b);
    alert(c);
}

//The task 6.
function task6() {
    alert('Задание 6:Реализовать функцию с тремя параметрами:function mathOperation(arg1,arg2,operation),где arg1,arg2 – значения аргументов,operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3)и вернуть полученное значение(использовать switch).');
    let arg1, arg2, operation;
    f();

    function f() {
        arg1 = parseInt(prompt('Введите первое число:'));
        arg2 = parseInt(prompt('Введите второе число:'));
        if (isNaN(arg1) || isNaN(arg2)) {
            alert('Нужно ввести число в обе строки.');
            (f());
        }
    }
    mathOperation(arg1, arg2, operation);
}

function mathOperation(arg1, arg2, operation) {
    operation = prompt('Введите операцию,которую хотите осуществить:Сумма,Разность,Деление,Произведение:');
    switch (operation) {
        case 'Сумма':
            a = arg1 + arg2;
            alert(a);
            break;
        case 'Разность':
            a = arg1 - arg2;
            alert(a);
            break;
        case 'Деление':
            a = arg1 / arg2;
            alert(a);
            break;
        case 'Произведение':
            a = arg1 * arg2;
            alert(a);
            break;
        default:
            alert('Вы можете использовать только следующие операции:Сумма,Разность,Деление,Произведение');
            mathOperation(arg1, arg2, operation);
    }
}

//The task 7.
function task7() {
    alert('Задание 7:Сравнить null и 0.Попробуйте объяснить результат.');
    alert('Если сравнить null и 0,то выдаст<' + (null == 0) + '>,потому что значение<null>,несмотря на то что переводится как Ноль,является специальным значением,в отличие от значения<0>,которое может являтся как числом,так и строкой,и приводится к булевому значению<false>.');
}

//The task 8.
let val, pow;

function task8() {
    alert('Задание 8:С помощью рекурсии организовать функцию возведения числа в степень.Формат:function power(val, pow),где val – заданное число,pow – степень.');
    val = parseInt(prompt('Введите число:'));
    pow = parseInt(prompt('Введите степень:'));
    alert(power(val, pow));
}

function power(val, pow) {
    if (pow != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}