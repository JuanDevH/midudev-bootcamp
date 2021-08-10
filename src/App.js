import './App.css';
import Mensaje from './Mensaje';

function App() {
  return (
    <div className="App">
      <Mensaje titulo="JuanDev Frontend"/>
      <Mensaje subtitulo="Tengo 25 años"/>
      <Mensaje description="Tengo alta experiencia en desarrollo de software"/>
    </div>
  );
}

export default App;