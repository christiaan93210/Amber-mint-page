import React, { useState } from "react"
import settings from "../../../config/settings.json"
import { signIn, wallet } from "../../near"
import useLocales from "../../hooks/useLocales"
import Image from "../image"

function signOut() {
  wallet.signOut()
  window.location.replace(window.location.origin + window.location.pathname)
}

export default function Navbar() {
  const { locale } = useLocales()
  const currentUser = wallet.getAccountId()
  if (!locale) return null

  return (
    <nav
      className="navbar py-8 px-10 text-white absolute z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(217,217,217,0) 100%)",
      }}
    >
      <div className="lg:hidden flex-none">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <Image
                  src={settings.bookIcon}
                  alt="whitepaper"
                  className="w-[16px] h-[16px]"
                />
                <span>{locale.whitepaper}</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <Image
                  src={settings.ideaIcon}
                  alt="Tokenomics"
                  className="w-[16px] h-[16px]"
                />
                <span>{locale.tokenomics}</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <Image
                  src={settings.cardIcon}
                  alt="Marketplace"
                  className="w-[16px] h-[16px]"
                />
                <span>{locale.marketplace}</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <Image
                  src={settings.downIcon}
                  alt="Contact Us"
                  className="w-[16px] h-[16px]"
                />
                <span>{locale.contactus}</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <Image
                  src={settings.userIcon}
                  alt="user"
                  className="w-[16px] h-[16px]"
                />
                <span>{locale.profile}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 ml-[1rem] sm:ml-[3rem] lg:ml-[12rem]">
        <a className="w-[80px]" href="#">
          <Image src={settings.logo} alt="logo" />
        </a>
      </div>
      <div className="hidden lg:block flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="#" className="text-white text-xs gap-[0.4rem]">
              <Image
                src={settings.bookIcon}
                alt="whitepaper"
                className="w-[16px] h-[16px]"
              />
              <span>{locale.whitepaper}</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-xs gap-[0.4rem]">
              <Image
                src={settings.ideaIcon}
                alt="Tokenomics"
                className="w-[16px] h-[16px]"
              />
              <span>{locale.tokenomics}</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-xs gap-[0.4rem]">
              <Image
                src={settings.cardIcon}
                alt="Marketplace"
                className="w-[16px] h-[16px]"
              />
              <span>{locale.marketplace}</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-xs gap-[0.4rem]">
              <Image
                src={settings.downIcon}
                alt="Contact Us"
                className="w-[16px] h-[16px]"
              />
              <span>{locale.contactus}</span>
            </a>
          </li>
          <a href="#">
            {!currentUser ? (
              <button
                type="button"
                className="text-white bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:bg-gradient-to-br focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-300"
              >
                {locale.connectWallet}
              </button>
            ) : (
              <Image
                src={settings.userIcon}
                alt="user"
                className="w-[16px] h-[16px]"
              />
            )}
          </a>
        </ul>
      </div>
    </nav>
  )
}
