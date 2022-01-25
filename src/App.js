import React from 'react';
import { useFetch } from './useFetch';
import './App.css'

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className='App'>
      <h2>Custom Hook: useFetch() for fetching data from API</h2>
      {
        data &&
          data.map((item) => {
            return (
              <>
              
              <p>User ID: {item.id}</p>
              <p>Title: {item.title}</p>
              </>
            )
          })
      }
    </div>
  );
}

export default App;
