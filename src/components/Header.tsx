import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import LogoName from "../assets/logoname.svg?react";
import Modal from "react-modal";
import { useState } from "react";
import HoverLink from "./HoverLink";

const customStyles: Modal.Styles = {
  content: {
    position: "fixed",
    left: "auto",
    background: "white",
    maxWidth: "689px",
    height: "100%",
    right: "0",
    marginLeft: "auto",
    inset: "0px",
    borderRadius: "0px",
    transitionProperty: "transform",
    transitionDuration: ".7s",
    transitionTimingFunction: "cubic-bezier(.49,0,.05,1)",
    transform: "translateX(100%)",
  },
};

interface Props {
  classname: string;
  color: string;
  bg: string;
}

function Header({ classname = "", color = "", bg = "" }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleModal = () => {
    if (modalIsOpen) {
      closeModal();
    } else {
      setIsOpen(true);
      setTimeout(() => setIsAnimating(true), 100);
    }
  };

  function closeModal() {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 700);
  }

  return (
    <header>
      <div className="fixed left-0 top-0 w-auto bg-transparent transition-all duration-300 z-[60]">
        <div className=" px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between gap-4 transition-[height] duration-300 ease-in-out h-20 pt-10">
            <div className={`flex flex-wrap justify-start ${classname}`}>
              <Link to="/">
                <div className="flex items-center gap-[7px] text-current transition-colors duration-500">
                  <Logo />
                  <LogoName />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-0 w-auto z-[120] px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
        <div className="h-20 pt-10 relative flex justify-end">
          <button
            onClick={toggleModal}
            className={
              modalIsOpen && isAnimating
                ? `nav-button group text-black`
                : `nav-button group ${classname}`
            }
          >
            <div
              className={
                modalIsOpen && isAnimating
                  ? `menu group-hover:text-white group-hover:scale-[0.7]`
                  : `menu group-hover:scale-[0.7] ${color}`
              }
            >
              <div
                className={
                  modalIsOpen && isAnimating
                    ? "menu-animation text-[inherit] menu-bar group-hover:top-[20px]"
                    : "top-[14px] menu-animation"
                }
              ></div>
              <div
                className={
                  modalIsOpen && isAnimating
                    ? "menu-animation text-[inherit] menu-bar group-hover:top-[20px]"
                    : "top-[24px] menu-animation"
                }
              ></div>
            </div>
            <div
              className={
                modalIsOpen && isAnimating
                  ? `burger-bg group-hover:scale-100 bg-black`
                  : `burger-bg group-hover:scale-100 ${bg}`
              }
            ></div>
          </button>
        </div>
      </div>
      <Modal
        bodyOpenClassName="static overflow-hidden"
        portalClassName="relative z-[100]"
        overlayClassName="fixed inset-0 bg-black/15"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          ...customStyles,
          content: {
            ...customStyles.content,
            transform: isAnimating ? "translateX(0%)" : "translateX(100%)",
          },
        }}
        contentLabel="Modal-menu"
      >
        <div className="h-full px-4 md:px-20 lg:px-40 xl:px-20 xl:pr-[120px]">
          <div className=" flex h-full flex-col gap-14 pt-8 md:gap-20 md:pb-16 md:pt-10 lg:pb-12 xl:justify-between xl:pb-10 xl:pt-14 2xl:pb-20 2xl:pt-20">
            <nav className="flex w-full flex-col gap-y-4 md:gap-y-6 2xl:gap-y-8">
              <span className="text-[#9D9DAD]">Menu</span>
              <ul className="flex w-full flex-col flex-nowrap items-start justify-start gap-y-4 md:gap-y-6">
                <li className="w-full">
                  <Link
                    to="/works"
                    className="underline-hover relative text-black md:text-[32px] text-[24px]"
                  >
                    Works
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/works"
                    className="underline-hover relative text-black md:text-[32px] text-[24px]"
                  >
                    Works
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/works"
                    className="underline-hover relative text-black md:text-[32px] text-[24px]"
                  >
                    Works
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/works"
                    className="underline-hover relative text-black md:text-[32px] text-[24px]"
                  >
                    Works
                  </Link>
                </li>
                <li className="mt-4 w-full md:w-auto 2xl:mt-6">
                  <div className="flex">
                    <HoverLink
                      to="/get-in-touch"
                      bg="bg-black text-white"
                      textcolor="after:text-black"
                    >
                      Get in touch
                    </HoverLink>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Modal>
    </header>
  );
}

export default Header;
