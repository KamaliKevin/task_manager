import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js.map';
import DoList from "./components/DoList";

function App() {
  return (
    <div className="App p-5">
      <h2>Lista de tareas</h2>
      <DoList></DoList>
    </div>
  );
}

export default App;
