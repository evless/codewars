

const reverse = a => a.reduce((p,c)=>[c,...p],[])

console.log(reverse([1, 2, 3]));