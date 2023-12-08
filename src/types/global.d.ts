//Para criar um 
export {};

declare global{
    module'*.png'
    module'*.jpg'

    type PokemonType = {
        Type:{
            name:string,
            url: string
        }
    }

    type Pokemon = {
        id?:number,
        name:string,
        url:string,
        types?:PokemonType[]
    }
}