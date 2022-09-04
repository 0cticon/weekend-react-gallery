function GalleryList({ galleryList }) {
    return (
        <div>
            {
                galleryList.map((gallery) => {
                    console.log(gallery);

                    return <div key={gallery.id}>

                        <img style={{ width: 300 + 'px' }} src={gallery.path} />
                        <br />
                        <button>Like</button>
                        <br />
                        <br />
                    </div>


                })
            }
        </div>
    )
}

export default GalleryList;