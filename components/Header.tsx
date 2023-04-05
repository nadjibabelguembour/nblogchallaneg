import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { SessionProvider } from "next-auth/react"
import classes from './navbar.module.css'

function Header() {

  const { data: session } = useSession();
  return (
    <header className="flex justify-between p-5 mx-auto max-w-7xl">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <h1 className="font-serif text-3xl cursor-pointer"><span className=" text-purple-900 ">N.</span>Blog</h1>
        </Link>

        <div className="items-center hidden space-x-5 md:inline-flex ">
          <Link href="/#about">
            <h3 className="rounded-full cursor-pointer hover:bg-purple-200 ">
              About
            </h3>
          </Link>
          <Link href="/#contact">
            <h3 className="rounded-full cursor-pointer hover:bg-purple-200">
              Contacts
            </h3>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-black">
        <Link href="#posts">
          <h3 className="px-4 py-1 border border-purple-900 rounded-full cursor-pointer text-purple-900 hover:bg-purple-200">
            Get Started
          </h3>
        </Link>
        {/* <button className="px-4 py-1 border border-purple-900 rounded-full cursor-pointer text-white bg-purple-900  hover:bg-purple-200 hover:text-purple-900">Login</button>
       */}
        {/* this is for showing the login session */}
        {/* <div className={classes["login"] }> */}
        <div className="px-4 py-1 border  rounded-full cursor-pointer text-purple-900  hover:bg-purple-200 hover:text-purple-900">
            {session ? (
              <img 
                onClick={() => {
                  signOut();
                }}
                // className={classes["profile-img"]}
                className="h-[30px] w-[30px] bg-transparent rounded-[60%] cursor-pointer object-cover"
                src={session?.user?.image || ""}
                alt="profile picture"
              />
            ) : (
              <button
                onClick={() => {
                  signIn();
                }}
              >
                Sign in
              </button>
            )}
          </div>
      </div>
    </header>
  );
}

export default Header;
