import React from 'react';
import { useFetch } from './useFetch';
import './App.css'

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [wine_data] = useFetch("https://api.sampleapis.com/wines/reds");

  return (
    <div className='App'>

      {/* User API */}
      <div>
        <h2>Custom Hook: useFetch() for fetching data from User API</h2>
        <div className='user'>
          {
            data &&
            data.map((item) => {
              return (
                <>

                  <p>User ID: {item.id}</p>
                  <p>Title: {item.title}</p>
                  <hr />
                </>
              )
            })
          }
        </div>
      </div>

      {/* Wine API */}
      <div>
        <h2>Custom Hook: useFetch() for fetching data from Wines API</h2>
        <div className='user'>
          {
            wine_data &&
            wine_data.map((item) => {
              return (
                <>

                  <img className='wine_image' src={item.image} alt="" />
                  <p>Wine Name: {item.winery}</p>
                  <hr />
                </>
              )
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
