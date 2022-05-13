const amar ={
    name : "amar",
    place :  "goa",
    special: "singer",

   talent()
   {
      console.log(`Amar is Now  ${this.special}`)
   }

};



const akbar ={
    name : "akbar",
    place : "mumbai",
    special:"chef",

    talent()
   {
      console.log(`Akbar is Now  ${this.special}`)
   }


};


const Anthony ={
    name : "Anthony",
    place : "kashmir",
    special:"Magicion",
    talent()
   {
      console.log(`Anthony is Now  ${this.special}`)
   }


};

amar.talent.call(akbar)
Anthony.talent.call(amar)
akbar.talent.call(Anthony)