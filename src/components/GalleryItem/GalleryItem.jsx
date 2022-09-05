import axios from "axios";
import { useState } from "react";


function GalleryItem({ gallery, likeImage, toggleImage }) {
    const [toggle, setToggle] = useState(false);
    return <div>

        <button onClick={() => toggleImage(gallery.id)}><img style={{ width: 300 + 'px' }} src={gallery.path} /></button>

        <br />
        <br />
        {/* this is where the likeImage function is called */}
        <button onClick={() => likeImage(gallery.id)}>Like</button>

        <br />
        <br />
        <br />
    </div>
}



export default GalleryItem;

