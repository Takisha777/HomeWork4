// Задача 1:
// Создать массив, элементы которого вводит пользователь. Произвести такую замену:
// 1 элемент поменять с 2,
// 3 элемент поменять с 4,
// 5 элемент поменять с 6 и тд.
// Если длина массива нечетная - последний элемент не трогать.
// Пример: было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5


let volumeUser = "В", i, tmp, arrUser = [];
do {
    let volumeUser = +prompt("Введите длинну масива:");
    if (!isNaN(volumeUser)) {
        while (arrUser.length < volumeUser) {
            let varUser = +prompt("Введите числовой элемент массива,  осталось : " + (volumeUser - arrUser.length));
            if (!isNaN(varUser)) {
                arrUser.push(varUser);
            } else {
                alert("Введите числовое значение элемента масива");
            }
        }
    }
    document.writeln(arrUser + "<br>");

break;
} while (isNaN(volumeUser));
if (arrUser.length % 2 === 0) {
    for (i = 0; i < arrUser.length; i += 2) {

        tmp = arrUser[i];
        arrUser[i] = arrUser[i + 1];
        arrUser[i + 1] = tmp;
    }
}else {
    for (i = 0; i < arrUser.length-1; i += 2) {
        tmp = arrUser[i];
        arrUser[i] = arrUser[i + 1];
        arrUser[i + 1] = tmp;
    }
}
document.writeln(arrUser);