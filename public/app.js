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

// Component Lifecycle
// function App3() {
//     const [diklik, setDiklik] = React.useState(false);
//     const [count, setCount] = React.useState(0);
//     // component did update
//     // function akan dieksekusi pada saat component itu di render
//     // ketika nilainya berubah maka function ini akan dieksekusi lagi sesuai dependency state
//     // tidak hanya di render saat pertama kali, ketika render ulang function ini akan di eksekusi lagi

//     // component did mount
//     // React.useEffect(
//     //     function () {
//     //         console.log('exec');
//     //     }, []); // empty array, second argument eksekusi func ini pada saat component itu di render pertama kali saja (data patching dari server)

//     // React.useEffect(
//     //     function () {
//     //         console.log(document.getElementById('judul'));
//     //     },
//     //     [diklik, count] // state yg mau dipantau
//     // );

//     React.useEffect(function () {
//         console.log('init carousel');

//         return function () {
//             console.log('destroy carousel');
//         };
//     }, []);

//     return (
//         <>
//             <h1 id="judul">Hello ini judul</h1>;
//             <button onClick={function () {
//                 setDiklik(true);
//             }}>
//                 Klik disini
//             </button>
//             <button onClick={function () {
//                 setCount(count + 1);
//             }}>
//                 Tambah
//             </button>
//             <h3>Nilai saat ini: {count}</h3>
//         </>
//     )
// }

// setTimeout(function () {
//     ReactDOM.render(<App3 />, root);
// }, 1000);

// Conditional Rendering
// function App4() {
//     const [login, setLogin] = React.useState(false);

//     if (login) {
//         return (
//             <>
//                 <h1>Login Success</h1>
//                 <button onClick={function () {
//                     setLogin(false);
//                 }}>
//                     Logout
//                 </button>
//             </>
//         );
//     }

//     return (
//         <>
//             <h1>Login Page</h1>
//             <button onClick={function () {
//                 setLogin(true);
//             }}>
//                 Login
//             </button>
//         </>
//     );
// }

// ReactDOM.render(<App4 />, root);

// function App5() {
//     const [login, setLogin] = React.useState(false);

//     return (
//         <>
//             <h1>Suss App</h1>
//             <p>{login ? <b>Terima kasih kamu sudah login</b> : <i>Kamu belum login</i>}</p>
//             <button onClick={function () {
//                 setLogin(true);
//             }}>
//                 Login
//             </button>
//         </>
//     );
// }

// ReactDOM.render(<App5 />, root);

// Manipulation DOM
// function App6() {
//     const [login, setLogin] = React.useState(false); // re render component itu
//     const judulRef = React.useRef(null); // ketika value nya berubah tidak melakukan re render

//     React.useEffect(function () {
//         const judul = document.getElementById('jdapp');
//         setTimeout(function () {
//             judul.textContent = 'Aplication 1';
//         }, 1000);
//     }, []);

//     React.useEffect(function () {
//         setTimeout(function () {
//             judulRef.current.textContent = 'Aplication 2';
//         }, 1000);
//     }, []);

//     return (
//         <>
//             <h1 id="jdapp">Suss App 1</h1>
//             <h1 ref={judulRef}>Suss App 2</h1>
//         </>
//     );
// }

// ReactDOM.render(<App6 />, root);

// List
// function App7() {
//     const fruits = ['Apple', 'Orange', 'Grape', 'Banana'];

//     return (
//         <ul>
//             {fruits.map(function (fruit) {
//                 return <li key={fruit}>{fruit}</li>; // tambahankan key untuk unique value
//             })}
//         </ul>
//     );
// }

// ReactDOM.render(<App7 />, root);

// Get Value from input form
// function App8() {
//     const namaRef = React.useRef(null);

//     function whenSubmit(event) {
//         event.preventDefault();
//         const nama = namaRef.current.value;

//         console.log('Nama: ', nama);
//     }

//     return (
//         <form onSubmit={whenSubmit}>
//             <div>
//                 <label>Name: </label>
//                 <input type="text" name="nama" ref={namaRef} />
//             </div>
//             <button type="submit">Kirim</button>
//         </form>
//     );
// }

// ReactDOM.render(<App8 />, root);

// set Value Default #11
// function App9() {
//     const [nama, setNama] = React.useState('Indry');

//     function whenSubmit1(event) {
//         event.preventDefault();

//         console.log('Nama: ', nama);
//     }

//     return (
//         <form onSubmit={whenSubmit1}>
//             <div>
//                 <label>Name: </label>
//                 <input
//                     type="text"
//                     name="nama"
//                     value={nama}
//                     onChange={function (event) {
//                         setNama(event.target.value);
//                     }}
//                 />
//             </div>
//             <button type="submit">Kirim</button>
//         </form>
//     );
// }

// ReactDOM.render(<App9 />, root);

// Get data fecth from API 1 (then untuk dapet sinyal bahwa dia udah selesai hasil promise)
// function App10() {
//     React.useEffect(function () {
//         const getData = fetch('https://api.spaceflightnewsapi.net/v4/blogs/')
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (response) {
//                 console.log(response);
//             });
//         console.log(getData);
//     }, []);

//     return <h1>Data Fetch (check console log)</h1>;
// }

// ReactDOM.render(<App10 />, root);

// Get data fecth from API 2 (nunggu hasil promise) #22
function App11() {
  React.useEffect(function () {
    async function getData1() {
      // data diproses dulu
      const request = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/');
      const response = await request.json(); // ini juga diproses
      console.log(response); // lalu di eksekusi
    }

    getData1();
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "Data Fetch (check console log)");
}
ReactDOM.render( /*#__PURE__*/React.createElement(App11, null), root);