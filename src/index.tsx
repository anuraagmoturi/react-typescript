import ReactDom from 'react-dom';
// import { GuestList } from './state/GuestList';
import UserSearch from './refs/UserSearch';
// import EventComponent from './events/EventComponent';

const users = [
  { name: 'user1', age: 20 },
  { name: 'user2', age: 20 },
  { name: 'user3', age: 20 }
]

const App = () => {
  return <div>
    <UserSearch />
  </div>
}

ReactDom.render(<App />, document.querySelector('#root'));