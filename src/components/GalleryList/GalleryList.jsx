import axios from "axios";
import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
{/* <Gallery></Gallery>; */ }
function GalleryList({ galleryList, likeImage, toggleImage, galleryItem }) {
    return (
        <div>
            {
                galleryList.map((gallery) => {
                    // console.log(gallery);
                    return <GalleryItem key={gallery.id}
                        gallery={gallery} galleryItem={galleryItem} likeImage={likeImage} toggleImage={toggleImage} />
                })
            }
        </div>
    )
}

export default GalleryList;