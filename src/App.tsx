import { ContadorReducer } from "./components/ContadorReducer";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <Usuario />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
      <h2>useReducer</h2>
      <hr />
      <ContadorReducer />

      <h2>customHooks</h2>
      <hr />
      <Formulario />
      <br />
      <br />
      <br />
      <Formulario2 />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
