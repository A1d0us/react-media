import useThunk from "../hooks/use-thunk.js";
import {removeUser} from "../store/index.js";
import Button from "./Button.jsx";
import ExpandablePanel from "./ExpandablePanel.jsx";
import {GoTrashcan} from "react-icons/all.js";
import AlbumsList from "./AlbumsList.jsx";

function UsersListItem({user}) {
  const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  }

  const header = <>
    <Button className="mr-3" loading={isRemovingUser} onClick={handleClick}>
      <GoTrashcan/>
    </Button>
    {removingUserError && <div>Error removing user...</div>}
    {user.name}
  </>

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user}/>
    </ExpandablePanel>
  );
}

export default UsersListItem;