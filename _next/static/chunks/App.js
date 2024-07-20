import logo from './logo.svg';
import './App.css';
import { Main, RegistrarCita, CitaGuardada, Cuerpo } from './component/loyout'
function App() {
  return (
    <div className="App ">
      <header className="App-header flex justify-between px-4 py-4 border-b shadow-sm">
        <div>
          <img src='https://www.aviva.pe/images/blog/logo_aviva.svg'></img>
        </div>
        <div className='flex gap-4'>
          <a className=' mt-auto mb-auto cursor-pointer'>Nosotros</a>
          <a className=' mt-auto mb-auto  cursor-pointer'>Especialidades</a>
          <a className=' mt-auto mb-auto  cursor-pointer'>Programas</a>
          <a className='border rounded bg-sky-900 text-white p-4  cursor-pointer'>Mi Portal</a>
        </div>
      </header>

      <div className='block mb-32'>
        <div>
          <Main />
        </div>
      </div>

      <div>
        <Cuerpo/>
      </div>


    </div>
  );
}

export default App;
