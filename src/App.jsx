import React, { useEffect, useState } from 'react'
import Path from './routes/Path'
import DarkMode from './components/Darkmode/Darkmode'
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from './components/Loading/Loading'
AOS.init();

const App = () => {
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },[2700])
  },[])

  if(loading){
    return <Loading/>;
  }

  return (
    <div className='bg-[#F8F8F8] dark:bg-[#111111]'>
      <DarkMode/>
      <Path/>
    </div>
  )
}

export default App
