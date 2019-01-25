/*
1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

2) Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)

3) * На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
*/

//Task 1.
function t1() {
    let l = parseInt(prompt('Введите число:'));
    let i = {
        number: l,
        units: 0,
        tens: 0,
        hundreds: 0,
    };
    if (i.number <= 9) {
        i.units = i.number;
    } else if (i.number <= 999) {
        i.units = Math.floor(i.number % 10);
        i.tens = Math.floor(i.number / 10 % 10);
        i.hundreds = Math.floor(i.number / 100 % 10);
    } else {
        i.number = 0;
        console.log('Данное число вне диапазона 0 - 999');
    }
    console.log(i);
}

//Task 2.
function t2() {
    /*
    *******************GOALKEEPER********************
        -------------------------------------------
            topleft  |      top     |   topright    
        ___________________________________________
            left     |      center  |   right       
        ___________________________________________
         bottomleft  |     bottom   | bottomright
        ___________________________________________
    */


    const sectors = [
        'topleft',
        'top',
        'topright',
        'left',
        'center',
        'right',
        'bottomleft',
        'bottom',
        'bottomright',
    ];

    const goalKeeper = {
        defendSector: null,
        savesToWin: 2,
        saves: 0,
        init() {
            console.log('HERE');
            const sectorNum = Math.trunc(Math.random() * 9);
            this.defendSector = sectors[sectorNum];
            console.log(this.defendSector);
        },
        checkWin() {
            if (this.saves === this.savesToWin) {
                console.log('Goalkeeper wins!!!');
                return true;
            }
            console.log('Goalkeeper need ' + (this.savesToWin - this.saves) + ' more saves');

            return false;
        },
    };
    const attacker = {
        sectorToAttack: null,
        goals: 0,
        goalsToWin: 10,
        init(sector) {
            if (sectors.indexOf(sector) >= 0) {
                this.sectorToAttack = sector;
                return true;
            }
            return false;
        },
        attack(keeper) {
            console.log(keeper.defendSector, this.sectorToAttack);
            if (keeper.defendSector === this.sectorToAttack) {
                console.log('SAVE!!!');
                keeper.saves++;
                return false;
            }
            console.log('GOAL!!!');
            this.goals++;
            return true;
        },
        checkWin() {
            if (this.goals === this.goalsToWin) {
                console.log('Attacker wins!!!');
                return true;
            }
            console.log('Attacker need ' + (this.goalsToWin - this.goals) + ' more goals');
            console.log(round + 'th round completed');
            return false;
        },
    };

    let keeperWins = false;
    let attackerWins = false;
    let round = 0;


    do {
        let currentAttacksector;
        do {
            currentAttacksector = prompt('Choose sector to attack ( ' + sectors.join(', ') + ' )');
            round++;
        } while (!attacker.init(currentAttacksector));

        goalKeeper.init();
        attacker.attack(goalKeeper);

        keeperWins = goalKeeper.checkWin();
        attackerWins = attacker.checkWin();
    } while (!keeperWins && !attackerWins);
    console.log('End of the game. ' + round + ' round played');
};

//The task 3.
function t3() {
    alert("Игра:«Кто хочет стать миллионером?»!");

    var q = [
        'Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»?',
        'Что говорит человек, когда замечает нечто необычное?',
        'Что помогает туристу ориентироваться в незнакомом городе?',
        'Какой наряд прославил баснописец Крылов?',
        'Как звали старшую сестру императора Петра Первого?',
        'Что не бывает морским?',
        'Кого с большим основанием можно назвать островитянами?',
        'В какой стране появилась мандолина?',
        'Какой врач первым в истории русской медицины применил гипсовую повязку?',
        'Где в Древней Греции можно было увидеть надпись: «Здесь живут мертвые и говорят немые»?'
    ];

    var g = [1000, 3000, 5000, 'первую несгораемую сумму 10000', 20000, 60000, 80000,
        'вторую несгораемую сумму 100000', 500000, 1000000
    ];

    var options = [
        ['A: сделать сегодня B: сделать послезавтра C: сделать через месяц  D: никогда не делать'],
        ['A: попало в лоб B: залетело в рот C: накапало в уши D: бросилось в глаза'],
        ['A: путепровод B: путеукладчик C: путеводитель D: путеводная звезда'],
        ['A: тришкин кафтан B: ивашкин армяк C: прошкин зипун D: машкин сарафан'],
        ['A: Вера B: Надежда C: Любовь D: Софья'],
        ['A: рельс B: огурец C: гребешок D: узел'],
        ['A: алеутов B: эвенков C: чукчей D: якутов'],
        ['A: Испания B: Италия C: Венгрия D: Греция'],
        ['A: Субботин B: Пирогов C: Боткин D: Склифосовский'],
        ['A: на кладбищах B: в больницах C: в библиотеках D: в тюрьмах']
    ];

    var j = ['A', 'D', 'C', 'A', 'D', 'A', 'A', 'B', 'B', 'C'];

    var a = 0;
    var b = 1;
    for (var i = 0; i < 10; i++) {
        var an = prompt('Вопрос ' + b + ': ' + q[i] + '\r\n' + 'Варианты ответа: \r\n' + options[0] +
            '\r\n' + 'Ваш ответ?');
        if (an.toUpperCase() == j[0]) {
            alert('Вы выиграли ' + g[a] + ' рублей');
            a++;
            b++;
            options.shift(0);
            j.shift(0);
        } else if (g[a] >= 100000) {
            alert('Неверно. Вы выиграли ' + g[7] + ' рублей');
            break;
        } else if (g[a] >= 10000) {
            alert('Неверно. Вы выиграли ' + g[3] + ' рублей');
            break;
        } else {
            alert('Неверно');
            break;
        }
    }
}