const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('color');
paragraph.textContent = 'Hey I am red!';
paragraph.style.color = 'red';
container.appendChild(paragraph);

const head3 = document.createElement('h3');
head3.classList.add('coloredh3');
head3.textContent = 'I\'m blue h3!';
head3.style.color = 'blue';
container.appendChild(head3);

const content2 = document.createElement('div');
const content2h1 = document.createElement('h1');
content2h1.textContent = 'I\'m in a div';
const content2p = document.createElement('p');
content2p.textContent = 'ME TOO!';
content2.appendChild(content2h1);
content2.appendChild(content2p);
container.appendChild(content2);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});