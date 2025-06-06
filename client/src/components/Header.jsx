import React from 'react'
import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import { Link , useLocation} from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import {toggleTheme} from '../redux/theme/themeSlice'

function Header() {

  const path = useLocation().pathname;

  const dispatch = useDispatch()

  const { currentUser } = useSelector((state)=> state.user)

  const { theme } = useSelector((state)=> state.theme)
  
  return (
    <Navbar className='border-b-gray-100 border-b-2 '>

        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl 
        font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 
              via-purple-500 to-pink-500 rounded-lg text-white'>Aakash's</span>
              Blog
        </Link>

        <form >
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch }
            className='hidden lg:inline'

          />
        </form>

        <Button className='w-12 h-10 lg:hidden' color='gray'  pill >
            < AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">

                <Button className='w-12 h-10 hidden sm:inline text-black bg-white border-1 border-gray-400 hover:text-white hover:bg-black cursor-pointer' pill onClick={()=>dispatch(toggleTheme())} >

                  {
                    theme === 'light' ? <FaSun/>: <FaMoon  />
                  }
                        
              </Button>

              {
                currentUser ? (

                  <Dropdown 
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar
                        alt='user'
                        img={currentUser.profilePicture}
                        rounded
                      />
                    }
                  >
                      <DropdownHeader>
                        <span className='block text-sm'>@{currentUser.username}</span>
                        <span className='block text-sm font-medium truncate'>@{currentUser.email}</span>
                      </DropdownHeader>

                      <Link to={'/dashboard?tab=posts'}>
                          <DropdownItem>Profile</DropdownItem>
                      </Link>

                      <DropdownDivider/>

                      <DropdownItem>Sign Out</DropdownItem>

                  </Dropdown>

                ) : (
                <Link to="/signin">
                    <Button  className=' text-black bg-white border-purple-400 border-2 cursor-pointer from-cyan-500 to-blue-500  hover:bg-gradient-to-r  focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 '  >
                        Sign In
                    </Button>
                </Link>
                 )
              }

                    

                <NavbarToggle/>  
        </div>

         <NavbarCollapse>
          
   

       <NavbarLink as={Link} to="/" active={location.pathname === "/"}>
          Home
        </NavbarLink>

        <NavbarLink as={Link} to="/about" active={location.pathname === "/about"}>
          About
        </NavbarLink>

        <NavbarLink as={Link} to="/projects" active={location.pathname === "/projects"}>
          Projects
        </NavbarLink>

                  
          </NavbarCollapse>

    </Navbar>
  )
}

export default Header