import moment from 'moment';
import internet from 'faker';

let pre = document.createElement('pre');
let el  = document.body.appendChild(pre);
el.textContent += moment().format('Do MMMM YYYY, h:mm:ss a');
el.textContent += '\n';
el.textContent += internet.internet.email();
let h4 = document.createElement('h4');
let el1 = document.body.appendChild(h4);
el1.textContent = 'Кузнецова Наталья';
el1.setAttribute('title', 'GossJS');
el1.setAttribute('id', 'author');
