// import logo from "./logo.svg";
import "./App.css";
import ArtForm from "./components/ArtForm/artForm";
import MainNavbar from "./components/MainNavbar/MainNavbar";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <MainNavbar />
      <ArtForm/>
    </div>
  );
}

export default App;
