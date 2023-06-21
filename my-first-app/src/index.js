import React from 'react';
import ReactDOM from 'react-dom/client';

/* function Hello() {
  // JSX - JavaScript XML
  const username = 'Pranit';
  // Use curly braces {} to write any js expression. It will be evaluated and printed in html as a string
  // So it is also called as string interpolation. Also termed as data binding, since we are binding
  // js data to html
  return <h1>Hello {username}! {4+3} {Math.random()}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />); */

const root1 = document.getElementById('root1'); // actual dom
const root2 = ReactDOM.createRoot(document.getElementById('root2'));  // react will build a virtual dom

setInterval(() => {
  root1.innerHTML = `
    <div>
      <h1>Hello JS!</h1>
      <input />
      <pre>${new Date().toLocaleTimeString()}</pre>
    </div>
  `;

  root2.render(
    <div>
      <h1>Hello ReactJS!</h1>
      <input />
      <pre>{new Date().toLocaleTimeString()}</pre>
    </div>
  );
}, 1000);
