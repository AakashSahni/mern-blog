import React, { useEffect, useState } from 'react'

import {Link, useLocation} from 'react-router-dom'

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";


function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabfromUrl = urlParams.get("tab");

    // console.log(tabfromUrl);

    if (tabfromUrl) {
      setTab(tabfromUrl);
    }
  }, [location.search]);

  return (
    <Sidebar className='w-full md:56'>
      <SidebarItems>
        <SidebarItemGroup>

                 

                <SidebarItem as={Link} to="/dashboard?tab=profile" active={tab === 'profile'} icon={HiUser} label={"user"} labelColor="dark">
                            Profile
                </SidebarItem>
                
       
              
       
         
          <SidebarItem
            active
            icon={HiArrowSmRight}
            className="cursor-pointer"
            labelColor="dark"
          >
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}

export default DashSideBar;
