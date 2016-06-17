export class User {
    name: string;
    email: string;
    id: number;
    address: Address = new Address();
}

export class Address {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
}