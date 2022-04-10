import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {ChevronUpIcon} from '@heroicons/react/outline'
import Link from 'react-scroll/modules/components/Link'
export default function Footer() {
  return (
    
        <div className=" w-1/2 align-center m-auto place-content-center">
            <div className="w-1/2 align-center m-auto">
            <Link to="about" smooth="true" className="">
            <ChevronUpIcon className="border rounded-full border-black m-auto hover:opacity-70 cursor-pointer"
            
            height={100}
            width={100}
            />
            </Link>
            <ul className="flex m-auto justify-center">
            <li className="mt-5 mb-5 m-3 justify-center hover:opacity-70">
            <SocialIcon url="https://www.linkedin.com/in/shalev-gerbi/" />
            </li>
            <li className="mt-5 mb-5 m-3 justify-content brightness-200 hover:opacity-70">
                <SocialIcon url="https://github.com/shalevgerbi"/>
            </li>
            <li>

            </li>
            </ul>
            </div>
        </div>
    
  )
}
