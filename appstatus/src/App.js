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

  const proxy = 'https://criticalappcorsproxy.herokuapp.com/'

  async function getSalesforceStatus() {
    const result = await axios
    .get(proxy + "https://www.salesforce.com/")
    .then(res => {
      console.log(res.status, res.statusText)
      const salesforceStatus = res.status + ' ' + res.statusText
      setsalesforceStatus(salesforceStatus)
    })
    .catch(error => {
        console.log(error)
        alert(error)
    })
  }
useEffect(() => {
  getSalesforceStatus();
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
            Salesforce
          </h2>
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
        <div className='status'>
        <h2 className='title'>
            Salesforce
        </h2>
        </div>
        <div className='refresh'>
            <a className="fas fa-sync-alt" href="http://localhost:3000/"></a>
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
