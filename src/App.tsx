import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import lodash from 'lodash'

function App() {
  const [count, setCount] = useState(0)
  const mockData = [{
    "id": 1,
    "first_name": "Michaela",
    "last_name": "Moyers",
    "email": "mmoyers0@mapy.cz",
    "gender": "Genderfluid",
    "ip_address": "86.98.16.100"
  }, {
    "id": 2,
    "first_name": "Bobby",
    "last_name": "Isham",
    "email": "bisham1@cpanel.net",
    "gender": "Male",
    "ip_address": "109.122.170.46"
  }, {
    "id": 3,
    "first_name": "Claude",
    "last_name": "Le Quesne",
    "email": "clequesne2@nba.com",
    "gender": "Female",
    "ip_address": "216.49.57.145"
  }, {
    "id": 4,
    "first_name": "Liesa",
    "last_name": "Crockley",
    "email": "lcrockley3@phoca.cz",
    "gender": "Female",
    "ip_address": "156.148.46.68"
  }, {
    "id": 5,
    "first_name": "Den",
    "last_name": "Omond",
    "email": "domond4@vinaora.com",
    "gender": "Genderqueer",
    "ip_address": "134.7.112.162"
  }]

  const mockData2 = [{
    "id": 1,
    "first_name": "Michaela",
    "last_name": "Moyers",
    "email": "mmoyers0@mapy.cz",
    "gender": "Genderfluid",
    "ip_address": "86.98.16.100"
  }, {
    "id": 2,
    "first_name": "Bobby",
    "last_name": "Isham",
    "email": "bisham1@cpanel.net",
    "gender": "Male",
    "ip_address": "109.122.170.46"
  }, {
    "id": 3,
    "first_name": "Claude",
    "last_name": "Le Quesne",
    "email": "clequesne2@nba.com",
    "gender": "Female",
    "ip_address": "216.49.57.145"
  }, {
    "id": 4,
    "first_name": "Liesa",
    "last_name": "Crockley",
    "email": "lcrockley3@phoca.cz",
    "gender": "Female",
    "ip_address": "156.148.46.68"
  }, {
    "id": 5,
    "first_name": "Den",
    "last_name": "Omond",
    "email": "domond4@vinaora.com",
    "gender": "Genderqueer",
    "ip_address": "134.7.112.162"
  }]

  console.log(mockData.map((data, i) => 'map ' + data));
  mockData.forEach((data, i) => {
    console.log('forEach ' + data.id);
  });

  const timeNow = lodash.now();
  
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div>
        {/* {mockData.map((data) => (
          <div key={data.id}>
            <h2>{data.first_name} {data.last_name}</h2>
            <p>{data.email}</p>
            <span>{data.ip_address}</span>
          </div>
        ))} */}
        {mockData.map((data) => 
          <p>{data.gender}</p>
        )}
  {timeNow}
      </div>
      {/* */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>HELLO WORLDDD</p> */}
      
    </>
  )
}

export default App
