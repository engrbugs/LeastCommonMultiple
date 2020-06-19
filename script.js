function smallestCommons(arr) {
    arr = arr.sort((a,b)=>(a-b));
    let newArr = [];
    for (let i=arr[0]; i<=arr[1]; i++) {
      newArr.push(i)
    }
    console.log(newArr);
    let factors = [];
    newArr.forEach(n=>factors.push(getFactors(n)));
    console.log(factors);

    let listFactors = [];
 
    factors.map(factor => {
  
      
      let uniques = factor.filter((value, index, self)=>(self.indexOf(value)===index));
      console.log(uniques);
      uniques.forEach(n => {
        console.log(factor, n);
        let container = [];
        let count = factor.filter((value)=>(value===n)).length;
        
        container.push(n, count);
        listFactors.push(container);
        console.log('push', n, count);
      });
      
        
      
      
    });
  
  
     return (listFactors);
  
  }
  
  function getFactors(n) {
    if (n===1) return [1];
    let fac = [];
    let tempN = n;
    for (let i=2; i<=tempN; i++) {
      if (isPrime(i)) {
        if (tempN%i===0) {
          while (tempN%i===0) {
            fac.push(i);
            tempN /= i;
          }
        }
        if (fac.reduce((a, b)=>(a*b), 1)===n) {
          return fac;
        }
      } 
    } 
  }
  function isPrime(n) {
    if (n===1||n===0) return true;
    for(let i=2; i<n; i++)
      if(n % i === 0) return false;
    return true;
  }
  
 

console.log(smallestCommons([2, 10]));
// let masterArr = [];
// let contArr = [];

// contArr.push(2, 3);
// masterArr.push(contArr)
// console.log(masterArr);