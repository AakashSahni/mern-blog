import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle  } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsGithub, BsTwitterX, BsDribbble} from 'react-icons/bs'

function FooterComp() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      
      <div className="w-full max-w-7xl mx-auto">

        <div className="grid w-full justify-between sm:flex md:grid-col-1">

            <div className='' >

             <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl 
        font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 
              via-purple-500 to-pink-500 rounded-lg text-white'>Aakash's</span>
              Blog
        </Link>

        </div>

        <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">

            <div>
                     <FooterTitle title='About'/>
              <FooterLinkGroup col>

                    <FooterLink href='#' target='_blank' >
                      React Projects
                    </FooterLink>

                    <FooterLink href='/about' target='_blank' >
                     Aakash's Blog
                    </FooterLink>
                   

              </FooterLinkGroup>
            </div>

               <div>
                  <FooterTitle title='Follow us'/>
              <FooterLinkGroup col>

                    <FooterLink href='https://github.com/AakashSahni' target='_blank' >
                     Github
                    </FooterLink>
                    
                    <FooterLink href='#' target='_blank' >
                     Discord
                    </FooterLink>
                   

              </FooterLinkGroup>
            </div>

               <div>
                  <FooterTitle title='Legal'/>
              <FooterLinkGroup col>

                    <FooterLink href='#' target='_blank' >
                     Privacy Policy 
                    </FooterLink>
                    
                    <FooterLink href='#' target='_blank' >
                     Terms &amp; Condition
                    </FooterLink>
                   

              </FooterLinkGroup>
            </div>
             

        </div>

        </div>


        {/* icons insta , fb    */}

        <FooterDivider />
        <div className="w-full  sm:flex sm:items-center sm:justify-between">

              <FooterCopyright href='#' by='Aakash blog' year={new Date().getFullYear()}/>

               <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">

              <FooterIcon href='#' icon={BsFacebook}/>
              <FooterIcon href='#' icon={BsInstagram}/>
              <FooterIcon href='https://github.com/AakashSahni' icon={BsGithub}/>
              <FooterIcon href='#' icon={BsTwitterX}/>
              <FooterIcon href='#' icon={BsDribbble}/>

        </div>
        </div>

       

      </div>
    </Footer>
  )
}

export default FooterComp