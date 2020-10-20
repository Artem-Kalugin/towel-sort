
module.exports = function towelSort (matrix){
  let i = 0;
  let answer; 
  if (typeof matrix == "undefined") {
  return [];
  } else {
    matrix.forEach(element => {
      element.forEach(num =>{
        i++;
      })
    });
    answer = new Array(i);
    i=0;
    for(let q = 0; q<matrix.length;q++){
      for(let j = 0; j<matrix[q].length;j++){
        answer[i]=matrix[q][j];
        i++;
      }
      q++;
      if (typeof matrix[q] == "undefined") break;
      for(let j = matrix[q].length-1; j>=0;j--){
        answer[i]=matrix[q][j];
        i++;
      }
    };
  }
  return answer;
}

