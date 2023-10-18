function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length; i++) { 
    // Last i elements are already in place   
    for (let j = 0; j < (result.length - i - 1); j++) { 
      // Checking if the item at present iteration  
      // is greater than the next iteration 
      if (result[j].year < result[j + 1].year) { 
          // If the condition is true 
          // then swap them 
          let temp = result[j] 
          result[j] = result[j + 1] 
          result[j + 1] = temp 
      } 
    }  
  } 
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
