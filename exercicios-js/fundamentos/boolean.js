/* 
Boolean em JS: Aceita varios tipos como verdadeiro e falso
ex: 
1 para vdd e 0 false...
*/ 

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo=true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo=false));

console.log('para finalizar...');
console.log(!!(''|| null || 0 || ' '));

let nome = 'Lucas';
console.log(nome || "desconhecido");