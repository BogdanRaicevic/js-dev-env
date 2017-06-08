import './index.css';
import numeral from 'numeral';
/* eslint-disable no-console no-debugger*/
const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} fro this awesome course!`);