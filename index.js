// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

//    const result= record.find(superbowlWin)

//   function superbowlWin(record){   
//     for(let item of record){
//       if(record.result === "W"){

//     return result ? result.year: undefined;}
//       }
//  }
// console.log(result);


 superbowlWin = (record) => {

 const result = record.find( record => record.result === "W" );
    

     return !!result ? result.year : undefined;   }