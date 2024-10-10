
import './App.css';

import FirstApp from './FirstApp'; // Importamos el nuevo componente

function App() {
  return (
    <div className="App">
      <FirstApp value={10}/>
    </div>
  );
}

export default App;
