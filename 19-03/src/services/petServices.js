const pet = [
    {id: 1, nome: 'winnnow', type: 'coelho'},
    {id: 2, nome: 'skay', type: 'cadela'},
    {id: 3, nome: 'tunico', type: 'gato'},
    {id: 4, nome: 'maya', type: 'gata'}, 
    {id: 5, nome: 'zili', type: 'cadela'},
    
]

class Pet {
    getALL(){
        return pet; 
    } 
}

export default new Pet();
export const petServices = new Pet();

//BD > Services > Routes > pet.js