type UserHair =  {
  color: string, 
  type: string 
}

type Coordinates = {
  lat: number,
  lng: number 
} | unknown

type Address =  {
  address: string,
  city: string,
  coordinates: Coordinates,
  postalCode: string,
  state: string
}

interface UserBank {
  cardExpire: string,
  cardNumber: string,
  cardType: string,
  currency: string,
  iban: string
}

type Cripto = {
  coin: string,
  wallet: string,
  network: string
}

type gender = 'male' | 'female';

type bloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: bloodGroup,
    height: number,
    weight: number,
    eyeColor: string,
    hair: UserHair,
    domain: string,
    ip: string,
    address: Address,
    macAddress: string,
    university: string,
    bank: UserBank,
    company: {
      address: Address,
      department: string,
      name: string,
      title: string
    },
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: Cripto
}

interface ResponseData {
    users: User[],
    total: number,
    skip: number,
    limit: number
}


async function getData(url: string, {}): Promise<void> {
  try {
    const res: Response = await fetch(url);
    if (!res.ok) {
      throw new Error('Запрос выполнен безуспешно');
    }
    const data: User = await res.json();
    console.log(data);
  } catch(error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.log('Что-то пошло не так...');
    }
  }
}

getData('https://dummyjson.co/users', {
 mode: 'no-cors'
});

//для проверки
const isUser: User = {
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
}

//для проверки
const users: ResponseData = {
    users: [ {
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
}
