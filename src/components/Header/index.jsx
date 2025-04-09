import React, { useState } from "react";
import { Heading, Img, Text } from "./..";
import Link from "next/link";

export default function Header({ ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header {...props}>
      {/* Top black bar - unchanged */}
      <div className="flex justify-center self-stretch bg-black-900 py-[7px]">
        <div className="container-xs flex justify-between gap-5 px-[178px] md:p-5 md:px-5">
          {/* Mobile - single centered item */}
          <div className="hidden sm:flex sm:justify-center sm:w-full">
            <div className="flex items-center gap-2.5">
              <Link href="#">
                <Img
                  src="img_grid.svg"
                  width={16}
                  height={16}
                  alt="grid"
                  className="h-[16px] w-[16px]"
                />
              </Link>
              <Text
                size="xs"
                as="p"
                className="self-end tracking-[1.00px] !text-pink-400"
              >
                Lorem ipsum dolor
              </Text>
            </div>
          </div>
          
          {/* Desktop - three items - unchanged */}
          <div className="flex items-center gap-2.5 sm:hidden">
            <Link href="#">
              <Img
                src="img_grid.svg"
                width={16}
                height={16}
                alt="grid"
                className="h-[16px] w-[16px]"
              />
            </Link>
            <Text
              size="xs"
              as="p"
              className="self-end tracking-[1.00px] !text-pink-400"
            >
              Lorem ipsum dolor
            </Text>
          </div>
          <div className="flex items-center gap-2.5 sm:hidden">
            <Link href="#">
              <Img
                src="img_grid.svg"
                width={16}
                height={16}
                alt="grid"
                className="h-[16px] w-[16px]"
              />
            </Link>
            <Text
              size="xs"
              as="p"
              className="self-end tracking-[1.00px] !text-pink-400"
            >
              Lorem ipsum dolor
            </Text>
          </div>
          <div className="flex items-center gap-2.5 sm:hidden">
            <Link href="#">
              <Img
                src="img_grid.svg"
                width={16}
                height={16}
                alt="grid"
                className="h-[16px] w-[16px]"
              />
            </Link>
            <Text
              size="xs"
              as="p"
              className="self-end tracking-[1.00px] !text-pink-400"
            >
              Lorem ipsum dolor
            </Text>
          </div>
        </div>
      </div>

      {/* Main header section */}
      <div className="flex justify-center self-stretch border-b border-solid border-gray-300 bg-white-A700 py-[25px] sm:py-3">
        <div className="container-xs mt-2.5 flex flex-col items-center gap-[59px] md:p-5 sm:gap-[29px]">
          {/* Header content for both desktop and mobile */}
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col sm:w-full">
            {/* Mobile: Single Line Header - unchanged */}
            <div className="hidden sm:flex sm:w-full sm:items-center sm:justify-between">
              {/* Left - Hamburger + Logo */}
              <div className="flex items-center gap-2">
                <button onClick={toggleMenu} aria-label="Toggle menu">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
                <Img
                  src="img_header_logo.svg"
                  width={30}
                  height={30}
                  alt="headerlogo"
                  className="h-[30px] w-[30px]"
                />
              </div>

              {/* Center - Logo Text */}
              <Text size="lg" as="p" className="!text-gray-900 font-semibold">
                LOGO
              </Text>

              {/* Right - Cart + Login */}
              <div className="flex items-center gap-3">
                <Link href="#">
                  <Img
                    src="img_bag.svg"
                    width={24}
                    height={24}
                    alt="cart"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_lock.svg"
                    width={24}
                    height={24}
                    alt="signup/login"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop: Modified layout */}
            <div className="flex items-center justify-between w-full sm:hidden">
              {/* Left - Logo icon */}
              <div className="flex items-center">
                <Img
                  src="img_header_logo.svg"
                  width={36}
                  height={36}
                  alt="headerlogo"
                  className="h-[36px] w-[36px]"
                />
              </div>

              {/* Center - Logo text */}
              <div className="flex-1 flex justify-center">
                <Text size="2xl" as="p" className="!text-gray-900">
                  LOGO
                </Text>
              </div>

              {/* Right - All icons */}
              <div className="flex items-center gap-5">
                <Link href="#">
                  <Img
                    src="img_contrast.svg"
                    width={24}
                    height={24}
                    alt="contrast"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_favorite.svg"
                    width={24}
                    height={24}
                    alt="favorite"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_bag.svg"
                    width={24}
                    height={24}
                    alt="bag"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_lock.svg"
                    width={24}
                    height={24}
                    alt="lock"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
                <div className="flex items-center gap-[5px]">
                  <Heading size="s" as="h6" className="tracking-[1.00px]">
                    ENG
                  </Heading>
                  <Link href="#">
                    <Img
                      src="img_checkmark.svg"
                      width={16}
                      height={16}
                      alt="checkmark"
                      className="h-[16px] w-[16px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop navigation - unchanged */}
          <ul className="flex flex-wrap gap-[63px] md:gap-5 sm:hidden">
            {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'].map((item) => (
              <li key={item}>
                <Link href="#">
                  <Heading size="lg" as="h5" className="tracking-[1.00px]">
                    {item}
                  </Heading>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile navigation - unchanged */}
          {isMenuOpen && (
            <div className="hidden sm:block w-full">
              <ul className="flex flex-col gap-3 py-2">
                {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'].map((item) => (
                  <li key={item}>
                    <Link href="#" onClick={() => setIsMenuOpen(false)}>
                      <Heading size="lg" as="h5" className="tracking-[1.00px]">
                        {item}
                      </Heading>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}