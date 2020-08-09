// Задача 2:
// Создать двумерный массив A размером n на m. Заполнить его случайными числами.
// Найти ряд, где сумма элементов наименьшая
// Найти ряд, где сумма элементов найбольшая
// Поменять ряды местами (1 и 2 пункт)


const A = [];
let minSumRow, maxSumRow, minIndexRow, maxIndexRow, tmpRowSum = 0, tmpRow, n = 5, m = 5;

for (let i = 0; i < n; i++) {
    A[i] = [];
    for (let j = 0; j < m; j++) {
        const randomNumber = Math.floor(Math.random() * 100);
        A[i].push(randomNumber);
        tmpRowSum += A[i][j];
    }
    document.writeln("Sum: " + tmpRowSum + " | " + A[i] + "<br>");
    if (i === 0) {
        minSumRow = tmpRowSum;
        minIndexRow = 0;
        maxIndexRow = 0;
        maxSumRow = tmpRowSum;
    }
    if (tmpRowSum < minSumRow) {
        minIndexRow = i;
        minSumRow = tmpRowSum;
    }
    if (tmpRowSum > maxSumRow) {
        maxIndexRow = i;
        maxSumRow = tmpRowSum;
    }
    tmpRowSum = 0;
}
document.writeln("<br>");
tmpRow = A [minIndexRow];
A[minIndexRow] = A[maxIndexRow];
A[maxIndexRow] = tmpRow;
for (let i = 0; i < A.length; i++) {
    document.writeln(A[i] + "<br>");
}
