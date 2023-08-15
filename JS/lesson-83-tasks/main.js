
// ------------------------------------1) + 2)
const user = {
    name: 'Demian',
    age: 22,
    isHuman: true,
}

function helloName(name) {
    return `Hello ${name}!`
}

console.log(helloName(user.name))

// ------------------------------------3)


const users = [
    {
        name: 'Lee',
        isAdmin: true
    },
    {
        name: 'Lares',
        isAdmin: true
    },
    {
        name: 'Torlof',
        isAdmin: true
    },
    {
        name: 'Gorn',
        isAdmin: true
    },
    {
        name: 'Sylvio',
        isAdmin: false
    },
    {
        name: 'Sentenza',
        isAdmin: false
    },
    {
        name: 'Raoul',
        isAdmin: false
    },
    {
        name: 'Rod',
        isAdmin: false
    }
]

function numberOfRegularUsers(users) {
    let notAdmin = 0;
    for (h = 0; h < users.length; h++) {
        if (users[h].isAdmin === false) {
            notAdmin++;
        }
    }
    return notAdmin;
}
console.log(numberOfRegularUsers(users))





