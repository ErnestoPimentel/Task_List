import { use } from "react";

const users = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        name: 'Administrador',
        email: 'admin@taskflow.com'
    }
];

export async function login(username, password){
    await new Promise((resolve) => {
        setTimeout(resolve, 400);
    });

    const user = users.find(item => 
        item.username === username && item.password === password
    );

    if(!user)
        throw new Error('Usuario o contraseña incorrectos.');

    return {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email
    };
}
