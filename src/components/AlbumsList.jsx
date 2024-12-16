import {useAddAlbumMutation, useFetchAlbumsQuery} from "../store/index.js";
import Skeleton from "./Skeleton.jsx";
import ExpandablePanel from "./ExpandablePanel.jsx";
import Button from "./Button.jsx";
import AlbumsListItem from "./AlbumsListItem.jsx";

function AlbumsList({user}) {
  const {data, error, isFetching: isAlbumsLoading} = useFetchAlbumsQuery(user);
  const [addAlbum, {isLoading: isAddingUser}] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user)
  }

  let content;
  if (isAlbumsLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />
  } else if (error) {
    content = <div>Error loading albums...</div>;
  } else {
    content = data.map(album => {
      return <AlbumsListItem album={album} key={album.id}/>
    })
  }

  return (
    <div>
      <div className="m-2 flex flex-row justify-between items-center">
        <h3 className="text-xl font-bold">Albums for {user.name}</h3>
        <Button loading={isAddingUser} onClick={handleAddAlbum}>
          + Add album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;