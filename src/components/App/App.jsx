import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import './App.css';

// main app file
function App() {
  const [galleryList, setGalleryList] = useState([]);

  // similar to onReady when page loads
  useEffect(() => {
    // console.log('useEffect');
    fetchGalleryList();
  }, []);
  // PUT request for like button
  const likeImage = (id) => {
    let clickCounter = 0;
    console.log('in likeImage', id);
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    }).then(response => {
      fetchGalleryList();
      console.log('in PUT');
    }).catch(error => {
      alert('something wrong');
    });
  }
  // console log stopped working, but toggle works toggleImage was 'delared in more than one spot was the fault i was getting, switched to setToggle and console.log stopped working.
  const toggleImage = (id) => {
    console.log('in toggleImage', id);
  }
  // request of server data to display on page
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
      {/* props to pass to other components */}
      <GalleryList galleryList={galleryList} likeImage={likeImage} toggleImage={toggleImage} />


    </div>

  );

}

export default App;
