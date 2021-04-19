function fizzbuzz(num){
  if(num === 0){
    return num
  }
  // If num is multiple of 3 & 5
  if(num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  }
  if(num % 3 === 0){
    return 'fizz';
  }
  if(num % 5 === 0){
    return 'buzz';
  }
  return num;
}

module.exports = fizzbuzz;


function print(num){
  for(i=0;i<num;i++){
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
}

print(16);