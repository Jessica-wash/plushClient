//import React from 'react';
import './App.css';
//import UserAuth from './components/UserInfo/Auth';
import PlushList from './components/Lists/PlushList';
import WishList from './components/Lists/WishList';

function App() {
  return (
    <div className="App">
      <div className="AppMain">
        {/* <UserAuth /> */}
        <PlushList />
        <WishList />
      </div>
    </div>
  );
}

export default App;
