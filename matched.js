// const numbers = [45,20,62,45,32,50]

// for(let i=0  ; i<numbers.length ; i++){
//         const number = numbers[i];
     
//      console.log(number);
// }

// for(const number of numbers){
  //  console.log(number);
// }

// its called for of loop

const products = [
    {id:1, name:'xiami phone one neight', price : 19000},
    {id:2, name:'iphone', price : 19000},
    {id:3, name:'mac book air', price : 19000},
    {id:4, name:'lenovo yoga laptop 2025', price : 19000},
    {id:5, name:'Dell inspiron laptop', price : 19000},
    {id:6, name:'samsung phone note 7', price : 19000},
    {id:7, name:'Nokia old age phone gone', price : 19000},
    {id:8, name:'phone one', price : 19000},
    


]

// for ( const product of products){
    //  console.log(product);
// }



function  matchedProducts (products , search){
         const matched = [];
        for(const product of products){
          if(product.name.toLowerCase() .includes(search)){
              matched.push(product);

          }
        }
    
   return matched;
}

const result = matchedProducts( products , 'phone')

 console.log(result);













