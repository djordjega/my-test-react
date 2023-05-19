import './App.css';

function App() {

  function clicked() {
    alert("clicked");
    let selectedAssets = window.parent.document.querySelectorAll('.asset-selected');

    let selectedIds = [];
    for (let i = 0; i < selectedAssets.length; i++) {
      selectedIds.push(selectedAssets[i].id);
      console.log("selected ", selectedAssets[i]);
    }
  }

  return (
    <div className="App">
      <h1>React test</h1>
      <button onClick={clicked}>Click me</button>
    </div>
  );
}

export default App;
