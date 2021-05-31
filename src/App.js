import './App.css';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <Header></Header>

      <SideBar></SideBar>

      <Body></Body>
    </div>
  );
}

export default App;
