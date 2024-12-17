import {useAddPhotoMutation, useFetchPhotosQuery} from "../store/index.js";
import Button from "./Button.jsx";
import Skeleton from "./Skeleton.jsx";
import PhotosListItem from "./PhotosListItem.jsx";

function PhotosList({album}) {
  const {data, isFetching, error: fetchingError} = useFetchPhotosQuery(album);
  const [addPhoto, {isLoading: isPhotoCreating}] = useAddPhotoMutation();

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-8 w-8" />;
  } else if (fetchingError) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map(photo => {
      return <PhotosListItem photo={photo} key={photo.id}/>;
    })
  }

  const handleAddPhoto = () => {
    addPhoto(album);
  }

  return (
    <div>
      <div className="m-2 flex flex-row justify-between items-center">
        <h3 className="text-xl font-bold">Photos In {album.title}</h3>
        <Button loading={isPhotoCreating} onClick={handleAddPhoto}>
          + Add photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;