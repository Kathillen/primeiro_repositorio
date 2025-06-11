
export const users = {  // isso é uma propriedade que vai receber objetos
    kaen: {
        age: 18,
        coins: 2000,
    },
    rafa: {
        age: 16,
        coins: 2000,
    }
}

export function addUser(username, age, coins){ // Para adicionar users 
    users[username] = {age, coins}
}

export function removeUsers(username){
    while(true){
    if (users[username]){
        delete users[username];
        console.log(`Usuário "${username}" removido com sucesso.`)
    } else {
        console.log(`Usuário "${username}" não encontrado, tente novamente`)
    }
    }
}

export function listerUsers(){
    console.log(users);
}

