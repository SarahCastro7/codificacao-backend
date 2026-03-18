//mock de dados

const estudantes = [
    { id: 1, nome: 'sarah' },
    { id: 2, nome: 'skay' },
    { id: 3, nome: 'biao' }
] 

class ServerServices {
    getAll() {
        return estudantes
    }
}

export const serverServices = new ServerServices()
