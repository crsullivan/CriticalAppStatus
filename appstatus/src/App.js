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
  // const [mitelStatus, setmitelStatus] = useState([])
  const [tamaracStatus, settamaracStatus] = useState([])
  const [zoomStatus, setzoomStatus] = useState()
  const [usersIP, setusersIP] = useState()

  const proxy = 'https://criticalappcorsproxy.herokuapp.com/'

  async function getSalesforceStatus() {
    const result = await axios
    .get(proxy + "https://status.salesforce.com/instances/NA160")
    .then(res => {
      const salesforceStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setsalesforceStatus(salesforceStatus)
    })
    .catch(error => {
      const salesforceStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setsalesforceStatus(salesforceStatus)    })
  }
  useEffect(() => {
    getSalesforceStatus();
    }, []);

  async function getTCIStatus() {
    const result = await axios
    .get(proxy + "https://tciwealth.com/")
    .then(res => {
      const tciStatus = JSON.stringify(res.status + ' ' + res.statusText)
      settciStatus(tciStatus)
    })
    .catch(error => {
      const tciStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
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
      const boxStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setboxStatus(boxStatus)
    })
    .catch(error => {
      const boxStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
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
      const schwabStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setschwabStatus(schwabStatus)
    })
    .catch(error => {
      const schwabStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setschwabStatus(schwabStatus)
    })
  }
  useEffect(() => {
    getSchwabStatus();
    }, []);

  async function getOfficeStatus() {
    const result = await axios
    .get(proxy + "https://outlook.office.com/mail/")
    .then(res => {
      const officeStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setofficeStatus(officeStatus)
    })
    .catch(error => {
      const officeStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
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
      const tdaStatus = JSON.stringify(res.status + ' ' + res.statusText)
      settdaStatus(tdaStatus)
    })
    .catch(error => {
      const tdaStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      settdaStatus(tdaStatus)
    })
  }
  useEffect(() => {
    getTDAStatus();
    }, []);

  async function getLastPassStatus() {
    const result = await axios
    .get(proxy + "https://identity.lastpass.com/#justloggedin")
    .then(res => {
      const lastpassStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setlastpassStatus(lastpassStatus)
    })
    .catch(error => {
      const lastpassStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setlastpassStatus(lastpassStatus)
    })
  }
  useEffect(() => {
    getLastPassStatus();
    }, []);

  async function getusersIP() {
    const result = await axios
    .get(proxy + 'https://api.ipify.org?format=json')
    .then(res => {
      const usersIP = res.data.ip
      setusersIP(usersIP)
    })
  }
  useEffect(() => {
    getusersIP();
    }, []);

  var isPrimaryNetwork = 'Primary Network'

  if (usersIP !== '74.93.39.173') {
    isPrimaryNetwork = 'Failover Network'
  }

  async function getTamaracStatus() {
    const result = await axios
    .get(proxy + "https://portal.tamaracinc.com/Dashboard.aspx")
    .then(res => {
      const tamaracStatus = JSON.stringify(res.status + ' ' + res.statusText)
      settamaracStatus(tamaracStatus)
    })
    .catch(error => {
      const tamaracStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      settamaracStatus(tamaracStatus)
    })
  }
  useEffect(() => {
    getTamaracStatus();
    }, []);

  async function getZoomStatus() {
    const result = await axios
    .get(proxy + "https://tciwealth.zoom.us/meeting#/upcoming")
    .then(res => {
      const zoomStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setzoomStatus(zoomStatus)
    })
    .catch(error => {
      const zoomStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setzoomStatus(zoomStatus)
    })
  }
  useEffect(() => {
    getZoomStatus();
    }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className='statusA'>
          <h2 className='title'>
            Salesforce
          </h2>
          <p>{salesforceStatus}</p>
        </div>
        <div className='statusA'>
          <h2 className='title'>
            TCI
          </h2>
          <p>{tciStatus}</p>
        </div>
        <div className='statusA'>
        <h2 className='title'>
            Box
        </h2>
        <p>{boxStatus}</p>
        </div>
        <div className='statusA'>
        <h2 className='title'>
            Schwab
        </h2>
        <p>{schwabStatus}</p>
        </div>
        <div className='statusA'>
        <h2 className='title'>
            Office
        </h2>
        <p>{officeStatus}</p>
        </div>
        <div className='refresh'>
            <a className="fas fa-sync-alt" href="http://localhost:3000/"></a>
        </div>
        <div className='statusB'>
          <h2 className='title'>
            TDA
          </h2>
          <p>{tdaStatus}</p>
        </div>
        <div className='statusB'>
          <h2 className='title'>
            LastPass
          </h2>
          <p>{lastpassStatus}</p>
        </div>
        <div className='statusB'>
          <h2 className='title'>
            Network
          </h2>
          <p>{usersIP}</p>
          <p>{isPrimaryNetwork}</p>
        </div>
        <div className='statusB'>
          <h2 className='title'>
            Tamarac
          </h2>
          <p>{tamaracStatus}</p>
        </div>
        <div className='statusB'>
          <h2 className='title'>
            Zoom
          </h2>
          <p>{zoomStatus}</p>
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
