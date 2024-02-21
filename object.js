 const nayok={
      name: 'sakib khan',
      id : 112,
      address:'move cinama',
      isSingle:true,
      friends:['apu' , 'razz' , 'bubli' ,'amir'],
      movies:[{name:'no. 1',year:2025}, {name: 'king khan', year: 2018}],
      act: function(){

           console.log('acting like sakib khan');

      },
      car:{
         brand: 'tesla',
         price:50000000,
         made:2023,
         manufacturer:{
                name:'tesla',
                ceo:'elon musk',
                country:'USA',


         }

      }
        




 }


// console.log(student.car);

console.log(nayok.act);
nayok.act()