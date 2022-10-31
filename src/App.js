import logo from './logo.svg';
import './style/App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
