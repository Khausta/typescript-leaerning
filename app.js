"use strict";
const skill = [1, 'Dev'];
//проблема в том что мы можем изменить значение вот так
// skill[0] = 2; //Cannot assign to '0' because it is a read-only property.ts(2540)
//чтобы запретить измения, добавляем ключевое слово readonly, которое 
//указывавет что это картэж и он не можифицируется
//ЭТО УДОБНО, если приходит конфигурация и вы не хотите ее модифицировать
//запись Generic
const skills = ['DevOps', 'Dev'];
//для readonly есть свой generic тип
const skills2 = ['DevOps', 'Dev'];
const a = 5;
// a = 6;
