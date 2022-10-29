import logo from './logo.svg';
import './style/App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
}

export default App;
