let a =Number(prompt('Please enter a'));
let b =Number(prompt('Please enter b'));
let c =Number(prompt('Please enter c'));

if (a + b < c || b + c < a || a + c < b){
console.log('Triangle doesn’t exist');
}else if(a===b && b===c && c===a){
console.log('Eequivalent triangle');
}else if(a===b && a!==c && c!==b){
console.log('Isosceles triangle');
}else {
console.log('Normal triangle');
}