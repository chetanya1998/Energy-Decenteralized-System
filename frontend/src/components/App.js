import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import logo from '../assets/logo.png';
import {API_BASE_URL} from '../config';

function App() {
  const[walletInfo, setWalletInfo] = useState({});

  useEffect(()=>{
    fetch(`${API_BASE_URL}/wallet/info`)
    .then(response=>response.json())
    .then(json=> setWalletInfo(json));
  },[]);

  const {address,balance} = walletInfo;
  return (
    <div className="App">
        <h2>EDS</h2>
        <img className="logo" src={logo} alt= "EDS-Logo"/>
      <h3>Welcome to Energy Decenteralized System</h3>
      <br />
      <div className="WalletInfo">
        <div>Address:{address}</div>
        <div>Balance:{balance}</div>
    </div>
       <br/>
      <Link to="/blockchain"><Button>Blockchain</Button></Link>
      <br />
      <Link to="/conduct-transaction"> <Button>Conduct a Transaction</Button></Link>
      <br/>
      <Link to="/transaction-pool"> <Button>Transaction pool</Button></Link>
      <br />
    </div>
  );
}

export default App;
