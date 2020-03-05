'use strict';
let btnCreate = document.querySelector(".btn-create"); //находим кнопку создания строк
let btnSort = document.querySelector(".btn-sort"); //находим кнопку сортировки строк
let btnClear = document.querySelector(".btn-clear"); //находим кнопку сортировки строк
let sectionWorkTable = document.querySelector(".section-work-table"); //находим кнопку создания строк
let totalLines = 100;
let arr = [];
let minNumber = 1;
let maxNumber = 100;
//находим рандомное число в пределах диапазона
function getRandomFromTo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function onBtnCreateClick() {
    //создаем массив из случайных неповторяющихся чисел
    for (var j = 0; j < totalLines; j++) {
        var number = getRandomFromTo(minNumber, maxNumber);
        arr.push(number);
    };
    //создаем таблицу на заданное количество строк
    var tableArr = ['<table>'];
    for (var i = 0; i < totalLines; i++) {
        tableArr.push('<tr><td>' + arr[i] + '</td></tr>');
    }
    tableArr.push('</table>');
    document.getElementById('stat').innerHTML = tableArr.join('\n')
};
btnCreate.addEventListener('click', onBtnCreateClick);

function onBtnSortClick() {
    if (arr.length == 0) {
        alert("Сначала необходимо создать таблицу с числами");
    } else {
        //создаем таблицу на заданное количество строк с отсортированным созданным массивом
        var tableArr = ['<table>'];
        for (var i = 0; i < totalLines; i++) {
            tableArr.push('<tr><td>' + arr.sort(function(a, b) {
                return a - b
            })[i] + '</td></tr>');
        }
        tableArr.push('</table>');
        document.getElementById('stat').innerHTML = tableArr.join('\n');
    }
};
btnSort.addEventListener('click', onBtnSortClick);

function onBtnClearClick() {
    document.getElementById('stat').innerHTML = " ";
    arr = [];
};
btnClear.addEventListener('click', onBtnClearClick);