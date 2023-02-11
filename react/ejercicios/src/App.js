import logo from './logo.svg';
import './App.css';
import ContactList from './components/container/ContactList';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<ContactList />*/}
        <Clock />
      </header>
    </div>
  );
}

export default App;
