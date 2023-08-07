import Button from "./Button";

function UsersList() {
  return (
    <div className="users-list-page">
      <div className="users-container">
        <li className="user">
          <p>Name</p>
          <Button text="Delete"></Button>
        </li>
      </div>
    </div>
  );
}

export default UsersList;
