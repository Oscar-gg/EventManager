import { signOut, signIn, useSession } from "next-auth/react";
import { useState } from "react";

// TODO:
// Add sign in button and profile picture only when user is logged in.
// Change logos and colors.
// Make current page be highlighted in the navbar.

const NavBar = ({ routes }: { routes: { name: string; path: string }[] }) => {
  const { data: sessionData } = useSession();

  const [closed, setClosed] = useState(true); // State of mobile menu

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="group/button inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setClosed(!closed)}
            >
              <span className="sr-only">Open main menu</span>

              {closed ? (
                //  Icon when menu is closed.
                //  Menu open: "hidden", Menu closed: "block"
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                //     Icon when menu is open.
                //     Menu open: "block", Menu closed: "hidden"
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {routes.map((route) => (
                  <a
                    href={route.path}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    id={route.name}
                  >
                    {route.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* <!-- Profile dropdown --> */}
            <div className="group/profile relative ml-3">
              <div>
                <button
                  type="button"
                  className=" flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              {/* <!--
            Dropdown menu, show/hide based on menu state.
          --> */}
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right scale-0 rounded-md bg-white py-1 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 duration-200 focus:outline-none group-focus-within/profile:scale-100 group-focus-within/profile:opacity-100">
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Your Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {!closed && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {routes.map((route) => (
              <a
                href={route.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {route.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;