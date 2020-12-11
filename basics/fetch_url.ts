
interface User{

    name:string,
    age:number,
    isProgrammer:boolean,
    email:string

}

const fetchData = (apiURL : string) : Promise<User> =>{
    return fetch(apiURL).then(response=>response.json());
}

// const user:User = fetchData("url");
