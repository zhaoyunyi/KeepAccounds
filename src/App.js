import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// import PriceList from './components/PriceList';
import PriceListFunction from './components/PriceListFunction';

const items = [
  {
    "id": 1,
    "title": "购买SSD硬盘",
    "price": 699,
    "date": "2019-7-12",
    "category": {
      "id": "1",
      "name": "电脑",
      "type": "outcome",
      "iconName": "IosCart",
    }
  },
  {
    "id": 2,
    "title": "农信人力服务外包",
    "price": 650,
    "date": "2019-6-24",
    "category": {
      "id": "2",
      "name": "外包服务",
      "type": "income",
      "iconName": "$",
    }
  },
]

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
          {/*className="App-link"*/}
          {/*href="https://reactjs.org"*/}
          {/*target="_blank"*/}
          {/*rel="noopener noreferrer"*/}
        {/*>*/}
          {/*Learn React*/}
        {/*</a>*/}
      {/*</header>*/}

      <PriceListFunction
          items={items}
          onModifyItem={(item) => {
            alert(item.id)
          }}
          onDeleteItem={(item) => {
            alert(item.id)
          }}
      />
    </div>
  );
}

export default App;
