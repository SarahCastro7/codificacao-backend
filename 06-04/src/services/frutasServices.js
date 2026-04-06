// mock de dados de frutas

const frutas = [
    { id: 1, nome: 'Maçã', cor: 'Vermelha' },
    { id: 2, nome: 'Banana', cor: 'Amarela' },
    { id: 3, nome: 'Laranja', cor: 'Laranja' },
    { id: 4, nome: 'Uva', cor: 'Roxa' }
];

// export nomeado (opcional)
export const getFrutas = () => {
    return frutas;
}

// export default compatível com o uso em routes
const frutasServices = {
    getAllFrutas: () => frutas
};

class frutasService {
    getAllFrutas() {
        return frutas;
    }

    getByiD (id) {
        return frutas.find(fruta => fruta.id === id);
    }
}

export default frutasServices;