import './App.css';
function clicked() {
  alert("clicked");
}

function App() {
  return (
    <div className="App">
      <h1>React test</h1>
      <button onClick={clicked}>Click me</button>
    </div>
  );
}

export default App;
