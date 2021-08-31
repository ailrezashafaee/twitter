import './App.css';
import Feed from './components/Feed/Feed';
import SideBar from './components/Sidebar/SideBar';
import Widget from './components/Widget/Widget';
function App() {
  return (
    <div className="app">
      <SideBar/>
      <Feed/>
      <Widget/>
    </div>
  );
}

export default App;
