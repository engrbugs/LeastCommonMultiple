function smallestCommons(arr) {
    arr = arr.sort((a,b)=>(a-b));
    let newArr = [];
    for (let i=arr[0]; i<=arr[1]; i++) {
      newArr.push(i)
    }
    console.log('Get the LCM of:', newArr);
    let factors = [];
    newArr.forEach(n=>factors.push(getFactors(n)));
    console.log('Factors of each numbers:', factors);

    let listFactors = [];
    console.log('Unique Factor are:');
    factors.map(factor => {
      let uniques = factor.filter((value, index, self)=>(self.indexOf(value)===index));
      console.log(uniques);
      uniques.forEach(n => {
        let container = [];
        let count = factor.filter((value)=>(value===n)).length;
        container.push(n, count);
        listFactors.push(container);
      });
    });
    console.log('Transpose all factors into 2-dimensional:', listFactors);

    let highestFactor = [];
    let uniqeuLCMfactor = listFactors.map(n=>n[0])
    .filter((value, index, self)=>(self.indexOf(value)===index));
    console.log('Unique LCM factor:', uniqeuLCMfactor);

    let lcmFactor = [];
    uniqeuLCMfactor.forEach(el=>{
      for (let i=0; i<listFactors.filter(n=>n[0]===el).map(n=>n[1]).sort((a,b)=>(b-a))[0]; i++) 
        lcmFactor.push(el);
    })
    console.log('LCM Factors are:', lcmFactor);
    return (lcmFactor.reduce((a, b)=>(a*b), 1));
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