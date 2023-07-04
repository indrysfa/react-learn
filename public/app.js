const root = document.querySelector('#root');
// const element = document.createElement('h1');

// Dengan Javascript
// element.textContent = 'Hello World';
// element.className = 'heading-1';
// root.appendChild(element);

// // Dengan React
// const withReact = React.createElement('h1', {
//     children: 'Hello from React!',
//     className: 'heading-1',
// });
// React.render(withReact);

// // Buat 2 paragraf harus dibungkus 1 div
// const p1 = React.createElement('p', {
//     children: 'Hello paragraf 1',
// });
// const p2 = React.createElement('p', {
//     children: 'Hello paragraf 2',
// });

// // With create element div
// const div = React.createElement('div', {
//     children: [p1, p2],
// });
// ReactDOM.render(div, root);

// //With React Fragment
// const reactFragment = React.createElement(React.Fragment, {
//     children: [p1, p2],
// });
// ReactDOM.render(reactFragment, root);

// // Nested Element => buat list ul li
// // parameter 1: tagname(ul) 2: promps(className) 3dst: children(content)
// const content1 = React.createElement('ul', { className: 'list' }, 'Hello from content');
// ReactDOM.render(content1, root);

// const content2 = React.createElement(
//     'ul',
//     { className: 'list' },
//     React.createElement('li', null, 'Apple'),
//     React.createElement('li', null, 'Orange'),
//     React.createElement('li', null, 'Grape'),
// );
// ReactDOM.render(content2, root);

// // Alternatif JSX gunakan babel untuk compile
// const elementJsx = (
//     <ul>
//         <li>Apple</li>
//         <li>Orange</li>
//         <li>Grape</li>
//     </ul>
// );
// ReactDOM.render(elementJsx, root);

// // Embed Javascript Expression
// const name = 'Bay';
// const elementExp1 = <h1>Hello {name}</h1>;
// ReactDOM.render(elementExp1, root);

// function getName(text) {
//     return text.toUpperCase();
// }
// const elementExp2 = <h1>Hello {getName(name)}</h1>;
// ReactDOM.render(elementExp2, root);

// const elementExp3 = <h1 className="heading-1">Hello Kurama</h1>;
// ReactDOM.render(elementExp3, root);

// const className = "heading-1";
// const elementExp4 = <h1 className={className}>Hello Kurama</h1>;
// ReactDOM.render(elementExp4, root);

// const elementExp5 = (
//     <img src="https://as2.ftcdn.net/v2/jpg/05/48/68/73/1000_F_548687376_a19RkJpgJf586pXb3QE5iBzJGPljmENp.jpg" />
// );
// ReactDOM.render(elementExp5, root);

// // React Component function diawali dengan capital return react element
// function Halo(props) { // sebagai object
//     return <p>Halo <b>{props.name}</b></p>;
// }

// const elementA = (
//     <>
//         {Halo('Gan')}
//         {Halo('Sist')}
//     </>
// );
// ReactDOM.render(elementA, root);

// const elementB = (
//     <>
//         <Halo name="Gan" />
//     </>
// );
// ReactDOM.render(elementB, root);

// // Rendering
// function tick() {
//     const elementC = (
//         <div>
//             <h1>Jam Sekarang</h1>
//             <h2>{new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
//     ReactDOM.render(elementC, root);
// }

// tick();

// setInterval(function () {
//     tick();
// }, 1000)

// // CSS Inline
// const elementD = (
//     <div style={{
//         width: 200,
//         height: 200,
//         backgroundColor: 'blue',
//     }}></div>
// );
// ReactDOM.render(elementD, root);

// // CSS Outline
// const elementE = (
//     <div className="box"></div>
// );
// ReactDOM.render(elementE, root);

// Event Handling
// function whenClick(msg) {
//     alert(msg);
// }
// const elementF = (
//     <button onClick={whenClick.bind(this, 'Hello World!')}>
//         Click Me
//     </button>
// );
// ReactDOM.render(elementF, root);

// State (nilai data saat itu)
// Cara pertama
// function App() {
//     const state = React.useState(1);
//     const count = state[0];
//     const updateCount = state[1];
//     return (
//         <>
//             <button onClick={function () {
//                 updateCount(count - 1);
//             }}>-</button>
//             <button>{count}</button>
//             <button onClick={function () {
//                 updateCount(count + 1);
//             }}>+</button>
//         </>
//     )
// }
// ReactDOM.render(<App />, root);

// Cara kedua distructring
// function App2() {
//     // count = variable, setCount = function
//     const count = [count, setCount] = React.useState(0);
//     return (
//         <>
//             <button onClick={function () {
//                 setCount(count - 1);
//             }}>-</button>
//             <button>{count}</button>
//             <button onClick={function () {
//                 setCount(count + 1);
//             }}>+</button>
//         </>
//     )
// }
// ReactDOM.render(<App2 />, root);

function App3() {
  const [diklik, setDiklik] = React.useState(false);
  React.useEffect(function () {
    console.log(document.getElementById('judul'));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello ini judul"), ";", /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(true);
    }
  }, "Klik disini"));
}
setTimeout(function () {
  ReactDOM.render( /*#__PURE__*/React.createElement(App3, null), root);
}, 1000);