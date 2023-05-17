import './App.css';
function clicked() {
  alert("clicked");
  let selectedAssets = document.querySelectorAll('.asset-selected');

    let selectedIds = [];
    for (let i = 0; i < selectedAssets.length; i++) {
        selectedIds.push(selectedAssets[i].id);
    }
    console.log('suup: ' + selectedAssets);
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
