import './App.css';
import cLog from './utils/Utils';

function App() {

  function clicked() {
    cLog("clicked");
    let selectedAssets = window.parent.document.querySelectorAll('.asset-selected');

    let selectedIds = [];
    for (let i = 0; i < selectedAssets.length; i++) {
      selectedIds.push(selectedAssets[i].id);
      cLog("selected ", selectedAssets[i]);
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
