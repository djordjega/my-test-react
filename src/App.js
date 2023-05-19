import './App.css';
import {cLog, initF, setObjectOne, getObjectOne} from './utils/Utils';

function App() {

  function clicked() {
    cLog("clicked");
    cLog('read object 2 from app', getObjectOne());


    // let selectedAssets = window.parent.document.querySelectorAll('.asset-selected');

    // let selectedIds = [];
    // for (let i = 0; i < selectedAssets.length; i++) {
    //   selectedIds.push(selectedAssets[i].id);
    //   cLog("selected ", selectedAssets[i]);
    // }
  }

  return (
    <div className="App">
      <h1>Bulk Review - React Dev Test</h1>
      <button onClick={clicked}>Click me</button>
    </div>
  );
}

export default App;
