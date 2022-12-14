import { Outlet } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';

import Landing from "./pages/Landing";
import Header from "./components/Header";

function App() {
  return (
    <div className='relative font-mono flex flex-col h-screen mx-1 overflow-hidden'>
      <div className='flex-1 flex justify-center overflow-hidden'>
      <div className=' absolute md:left-5 left-0 top-2 rounded backdrop-blur-xl z-50'>
            <img
            alt="logo" className="w-8 md:w-10" src={process.env.PUBLIC_URL+"/logo192.png"}/>
      </div>
      <Header/>
        <div className='relative overflow-overlay overflow-x-hidden flex gap-12  py-24 scrollbar justify-center p-0 w-full  rounded md:p-32 lg:pl-96 lg:ml-28'>
          
          <Routes>
              <Route path="portfolio/" element={<Outlet />}>
                <Route path="" element={<Landing />} />
              </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
