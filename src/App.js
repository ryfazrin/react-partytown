import logo from './logo.svg';
import './App.css';
import { Head } from './Head';

function App() {
  return (
    <div className="App">
      <Head />
      <header className="App-header">
        
      <strong>window.fetch(url) text</strong>
      <code>
        <span id="testFetchText"></span>
      </code>
      
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            (async function () {
              const elm = document.getElementById('testFetchText');
              const rsp = await window.fetch('text.txt');
              const text = await rsp.text();
              elm.textContent = text;
              elm.className = 'testFetchText';
            })();
          `,
        }}
      />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
