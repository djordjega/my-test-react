let User = {
    name: "",
    age: 0,
}

export function setUser(user) { User = user };
export function getUser() { return User };