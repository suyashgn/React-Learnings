import { useParams } from 'react-router-dom';

const mockUserData = {
  1: { name: 'Alice', age: 25 },
  2: { name: 'Bob', age: 30 },
  3: { name: 'Charlie', age: 28 },
};

function UserProfile() {
  const { id } = useParams();
  const user = mockUserData[id];

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <p>Age: {user.age}</p>
      <p>User ID: {id}</p>
    </div>
  );
}

export default UserProfile;
