// src/App.jsx

import './App.css';
import Button1 from './components/example-1-normal-css/Button.jsx';
import Button2 from './components/example-2-inline-css/Button.jsx';
import Button3 from './components/example-3-styled-components/Button.jsx';
import Button4 from './components/example-4-css-modules/Button.jsx';
import Button5 from './components/example-5-sass/Button.jsx';

const App = () => {
  return (
    <div className="App">
        <Button1 buttonText="Example 1" />
        <Button2 buttonText="Example 2" />
        <Button3 buttonText="Example 3" />
        <Button4 buttonText="Example 4" />
        <Button5 buttonText="Example 5" />
    </div>
  );
};

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
