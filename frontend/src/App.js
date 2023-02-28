
import './index.css';
import Header from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />

        <a className="App-link text-[#fff] decoration-none" href="http://localhost:8888/login">
          Log in to Spotify
        </a>
      </header>
    </div>
  );
}

export default App;
