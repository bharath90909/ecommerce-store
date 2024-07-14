import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useSearchParams } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import myContext from "../../context/data/myContext";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  const cartItems = useSelector((store) => store.cart);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/";
  };

  return (
    <div className="bg-white sticky top-0 z-50  ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link
                      to={"/order"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Order
                    </Link>
                  </div>

                  {user?.user?.email === "admin@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User Icon"
                        class="w-10 h-10 rounded-full"
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt="Indian Flag"
                      class="w-10 h-10 mb-6 rounded-full"
                    />
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹300
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Fashion Forward
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <Link
                    to={"/order"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </Link>

                  {user?.user?.email === "admin@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User Icon"
                      class="w-10 h-10 rounded-full"
                    ></img>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
