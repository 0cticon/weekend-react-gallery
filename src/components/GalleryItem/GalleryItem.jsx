import axios from "axios";
import { useState } from "react";


// individual gallery items functions when clicked
// description
function GalleryItem({ gallery, likeImage, toggleImage }) {
    const [toggle, setToggle] = useState(true);
    toggleImage = () => {
        if (toggle === true) {
            return <div>{gallery.path}</div>;
        } else {
            return <div>{gallery.description}</div>
        }

    }

    return <div>

        {/* like counter */}
        <button id="like" onClick={(id) => setToggle(!toggle)}><img style={{ width: 300 + 'px' }} src={gallery.path} />
            {toggle ? <div> </div> : <div>{gallery.description}</div>}</button>

        <br />
        <br />
        {/* this is where the likeImage function is called */}
        <button onClick={() => likeImage(gallery.id)}>Like {gallery.likes}</button>

        <br />
        <br />
        <br />
    </div>
}



export default GalleryItem;

