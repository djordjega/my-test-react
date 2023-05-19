import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log("app loaded");
initF();

function initF() {
  console.log("initF...");
  let dseObjectId = window.dseObjectConfig.dseObject.instanceId;
  console.log("dse object id: " + dseObjectId);

  let dseObjectId_2 = window.parent.dseObjectConfig.dseObject.instanceId;
  console.log("dse object id 2: " + dseObjectId_2);

  let selectedAssets = window.parent.document.querySelectorAll('.asset-selected');
  let selectedIds = [];
  for (let i = 0; i < selectedAssets.length; i++) {
    selectedIds.push(selectedAssets[i].id);
  }
  console.log("selected ids: " + selectedIds);

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
