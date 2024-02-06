"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData(url, {}) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(url);
            if (!res.ok) {
                throw new Error('Запрос выполнен безуспешно');
            }
            const data = yield res.json();
            console.log(data);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.log('Что-то пошло не так...');
            }
        }
    });
}
getData('https://dummyjson.co/users', {
    mode: 'no-cors'
});
//для проверки
const isUser = {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    maidenName: 'Smitham',
    age: 50,
    gender: 'male',
    email: 'atuny0@sohu.com',
    phone: '+63 791 675 8914',
    username: 'atuny0',
    password: '9uQFF1Lh',
    birthDate: '2000-12-25',
    image: 'https://robohash.org/Terry.png?set=set4',
    bloodGroup: 'A-',
    height: 189,
    weight: 75.4,
    eyeColor: 'Green',
    hair: { color: 'Black', type: 'Strands' },
    domain: 'slashdot.org',
    ip: '117.29.86.254',
    address: {
        address: '1745 T Street Southeast',
        city: 'Washington',
        coordinates: { lat: 38.867033, lng: -76.979235 },
        postalCode: '20020',
        state: 'DC'
    },
    macAddress: '13:69:BA:56:A3:74',
    university: 'Capitol University',
    bank: {
        cardExpire: '06/22',
        cardNumber: '50380955204220685',
        cardType: 'maestro',
        currency: 'Peso',
        iban: 'NO17 0695 2754 967'
    },
    company: {
        address: {
            address: '629 Debbie Drive',
            city: 'Nashville',
            coordinates: [Object],
            postalCode: '37076',
            state: 'TN'
        },
        department: 'Marketing',
        name: "Blanda-O'Keefe",
        title: 'Help Desk Operator'
    },
    ein: '20-9487066',
    ssn: '661-64-2976',
    userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
    crypto: {
        coin: 'Bitcoin',
        wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
        network: 'Ethereum (ERC20)'
    }
};
//для проверки
const users = {
    users: [{
            id: 1,
            firstName: 'Terry',
            lastName: 'Medhurst',
            maidenName: 'Smitham',
            age: 50,
            gender: 'male',
            email: 'atuny0@sohu.com',
            phone: '+63 791 675 8914',
            username: 'atuny0',
            password: '9uQFF1Lh',
            birthDate: '2000-12-25',
            image: 'https://robohash.org/Terry.png?set=set4',
            bloodGroup: 'A-',
            height: 189,
            weight: 75.4,
            eyeColor: 'Green',
            hair: { color: 'Black', type: 'Strands' },
            domain: 'slashdot.org',
            ip: '117.29.86.254',
            address: {
                address: '1745 T Street Southeast',
                city: 'Washington',
                coordinates: { lat: 38.867033, lng: -76.979235 },
                postalCode: '20020',
                state: 'DC'
            },
            macAddress: '13:69:BA:56:A3:74',
            university: 'Capitol University',
            bank: {
                cardExpire: '06/22',
                cardNumber: '50380955204220685',
                cardType: 'maestro',
                currency: 'Peso',
                iban: 'NO17 0695 2754 967'
            },
            company: {
                address: {
                    address: '629 Debbie Drive',
                    city: 'Nashville',
                    coordinates: [Object],
                    postalCode: '37076',
                    state: 'TN'
                },
                department: 'Marketing',
                name: "Blanda-O'Keefe",
                title: 'Help Desk Operator'
            },
            ein: '20-9487066',
            ssn: '661-64-2976',
            userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
            crypto: {
                coin: 'Bitcoin',
                wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
                network: 'Ethereum (ERC20)'
            }
        }, {
            id: 1,
            firstName: 'Terry',
            lastName: 'Medhurst',
            maidenName: 'Smitham',
            age: 50,
            gender: 'male',
            email: 'atuny0@sohu.com',
            phone: '+63 791 675 8914',
            username: 'atuny0',
            password: '9uQFF1Lh',
            birthDate: '2000-12-25',
            image: 'https://robohash.org/Terry.png?set=set4',
            bloodGroup: 'A-',
            height: 189,
            weight: 75.4,
            eyeColor: 'Green',
            hair: { color: 'Black', type: 'Strands' },
            domain: 'slashdot.org',
            ip: '117.29.86.254',
            address: {
                address: '1745 T Street Southeast',
                city: 'Washington',
                coordinates: { lat: 38.867033, lng: -76.979235 },
                postalCode: '20020',
                state: 'DC'
            },
            macAddress: '13:69:BA:56:A3:74',
            university: 'Capitol University',
            bank: {
                cardExpire: '06/22',
                cardNumber: '50380955204220685',
                cardType: 'maestro',
                currency: 'Peso',
                iban: 'NO17 0695 2754 967'
            },
            company: {
                address: {
                    address: '629 Debbie Drive',
                    city: 'Nashville',
                    coordinates: [Object],
                    postalCode: '37076',
                    state: 'TN'
                },
                department: 'Marketing',
                name: "Blanda-O'Keefe",
                title: 'Help Desk Operator'
            },
            ein: '20-9487066',
            ssn: '661-64-2976',
            userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
            crypto: {
                coin: 'Bitcoin',
                wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
                network: 'Ethereum (ERC20)'
            }
        }],
    total: 100,
    skip: 0,
    limit: 30
};
