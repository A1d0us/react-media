import {useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "../store/index.js";
import Skeleton from "./Skeleton.jsx";
import Button from "./Button.jsx";
import useThunk from "../hooks/use-thunk.js";
import UserListItem from "./UserListItem.jsx";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const {data} = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doAddUser();
  }

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full"/>;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user}/>
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleAddUser}>+ Add user</Button>
        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  );
}

export default UsersList;