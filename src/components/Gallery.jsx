import GalleryItem from './GalleryItem'

const Gallery = function(props) {
    let galleryItems = props.songs.map ((song, i ) => {
        return <GalleryItem key ={i} songTitle={song.trackName} artist={song.artistName} />
    })
    return (
        <div>
            {galleryItems}
        </div>
    )
}
export default Gallery

