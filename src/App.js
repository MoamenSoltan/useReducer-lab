import logo from './logo.svg';
import './App.css';
import Register from './Components/NumberOne/Register';
import Products from './Components/NumberTwo/Products';
import { MainContext } from './Contexts/MainContext';
import Component1 from './Components/NumberThree/Component1';
import CounterEx from './Components/NumberFour/CounterEx';
import UserNameUpdate from './Components/NumberFive/UserNameUpdate';
import IntervalEx from './Components/NumberSix/IntervalEx';
import WindowResizeEx from './Components/NumberSeven/WindowResizeEx';
import SearchForPosts from './Components/NumberEightAndNine/SearchForPosts';

function App() {
  return (
    <div className="App">
      <Register/>
      {/* <Products/> */}
      {/* <MainContext.Provider value='Moamen'>
        <Component1/>
      </MainContext.Provider> */}
      {/* <CounterEx/> */}
      {/* <UserNameUpdate/> */}
      {/* <IntervalEx/> */}
      {/* <WindowResizeEx/> */}
      {/* <SearchForPosts/> */}
    </div>
  );
}

export default App;
