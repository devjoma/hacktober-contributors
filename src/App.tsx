import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="Box">
        <h1>Hacktober Fest 2022</h1>
        <table className="List">
          <tr>
            <th>Pessoa Desenvolvedora</th>
            <th>GitHub</th>
          </tr>
          <tr>
            <td>João Marcos</td>
            <td>
              <a href="https://github.com/joaomarcosbc"> Github</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
