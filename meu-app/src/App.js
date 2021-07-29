import NavBarTopo from "./components/navbarTopo";
import NavBarBottom from "./components/navbarBottom";
import Post from "./components/post";
import Feed from "./components/feed";

import './main.css';
function App() {
  return (
    <div>
      <NavBarTopo/>
      <Feed>
      <Post autor="alexRicc2" foto="https://cdn.dribbble.com/users/2761133/screenshots/14600136/media/a4e7e2ad36825e3dde5438be25e98fdb.jpg?compress=1&resize=1200x900"></Post>
      <Post autor="deigo" foto="https://cdn.dribbble.com/users/2761133/screenshots/9069445/media/0f8b36ae267c82cb8667bc3a57ac9dea.jpg?compress=1&resize=800x600"></Post>
      <Post autor="thais" foto="https://cdn.dribbble.com/users/2761133/screenshots/6262036/barbas12.jpg?compress=1&resize=800x600"></Post>
      </Feed>
      <NavBarBottom/>
    </div>
  );
}

export default App;
