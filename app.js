"use strict";
const n = null; //только null приримает
const n1 = null;
const n3 = null;
const n4 = null;
const n5 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Vasya'
        };
    }
}
const user = getUser();
if (user) {
    const userName = user.name;
}
