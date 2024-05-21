import Navbar from './components/Navbar/Navbar';
import SideBar from './components/Sidebar/SideBar';

function App() {
    return (
        <div className=''>
            <Navbar />
            <hr className='border border-t-0 border-slate-300' />
            <div className='flex'>
                <SideBar />
            </div>
        </div>
    );
}

export default App;
