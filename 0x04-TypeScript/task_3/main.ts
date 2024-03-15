/// <reference path="./js/crud.d.ts" />


import { RowID, RowElement } from './js/interface';
import * as CRUD from './js/crud.js';


const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const obj = {firstName: "Guillaume", lastName: "Salva"};
const newRowID: RowID = CRUD.insertRow(obj)

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
