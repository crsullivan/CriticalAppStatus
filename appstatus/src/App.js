import logo from './logo.svg';
import './App.css';

function App() {

const url = 'https://www.salesforce.com/'

// function checkServer(url, timeout) {
//   const controller = new AbortController();
//   const signal = controller.signal;
//   const options = { mode: 'no-cors', signal };
//   return fetch(url, options)
//     // .then(setTimeout(() => { controller.abort() }, timeout))
//     .then(response => console.log('Check server response:', response.status))
//     .catch(error => console.error('Check server error:', error.message));
// }

// checkServer()

const controller = new AbortController();
const signal = controller.signal;

fetch('https://www.salesforceafe.com/' , {mode: 'no-cors', signal})
.then(response => console.log(response.status))

  return (
    <div className="App">
      <header className="App-header">
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
