import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink  to="/"                                    
                                    className={({isActive}) =>        
                                        `block py-2 pr-4 pl-3 duration-200 border-b  ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 
                                     lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"                             
                                    className={({isActive}) =>       
                                        `block py-2 pr-4 pl-3 duration-200 border-b  ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 
                                     lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"                                   
                                    className={({isActive}) =>        
                                        `block py-2 pr-4 pl-3 duration-200 border-b  ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 
                                     lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/github"                                   
                                    className={({isActive}) =>        
                                        `block py-2 pr-4 pl-3 duration-200 border-b  ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 
                                     lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

/* <++++++++++++++++++++++Notes++++++++++++++++++++++++++++++++>
<-----------By me----------------->
(a)'Link' and 'NavLink' is given by rect router
(b)'Link' is use inplace of <a> tag
(c)we can not use <a> tag in react because <a> (refresh(reload) the whole page
(d)in <a> tag we use 'href' but in 'Link' we use 'to'
(e)NavLink almost same as Link with some additinal properties
(f)line 37:when we use NavLink and write classNme like a callback then we have access of variable 'isActive', here we ask the NavLink current page is Active then NavLink check in URL, if page Active then calssName set color orange else gray

<-------------By chatGPT----------->
🔗 What is Link in React Router?
Link is used to navigate between pages (routes) without reloading the entire webpage.
It works like an <a> tag but uses client-side routing for faster navigation.

🛠 Syntax:
import { Link } from 'react-router-dom';

<Link to="/about">Go to About Page</Link>
Clicking this will navigate to /about without refreshing the page.

✅ Key Features of Link:

Feature	Description
Fast navigation	No full page reload. SPA behavior.
to prop	Defines the path to navigate.
Simple styling	Doesn't automatically apply styles to show active state.

🚀 What is NavLink in React Router?
NavLink is like Link but smarter:
👉 It automatically adds styling to the currently active link (like highlighting the current page in a navigation bar).

🛠 Syntax:
import { NavLink } from 'react-router-dom';

<NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>
  About Page
</NavLink>
✅ Key Features of NavLink:

Feature	Description
Inherits all from Link	Works exactly like Link for navigation
Active styling	Automatically detects and allows styling for active link
isActive	You can apply styles or classes dynamically when the link is active

🎨 Visual Example:
<NavLink to="/home" className={({ isActive }) => isActive ? 'active-link' : ''}>
  Home
</NavLink>

<NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
  About
</NavLink>
✅ When you’re on /about, the second link gets the active-link class automatically.

⚡ When to Use Which?
Use Case                                 	Use Link                       	Use NavLink
Simple navigation (no styling)	           ✅ Yes	                    ❌ Not necessary
Navigation with active highlighting	       ❌ No                     	✅ Yes (best choice)
Navbar, menu, tabs                         ❌ Avoid Link here           	✅ Use NavLink

👉 In short:
Use Link when you just need to navigate.
Use NavLink when you need navigation + active link styling (like for navigation bars). */