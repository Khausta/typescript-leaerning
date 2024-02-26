type UserHair =  {
  color: string, 
  type: string 
}

type Coordinates = {
  lat: number,
  lng: number 
} 

type Address =  {
  address: string,
  city: string,
  coordinates: Coordinates,
  postalCode: string,
  state: string
}

type UserBank = {
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

enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

enum BloodGroup {
  O_POSITIVE = 'O+',
  O_NEGATIVE = 'O-',
  A_POSITIVE = 'A+',
  A_NEGATIVE = 'A-',
  B_POSITIVE = 'B+',
  B_NEGATIVE = 'B-',
  AB_POSITIVE = 'AB+',
  AB_NEGATIVE = 'AB-'
}


interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: BloodGroup,
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


async function getData(url: string, {}): Promise<ResponseData | undefined> {
  try {
    const res: Response = await fetch(url);
    const data: ResponseData = await res.json();
    return data;
  } catch(error) {
    if (error instanceof Error) {
      console.error('Error: ' + error.message);
    }
  }
}




