import { useState } from 'react';

const users = [
  { name: 'user1', age: 20 },
  { name: 'user2', age: 20 },
  { name: 'user3', age: 20 }
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);
    setUser(foundUser);
  }

  return <div>
    User search
    <input value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}> Search </button>

    <h3>{user && user.name}</h3>
    <h3>{user && user.age}</h3>
  </div>
}

export default UserSearch;