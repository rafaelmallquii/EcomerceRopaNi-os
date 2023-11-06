import React, { useState } from "react";
import Dropdown from "../Dropdown/Index";
import { usePage } from "@inertiajs/react";
// import { IoMdClose } from "react-icons/io";
import CarritoModal from "../CarritoModal/Index";
import { Link } from "@inertiajs/react";
import Cart from "../Cart/Idex";
import { PageProps } from "@/types";

interface SubMenuItem {
    name: string;
    url: string;
  }
  
  interface MenuItem {
    name: string;
    subMenu: SubMenuItem[];
  }
  
const menu:MenuItem[] = [
    {
        name: "Inicio",
        subMenu: [
            {
                name: "Submenu 1",
                url: "#",
            },
            {
                name: "Submenu 2",
                url: "#",
            },
            {
                name: "Submenu 3",
                url: "#",
            },
        ],
    },
    {
        name: "Tienda",
        subMenu: [
            {
                name: "Submenu 1",
                url: "#",
            },
            {
                name: "Submenu 2",
                url: "#",
            },
            {
                name: "Submenu 3",
                url: "#",
            },
        ],
    },
    {
        name: "Blog",
        subMenu: [
            {
                name: "Submenu 1",
                url: "#",
            },
            {
                name: "Submenu 2",
                url: "#",
            },
            {
                name: "Submenu 3",
                url: "#",
            },
        ],
    },
    {
        name: "Contact",
        subMenu: [
            {
                name: "Submenu 1",
                url: "#",
            },
            {
                name: "Submenu 2",
                url: "#",
            },
            {
                name: "Submenu 3",
                url: "#",
            },
        ],
    },
    {
        name: "Carrito",
        subMenu: [
            {
                name: "Submenu 1",
                url: "#",
            },
            {
                name: "Submenu 2",
                url: "#",
            },
            {
                name: "Submenu 3",
                url: "#",
            },
        ],
    },
    {
        name: "Usuario",
        subMenu: [
            {
                name: "Submenu 1",
                url: "#",
            },
            {
                name: "Submenu 2",
                url: "#",
            },
            {
                name: "Submenu 3",
                url: "#",
            },
        ],
    },
];


export default function NavBar() {
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const { auth }= usePage<PageProps>().props;
    const [openModal, setOpenModal] = useState(false);
    function openCartModal() {
        setCartModalOpen(true);
    }
    return (
        <nav className="bg-white shadow dark:bg-slate-400 text-xl px-5 sticky top-0">
            <div className=" flex items-center max-lg:hidden justify-between">
                <div>
                    <Link href={route("Home")}>
                        <img
                            src="https://kidhippo-theme.myshopify.com/cdn/shop/files/Group_1_2fae097b-40d8-4833-97fd-546f02cf84fb_250x@2x.png?v=1648727142"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div>
                    <ul className="flex gap-8  ">
                        {menu.map((item, index) => (
                            <li
                                key={index}
                                className="text-gray-700 dark:text-white  transition duration-500 ease-in-out hover:text-gray-500"
                            >
                                <Dropdown>
                                    <a href="#">{item.name}</a>
                                    <ul className="">
                                        {item.subMenu.map(
                                            (subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="text-gray-700 p-2 hover:text-white dark:text-black w-full hover:bg-slate-500 transition duration-500 ease-in-out "
                                                >
                                                    <a href={subItem.url}>
                                                        {subItem.name}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </Dropdown>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li className="text-gray-700 dark:text-white transition duration-500 ease-in-out hover:text-gray-500 cursor-pointer">
                            {cartModalOpen && (
                                <CarritoModal
                                    blur={true}
                                    right
                                    isOpenModal={cartModalOpen}
                                    setIsOpenModal={setCartModalOpen} // Aquí debes pasar la función setCartModalOpen, no el estado cartModalOpen
                                >
                                    <div className="h-full bg-white">
                                        <h1>Modal</h1>
                                        <Cart />
                                    </div>
                                </CarritoModal>
                            )}
                            <a href="#" onClick={() => setCartModalOpen(true)}>
                                {" "}
                                {/* Aquí debes cambiar el estado del modal a true cuando se haga clic en el enlace */}
                                <img
                                    src="/icons/bolsa.svg"
                                    alt="iamgen"
                                    className=" h-8  "
                                />
                            </a>
                        </li>

                        <li className="text-gray-700 dark:text-white transition duration-500 ease-in-out hover:text-gray-500">
                            {auth.user ? (
                                <Dropdown>
                                    <a href="#">
                                        <img
                                            src="/icons/user.svg"
                                            alt="iamgen"
                                            className=" h-8  "
                                        />
                                    </a>
                                    <ul className="">
                                        <li className="text-gray-700 p-2 hover:text-white dark:text-black w-full hover:bg-slate-500 transition duration-500 ease-in-out ">
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                            >
                                                Cerrar sesión
                                            </Link>
                                        </li>
                                    </ul>
                                </Dropdown>
                            ) : (
                                <a href={route("login")}>Iniciar sesión</a>
                            )}

                            {/* <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink> */}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lg:hidden ">
                <CarritoModal
                    isOpenModal={openModal}
                    setIsOpenModal={setOpenModal}
                >
                    <h1>Modal</h1>
                    <div onClick={() => setOpenModal(false)}></div>
                </CarritoModal>

                <div className="flex px-4 py-[12px] justify-between ">
                    <div className="flex gap-4">
                        <button onClick={() => setOpenModal(true)} className="">
                            <img
                                src="/icons/hamburguesa.svg"
                                alt="boton"
                                className="h-[30px] w-[24px]"
                            />
                        </button>

                        <img
                            src="/img/logorafa1.svg"
                            alt="iamgen"
                            className=" h-11 pt-2 mt-3 "
                        />
                    </div>
                    <ul className="mt-5 flex gap-6  text-[#000000] ">
                        <li className="">
                            <button>
                                <img
                                    src="/icons/user.svg"
                                    alt="user"
                                    className="h-6 "
                                />
                            </button>
                        </li>
                        <li>
                            <button>
                                <img
                                    src="/icons/corazon.svg"
                                    alt="user"
                                    className="h-6 "
                                />
                            </button>
                        </li>
                        <li>
                            <button>
                                <img
                                    src="/icons/bolsa.svg"
                                    alt="user"
                                    className="h-6 "
                                />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
