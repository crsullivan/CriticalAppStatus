import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [salesforceStatus, setsalesforceStatus] = useState()
  const [tciStatus, settciStatus] = useState()
  const [boxStatus, setboxStatus] = useState([])
  const [schwabStatus, setschwabStatus] = useState([])
  const [officeStatus, setofficeStatus] = useState()
  const [tdaStatus, settdaStatus] = useState()
  const [lastpassStatus, setlastpassStatus] = useState()
  const [mitelStatus, setmitelStatus] = useState([])
  const [tamaracStatus, settamaracStatus] = useState([])
  const [zoomStatus, setzoomStatus] = useState()
  const [usersIP, setusersIP] = useState()

  const proxy = 'https://criticalappcorsproxy.herokuapp.com/'

  async function getusersIP() {
    const result = await axios
    .get(proxy + 'https://api.ipify.org?format=json')
    .then(res => {
      const usersIP = res.data.ip
      setusersIP(usersIP)
      console.log(usersIP)
    })
  }
  useEffect(() => {
    getusersIP();
    }, []);


  async function getSalesforceStatus() {
    const result = await axios
    .get(proxy + "https://www.salesforce.com/")
    .then(res => {
      const salesforceStatus = res.status + ' ' + res.statusText
      setsalesforceStatus(salesforceStatus)
    })
    .catch(error => {
      const salesforceStatus = error.response.status + ' ' + error.response.statusText
      setsalesforceStatus(salesforceStatus)    })
  }
  useEffect(() => {
    getSalesforceStatus();
    }, []);

  async function getTCIStatus() {
    const result = await axios
    .get(proxy + "https://tciwealth.com/")
    .then(res => {
      const tciStatus = res.status + ' ' + res.statusText
      settciStatus(tciStatus)
    })
    .catch(error => {
      const tciStatus = error.response.status + ' ' + error.response.statusText
      settciStatus(tciStatus)
    })
  }
  useEffect(() => {
    getTCIStatus();
    }, []);

  async function getBoxStatus() {
    const result = await axios
    .get(proxy + "https://box.com/")
    .then(res => {
      const boxStatus = res.status + ' ' + res.statusText
      setboxStatus(boxStatus)
    })
    .catch(error => {
      const boxStatus = error.response.status + ' ' + error.response.statusText
      setboxStatus(boxStatus)
    })
  }
  useEffect(() => {
    getBoxStatus();
    }, []);

  async function getSchwabStatus() {
    const result = await axios
    .get(proxy + "https://schwab.com/")
    .then(res => {
      const schwabStatus = res.status + ' ' + res.statusText
      setschwabStatus(schwabStatus)
    })
    .catch(error => {
      const schwabStatus = error.response.status + ' ' + error.response.statusText
      setschwabStatus(schwabStatus)
    })
  }
  useEffect(() => {
    getSchwabStatus();
    }, []);

  async function getOfficeStatus() {
    const result = await axios
    .get(proxy + "https://www.office.com/")
    .then(res => {
      const officeStatus = res.status + ' ' + res.statusText
      setofficeStatus(officeStatus)
    })
    .catch(error => {
      const officeStatus = error.response.status + ' ' + error.response.statusText
      setofficeStatus(officeStatus)
    })
  }
  useEffect(() => {
    getOfficeStatus();
    }, []);

  async function getTDAStatus() {
    const result = await axios
    .get(proxy + "https://www.tdainstitutional.com/")
    .then(res => {
      const tdaStatus = res.status + ' ' + res.statusText
      settdaStatus(tdaStatus)
    })
    .catch(error => {
      const tdaStatus = error.response.status + ' ' + error.response.statusText
      settdaStatus(tdaStatus)
    })
  }
  useEffect(() => {
    getTDAStatus();
    }, []);

  async function getLastPassStatus() {
    const result = await axios
    .get(proxy + "https://www.lastpass.com/")
    .then(res => {
      const lastpassStatus = res.status + ' ' + res.statusText
      setlastpassStatus(lastpassStatus)
    })
    .catch(error => {
      const lastpassStatus = error.response.status + ' ' + error.response.statusText
      setlastpassStatus(lastpassStatus)
    })
  }
  useEffect(() => {
    getLastPassStatus();
    }, []);

  async function getMitelStatus() {
    const result = await axios
    .get(proxy + "mitel.com")
    .then(res => {
      const mitelStatus = res.status + ' ' + res.statusText
      setmitelStatus(mitelStatus)
    })
    .catch(error => {
      const mitelStatus = error.response.status + ' ' + error.response.statusText
      setmitelStatus(mitelStatus)
      console.log(mitelStatus)
    })
  }
  useEffect(() => {
    getMitelStatus();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className='status'>
          <h2 className='title'>
            Salesforce
          </h2>
          <p>{salesforceStatus}</p>
        </div>
        <div className='status'>
          <h2 className='title'>
            TCI
          </h2>
          <p>{tciStatus}</p>
        </div>
        <div className='status'>
        <h2 className='title'>
            Box
        </h2>
        <p>{boxStatus}</p>
        </div>
        <div className='status'>
        <h2 className='title'>
            Schwab
        </h2>
        <p>{schwabStatus}</p>
        </div>
        <div className='status'>
        <h2 className='title'>
            Office
        </h2>
        <p>{officeStatus}</p>
        </div>
        <div className='refresh'>
            <a className="fas fa-sync-alt" href="http://localhost:3000/"></a>
        </div>
        <div className='status'>
          <h2 className='title'>
            TDA
          </h2>
          <p>{tdaStatus}</p>
        </div>
        <div className='status'>
          <h2 className='title'>
            LastPass
          </h2>
          <p>{lastpassStatus}</p>
        </div>
        <div className='status'>
          <h2 className='title'>
            Mitel
          </h2>
          <p>{mitelStatus}</p>
        </div>
        <div className='status'>
          <h2 className='title'>
            Salesforce
          </h2>
        </div>
        <div className='status'>
          <h2 className='title'>
            Salesforce
          </h2>
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
