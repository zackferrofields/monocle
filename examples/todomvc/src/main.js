import ramda from 'ramda';
const { forEach } = ramda;

forEach(x => console.log(x + 5), [1, 2, 3]);

const app = document.querySelector('[app]');
app.innerHTML = '<h1>Hello World!<h1/>';
