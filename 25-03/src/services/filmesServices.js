// mock de dados de filmes

    const filmes =[
        {id: "1" , titulo: "Sorria" , ano: 2022}, 
        {id: "2" , titulo: "Luta Por Justica" , ano: 2019},
        {id: "3" , titulo: "Gente Grande", ano: 2010},
        {id: "4" , titulo: "As Branquelas", ano: 2004},
        {id: "5" , titulo: "O Diabo Veste Prada", ano: 2006}
    ] 

    class FilmesService {

        getAll(){    
            return filmes;
        }   

        getById(id){
            return filmes.find((filme) => filme.id === id)
        }
    }

export const filmesServices = new FilmesService();