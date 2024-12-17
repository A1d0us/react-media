import ExpandablePanel from "./ExpandablePanel.jsx";
import Button from "./Button.jsx";
import {GoTrashcan} from "react-icons/all.js";
import {useRemoveAlbumMutation} from "../store/index.js";
import PhotosList from "./PhotosList.jsx";

function AlbumsListItem({album}) {
  const [removeAlbum, {isLoading}] = useRemoveAlbumMutation();

  const handleClick = () => {
    removeAlbum(album);
  }

  const header = <>
    <Button className="mr-2" loading={isLoading} onClick={handleClick}>
      <GoTrashcan/>
    </Button>
    {album.title}
  </>

  return (
    <ExpandablePanel header={header}>
      <PhotosList album={album}/>
    </ExpandablePanel>
  );
}

export default AlbumsListItem;