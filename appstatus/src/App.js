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
  const [emoneyStatus, setemoneyStatus] = useState()
  const [nintexStatus, setnintexStatus] = useState()

  const proxy = 'https://criticalappcorsproxy.herokuapp.com/'
  const primaryNetwork = '74.93.39.173'

  async function getSalesforceStatus() {
    const result = await axios
    .get(proxy + "https://tciwealthadvisors.lightning.force.com/one/one.app")
    .then(res => {
      const salesforceStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setsalesforceStatus(salesforceStatus.replace(/['"]+/g, ''))
      console.log(salesforceStatus)
    })
    .catch(error => {
      const salesforceStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setsalesforceStatus(salesforceStatus.replace(/['"]+/g, ''))    
    })
  }
  useEffect(() => {
    getSalesforceStatus();
    }, []);

  async function getTCIStatus() {
    const result = await axios
    .get(proxy + "https://tciwealth.com/")
    .then(res => {
      const tciStatus = JSON.stringify(res.status + ' ' + res.statusText)
      settciStatus(tciStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const tciStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      settciStatus(tciStatus.replace(/['"]+/g, ''))
    })
  }
  useEffect(() => {
    getTCIStatus();
    }, []);

  async function getBoxStatus() {
    const result = await axios
    .get(proxy + "https://tciwealth.app.box.com/folder/0")
    .then(res => {
      const boxStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setboxStatus(boxStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const boxStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setboxStatus(boxStatus.replace(/['"]+/g, ''))
    })
  }
  useEffect(() => {
    getBoxStatus();
    }, []);

  async function getSchwabStatus() {
    const result = await axios
    .get(proxy + "https://si2.schwabinstitutional.com/SI2/Home/Default.aspx")
    .then(res => {
      const schwabStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setschwabStatus(schwabStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const schwabStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setschwabStatus(schwabStatus.replace(/['"]+/g, ''))
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
      setofficeStatus(officeStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const officeStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setofficeStatus(officeStatus.replace(/['"]+/g, ''))
    })
  }
  useEffect(() => {
    getOfficeStatus();
    }, []);

  async function getTDAStatus() {
    const result = await axios
    .get(proxy + "https://www.tdameritrade.com/")
    .then(res => {
      const tdaStatus = JSON.stringify(res.status + ' ' + res.statusText)
      settdaStatus(tdaStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const tdaStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      settdaStatus(tdaStatus.replace(/['"]+/g, ''))
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
      setlastpassStatus(lastpassStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const lastpassStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setlastpassStatus(lastpassStatus.replace(/['"]+/g, ''))
    })
  }
  useEffect(() => {
    getLastPassStatus();
    }, []);

  async function getusersIP() {
    const result = await axios
    .get(proxy + 'https://api.ipify.org?format=json')
    .then(res => {
      const usersIP = JSON.stringify(res.data.ip)
      setusersIP(usersIP.replace(/['"]+/g, ''))
    })
  }
  useEffect(() => {
    getusersIP();
    }, []);

  var isPrimaryNetwork = 'Primary Network'

  if (usersIP !== primaryNetwork) {
    isPrimaryNetwork = 'Failover Network'
  }

  async function getTamaracStatus() {
    const result = await axios
    .get(proxy + "https://portal.tamaracinc.com/Dashboard.aspx")
    .then(res => {
      const tamaracStatus = JSON.stringify(res.status + ' ' + res.statusText)
      settamaracStatus(tamaracStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const tamaracStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      settamaracStatus(tamaracStatus.replace(/['"]+/g, ''))
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
      setzoomStatus(zoomStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const zoomStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setzoomStatus(zoomStatus.replace(/['"]+/g, ''))
    })
  }
  useEffect(() => {
    getZoomStatus();
    }, []);

  async function getEmoneyStatus() {
    const result = await axios
    .get(proxy + "https://www.emoney.com/")
    .then(res => {
      const emoneyStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setemoneyStatus(emoneyStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const emoneyStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setemoneyStatus(emoneyStatus.replace(/['"]+/g, ''))
    })
  }
  useEffect(() => {
    getEmoneyStatus();
    }, []);

  async function getNintexStatus() {
    const result = await axios
    .get(proxy + "https://www.nintex.com/")
    .then(res => {
      const nintexStatus = JSON.stringify(res.status + ' ' + res.statusText)
      setnintexStatus(nintexStatus.replace(/['"]+/g, ''))
    })
    .catch(error => {
      const nintexStatus = JSON.stringify(error.response.status + ' ' + error.response.statusText)
      setnintexStatus(nintexStatus.replace(/['"]+/g, ''))
    })
  }
  useEffect(() => {
    getNintexStatus();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className='refresh'>
            <a title='Refresh Page' className="fas fa-sync-alt" href="http://localhost:3000/"> Refresh</a>
        </div>
        <div className='Status-Container'>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title' href="https://status.salesforce.com/instances/NA160">
              Salesforce
            </a>
            <p target="_blank" rel="noopener noreferrer" style={salesforceStatus ? (salesforceStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{salesforceStatus}</p>
          </div>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title' href="https://tciwealth.com/">
              TCI
            </a>
            <p style={tciStatus ? (tciStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{tciStatus}</p>
          </div>
          <div className='status'>
          <a target="_blank" rel="noopener noreferrer" className='title' href="https://status.box.com/">
              Box
          </a>
          <p style={boxStatus ? (boxStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{boxStatus}</p>
          </div>
          <div className='status'>
          <a target="_blank" rel="noopener noreferrer" className='title' href="https://si2.schwabinstitutional.com/SI2/Home/Default.aspx">
              Schwab
          </a>
          <p style={schwabStatus ? (schwabStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{schwabStatus}</p>
          </div>
          <div className='status'>
          <a target="_blank" rel="noopener noreferrer" className='title' href="https://portal.office.com/servicestatus">
              Office
          </a>
          <p style={officeStatus ? (officeStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{officeStatus}</p>
          </div>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title' href="https://downdetector.com/status/td-ameritrade/">
              TDA
            </a>
            <p style={tdaStatus ? (tdaStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{tdaStatus}</p>
          </div>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title' href="https://status.lastpass.com/">
              LastPass
            </a>
            <p style={lastpassStatus ? (lastpassStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{lastpassStatus}</p>
          </div>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title'>
              Network
            </a>
            <p className='ip'>{usersIP}</p>
            <p style={usersIP === ("74.93.39.173") ? {color:'yellowgreen'}:{color:'red'}}>{isPrimaryNetwork}</p>
          </div>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title' href="https://www.tamaracinc.com/">
              Tamarac
            </a>
            <p style={tamaracStatus ? (tamaracStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{tamaracStatus}</p>
          </div>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title' href="https://status.zoom.us/">
              Zoom
            </a>
            <p style={zoomStatus ? (zoomStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{zoomStatus}</p>
          </div>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title' href="https://downdetector.com/status/emoney/">
              Emoney
            </a>
            <p style={emoneyStatus ? (emoneyStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{emoneyStatus}</p>
          </div>
          <div className='status'>
            <a target="_blank" rel="noopener noreferrer" className='title' href="https://status.nintex.com/">
              Nintex
            </a>
            <p style={nintexStatus ? (nintexStatus.includes("200") ? {color:'yellowgreen'}:{color:'red'}) : {color:'white'}}>{nintexStatus}</p>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
