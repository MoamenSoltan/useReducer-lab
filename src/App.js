import logo from './logo.svg';
import './App.css';
import Register from './Components/NumberOne/Register';
import Products from './Components/NumberTwo/Products';
import { MainContext } from './Contexts/MainContext';
import Component1 from './Components/NumberThree/Component1';

function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Products/> */}
      <MainContext.Provider value='Moamen'>
        <Component1/>
      </MainContext.Provider>
    </div>
  );
}

export default App;
