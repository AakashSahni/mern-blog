import React, { useEffect, useState } from 'react'

import {useLocation} from 'react-router-dom'
import DashSideBar from '../components/DashSideBar';
import DashProfile from '../components/DashProfile';

function Dashboard() {

  const location = useLocation();
  const [tab, setTab] = useState('');
 
  useEffect(()=>{

    const urlParams = new URLSearchParams(location.search);
    const tabfromUrl = urlParams.get('tab');
    
    // console.log(tabfromUrl);

    if(tabfromUrl){
      setTab(tabfromUrl); 
    }
   

  },[location.search])

  return (
    <div>
        
        <div className="min-h-screen flex flex-col md:flex-row">

            <div className="md:w-56">
              
              {/* side bar */}
               <DashSideBar/>

            </div>

             {/* profie ...  */}
              {
                tab === 'profile' &&  <DashProfile/>                
              }
              
        </div>

       
       
    </div>
  )
}

export default Dashboard