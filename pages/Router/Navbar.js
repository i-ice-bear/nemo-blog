import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { VscChromeClose, VscBell, VscListSelection } from "react-icons/vsc";
import navstyle from "./Navbar.module.scss";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Text } from "@nextui-org/react";
import { FaMoon, FaSun } from "react-icons/fa";
import ContactComponent from "../page/Contact";
import Link from 'next/link';


const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "../page/About",  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarComponent() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <>
      <div className={navstyle.mainnav}>
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <VscChromeClose
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <VscListSelection
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        layout="fill"
                        className="block lg:hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                      <img
                        layout="fill"
                        className="hidden lg:block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link href={item.href} key={item.name}>
                            <Text
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white no-underline"
                                  : "text-gray-800 hover:bg-gray-700 no-underline hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium no-underline"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Text>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="mx-4">
                      <ContactComponent />
                    </div>
                    <Switch
                      iconOn={<FaSun />}
                      iconOff={<FaMoon />}
                      checked={isDark}
                      onChange={(e) =>
                        setTheme(e.target.checked ? "dark" : "light")
                      }
                    />
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-6 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            layout="fill"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-3 w-48 rounded-md shadow-lg py-1 ring-1 ring-blue-300 bg-white ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <h5
                                href="#"
                                className={classNames(
                                  active
                                    ? "cursor-pointer hover:bg-gray-200 no-underline"
                                    : "",
                                  "block px-4 py-2 text-sm  text-gray-700 no-underline"
                                )}
                              >
                                Your Profile
                              </h5>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <h5
                                href="#"
                                className={classNames(
                                  active ? " no-underline cursor-pointer" : "",
                                  "block px-4 py-2 text-sm no-underline hover:bg-gray-200 text-gray-700"
                                )}
                              >
                                Settings
                              </h5>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <h5
                                href="#"
                                className={classNames(
                                  active ? "no-underline cursor-pointer" : "",
                                  "block px-4 py-2 text-sm  no-underline hover:bg-gray-200  text-gray-700"
                                )}
                              >
                                Sign out
                              </h5>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="sm:hidden w-100 h-100">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white no-underline"
                          : "text-gray-800 hover:bg-gray-700 hover:text-white no-underline",
                        "block px-3 py-2 rounded-md text-base font-medium no-underline"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
