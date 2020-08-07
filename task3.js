// Задача 3
// В двумерном массив удалить столбцы, где сумма элементов столбца < 0.
// Массив должен быть размером 10 на 10, заполнен случайными числам в диапазоне от -20 до +20.

const arr = [], tempArr = [], tempArrRev = [];
let randomNumber, tmpSumRow = 0, temp = 0;
n = 10;
m = 10;
// Создаем таблицу 10х10 и заполняем случайными числами
for ( let i = 0; i < n; i++ ){
    arr[i] = [];
    for ( let j = 0; j < m; j++){
        randomNumber = Math.trunc(Math.random()*42 - 21);
        arr[i].push(randomNumber);
    }
    document.writeln(arr[i] + "<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// Создаем новую развернутую таблицу и ищем строки суммой меньше нуля
for ( let i = 0; i < n; i++) {
    tempArr[i] = [];
    for (let j = 0; j < m; j++) {
        tmpSumRow += arr[j][i];
    }
    // Оставляем строки не меньше нуля
    if (tmpSumRow >= 0) {
      for ( let j = 0; j < m; j++){
          tempArr[temp].push(arr[j][i]);
      }
      temp++;
    }
    tmpSumRow = 0;
}
// Разворачиваем таблицу обратно
for ( let i = 0; i < n; i++){
    tempArrRev[i] = [];
    for ( let j = 0; j < temp; j++ ){
        tempArrRev[i][j] = tempArr[j][i];
    }
    document.writeln(tempArrRev[i] + "<br>");
}