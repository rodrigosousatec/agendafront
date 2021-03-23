//const url = 'http://127.0.0.1:8000/api/v1/agendas/'
const url = 'http://192.168.18.52:8000/api/v1/agendas/'

export default async function getData() {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token e4bf6cb5df2cbbb202653be35656a4ef8161b49d' 
        }

    });
    const agendasJson = await response.json();
    return agendasJson;
    
}


export async function save(agenda) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token e4bf6cb5df2cbbb202653be35656a4ef8161b49d' 
        },
        body: JSON.stringify({'nome': agenda.nome, 'telefone': agenda.telefone, 'usuario' : 1 })
    });
    const content = await response.json();
    return content;   
}

export async function update(agenda) {
    console.warn('Chamou o update')
    const response = await fetch(url + agenda.id + '/', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token e4bf6cb5df2cbbb202653be35656a4ef8161b49d' 
        },
        body: JSON.stringify({'nome': agenda.nome, 'telefone': agenda.telefone })
    });
    const content = await response.json();
    return content;
}

export async function remove(agenda) {
    console.warn('Chamou o remove')
    const response = await fetch(url + agenda.id + '/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token e4bf6cb5df2cbbb202653be35656a4ef8161b49d' 
        }
    });
    
    const content = await response.json();
    return content;

}