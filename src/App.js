import './App.css';
import Nav from "./Nav"
import SidebarLeft from "./SidebarLeft";
function App() {
    return (
        <div className="main">
            <Nav/>
            <div className='main__content'>
                <SidebarLeft/>
            </div>
        </div>
    );
}

export default App;
