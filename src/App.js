import './App.css';
import Nav from "./Nav"
import SidebarLeft from "./SidebarLeft";
import Content from './Content';
import SidebarRight from "./SidebarRight";
function App() {
    return (
        <div className="main">
            <Nav/>
            <div className='main__content'>
                <SidebarLeft/>
                <Content/>
                <SidebarRight/>
            </div>
        </div>
    );
}

export default App;
