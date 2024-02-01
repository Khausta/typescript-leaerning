"use strict";
// Interfaces
let user = {
    name: 'sada',
    age: 22,
    skills: ['1', '2'],
    roleId: 1,
    log(id) {
        return this.name;
    }
};
let user2 = {
    name: 'AS',
    age: 22,
    skills: ['1'],
    role: 'dev',
    place: 'MosDistrict',
    createdAt: new Date(),
    log(id) {
        return this.name;
    }
};
