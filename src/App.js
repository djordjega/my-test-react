import './App.css';
import { cLog } from './utils/Utils';
import { setUser, getUser } from './models/User';
import BmButton from '@bm/core/target/basic/buttons/BmButton/BmButton';



function App() {

  function clicked() {
    cLog("clicked");

    let user1 = {
      name: "Suzana",
      age: 32
    }
    cLog('reading object from app 1', getUser());
    cLog('setting user from app', setUser(user1));
    cLog('reading object from app 2', getUser());

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
      <BmButton
        size={'small'}
        onClick={() => { }}
        data-test-id={`review${reviewId}openVersionsMenu`}
      >
        test
      </BmButton>
    </div>
  );
}

export default App;
