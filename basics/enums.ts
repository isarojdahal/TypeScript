
enum Cheese {

    
    GOAT = "goat",
    COW = "cow"
}

const serveCheese = (cheeseType:Cheese,servings:number) : void =>{

    console.log(`You want ${servings} servings of ${cheeseType}`);
}

serveCheese(Cheese.COW,12)