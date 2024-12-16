import ExpandablePanel from "./ExpandablePanel.jsx";
import Button from "./Button.jsx";
import {GoTrashcan} from "react-icons/all.js";

function AlbumsListItem({album}) {
  const header = <div>
    <Button>
      <GoTrashcan/>
    </Button>
    {album.title}
  </div>

  return (
    <ExpandablePanel header={header}>
      List of photos in {album.title}
    </ExpandablePanel>
  );
}

export default AlbumsListItem;