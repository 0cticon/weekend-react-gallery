import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';


function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    fetchGalleryList();
  }, []);

  console.log('stuff');
  const fetchGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      console.log(response.data);
      // our array is response.data
      setGalleryList(response.data);
    }).catch(error => {
      console.log(error);
      alert('something went wrong!');
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>My gallery</p>
      {
        galleryList.map((gallery) => {
          console.log(gallery);

          return <div>

            <img style={{ width: 200 + 'px' }} src={gallery.path} />

            <br />
            <button>Like</button>
            <br />

            <br />
          </div>


        })
      }
    </div>

  );

}

export default App;
