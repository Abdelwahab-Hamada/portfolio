import { Outlet } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';

import Landing from "./pages/Landing";
import Header from "./components/Header";

function App() {
  return (
    <div className=' font-mono flex flex-col h-screen mx-1 '>
      <div className='flex-1 flex justify-center overflow-hidden'>
      <div className=' absolute left-5 top-1 rounded backdrop-blur-xl z-50'>
            <img className="w-16" src="https://res.cloudinary.com/abdelwahab-youssef/image/upload/v1662576639/cooltext418770280741237_eohvzy.png"/>
      </div>
      <Header/>
        <div className='relative overflow-auto flex gap-12  py-16 scrollbar justify-center p-3 w-full rounded '>
          
          <Routes>
              <Route path="portfolio-app/" element={<Outlet />}>
                <Route path="" element={<Landing />} />
              </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
