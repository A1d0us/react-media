import {GoTrashcan} from "react-icons/all.js";
import {useRemovePhotoMutation} from "../store/index.js";

function PhotosListItem({photo}) {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  }

  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <img src={photo.url} alt="random pic" className="h-20 w-20"/>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-100">
        <GoTrashcan className="text-3xl"/>
      </div>
    </div>
  );
}

export default PhotosListItem;