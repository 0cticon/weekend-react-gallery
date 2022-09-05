import axios from "axios";
import { useState } from "react";


function GalleryItem({ gallery, likeImage, toggleImage }) {
    const [toggle, setToggle] = useState(true);
    const showDescription = () => {
        if (toggle === true) {
            <div>{gallery.description}</div>;
        } else {
            <div>{gallery.path}</div>
        }
    }

    return <div>

        <button onClick={(x) => setToggle(!toggle)}><img style={{ width: 300 + 'px' }} src={gallery.path} />
            {toggle ? <div></div> : <div>{gallery.description}</div>}</button>

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

