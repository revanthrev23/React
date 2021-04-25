import Image from 'next/image'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import { Avatar } from './Avatar';
import Headeroptions from './HeaderOptions';


export default function Header(props) {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term){
          return;
        }
        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height={40} width={120} className="cursor-pointer" onClick={()=>router.push('/')}  />

                <form className="flex flex-grow border order-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
                    <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none" defaultValue={router.query.term} />
                    <XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3" onClick={() => (searchInputRef.current.value="")} />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>

                <Avatar url="https://static.toiimg.com/photo/imgsize-554735,msid-80725673/80725673.jpg" className="ml-auto" />
            </div>

            <Headeroptions />
        </header>
    )
}
