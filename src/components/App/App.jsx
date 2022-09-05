import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import './App.css';


function App() {
  const [galleryList, setGalleryList] = useState([]);


  useEffect(() => {
    // console.log('useEffect');
    fetchGalleryList();
  }, []);

  const likeImage = (id) => {
    console.log('in likeImage', id);
  }

  const toggleImage = (id) => {
    console.log('in toggleImage', id);
  }

  // console.log('stuff');
  const fetchGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      // console.log(response.data);
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
      <GalleryList galleryList={galleryList} likeImage={likeImage} toggleImage={toggleImage} />


    </div>

  );

}

export default App;
