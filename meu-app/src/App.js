import NavBarTopo from "./components/navbarTopo";
import NavBarBottom from "./components/navbarBottom";
import Post from "./components/post";
import {ReactComponent as Arte} from "./images/art.webp";
import './main.css';
function App() {
  return (
    <div>
      <NavBarTopo/>
      
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <NavBarBottom/>
    </div>
  );
}

export default App;
