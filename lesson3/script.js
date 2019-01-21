/*
1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100
2) С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

3) * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:

for(…){// здесь пусто}

4) * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

//The task 1.
function task1() {
    let a = 0;
    let arr = [];
    while (a <= 100) {
        arr.push(a++);
    }
    alert(arr);
}

//The task 2.
function task2() {
    let a = 0;
    let arr = [];
    do {
        if (a == 0) {
            arr.push(a + ' это ноль');
        } else if (a % 2 == 1) {
            arr.push('\n' + a + ' нечетное число');
        } else if (a % 2 == 0) {
            arr.push('\n' + a + ' четное число');
        }
        a++;
    }
    while (a <= 10);
    alert(arr);
}

//The task 2.Training manual.
function countBasketPrice() {
    let arr = [];
    let h = prompt('Выберите что хотите приобрести:Стол,Стул,Диван');
    let f = 0;
    do
        if (h == 'Стол') {
            arr.push('Стол');
            f = f + 200;
            break;
        } else if (h == 'Стул') {
        arr.push('Стул');
        f = f + 100;
        break;
    } else if (h == 'Диван') {
        arr.push('Диван');
        f = f + 300;
        break;
    }
    while (f = 0);
    alert('Сумма стоимости:' + f);
}

//The task 3.
function task3() {
    let arr = [];
    for (let a = 0; a < 10; arr.push(a++)) {}
    alert(arr);
}

//The task 4.
function task4() {
    let a = 'x';
    for (let z = 0; z <= 20; z++) {
        console.log(a);
        a += 'x';
    }
}