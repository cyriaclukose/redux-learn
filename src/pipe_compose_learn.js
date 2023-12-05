import {pipe,compose} from 'lodash/fp'


let input=" hello ";
let output="<div>"+input.trim + "</div>";

const trim= str=>str.trim();
const toLowerCase= str=> str.toLowerCase;
const wrapInDev= str => `<div>${str}</div>`;

const wrap=(type,str)=>`<${type}>${str}<${type}>`
const result= wrapInDev(toLowerCase(trim(input)));
const transform=pipe(trim,toLowerCase,wrap);
console.log(transform(input));