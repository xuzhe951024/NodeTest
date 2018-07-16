interface Iperson {
    firstName: string;
    lastName: string;
}

function greeter(person: Iperson) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
