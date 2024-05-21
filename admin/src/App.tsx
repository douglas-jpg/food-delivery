import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/Sidebar/SideBar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';

function App() {
    return (
        <div className=''>
            <Navbar />
            <hr className='border border-t-0 border-slate-300' />
            <div className='flex'>
                <SideBar />
                <Routes>
                    <Route path='/add' element={<Add/>}/>
                    <Route path='/list' element={<List/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
