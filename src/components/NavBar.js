import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBart() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-white" 
                        className="inflex-flex iterms-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Simon
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="ïnline-flex iterms-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Post
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        className="ïnline-flex iterms-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Project
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="ïnline-flex iterms-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://twitter.com/kwang_ok" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon 
                        url="https://youtube.com/kwang" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon 
                        url="https://inkedin.com/kwang" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                </div>
            </div>
        </header>
    
    )
}
