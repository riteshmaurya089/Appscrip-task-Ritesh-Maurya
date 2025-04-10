import React, { useState } from "react";
import { Text, Heading, Img, Button, Input } from "./..";
import Link from "next/link";

export default function Footer({ ...props }) {
  const [showMettaLinks, setShowMettaLinks] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showFollowUs, setShowFollowUs] = useState(false);

  const toggleMettaLinks = () => setShowMettaLinks(!showMettaLinks);
  const toggleQuickLinks = () => setShowQuickLinks(!showQuickLinks);
  const toggleFollowUs = () => setShowFollowUs(!showFollowUs);

  return (
    <footer {...props} className="w-full bg-gray-900">
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col items-center gap-10 py-12 md:w-full md:px-5">
        {/* Newsletter Section - Hidden on Mobile */}
        <div className="flex w-full flex-col items-start gap-6 sm:hidden">
          <Heading size="lg" as="h5" className="uppercase !text-white-A700">
            Be the first to know
          </Heading>
          <Text size="md" as="p" className="!text-white-A700">
          Sign up for updates from mettā muse.
          </Text>
          <div className="flex w-full items-center gap-4">
            <Input
              shape="square"
              name="email"
              placeholder="Enter your e-mail..."
              className="w-full"
            />
            <Button
              shape="round"
              className="min-w-[184px] border border-solid border-white-A700_75 font-medium"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Divider - Hidden on Mobile */}
        <div className="h-px w-full bg-white-A700 opacity-20 sm:hidden" />

        {/* Mobile Only: Call Us & Currency (shown above mettā muse) */}
        <div className="hidden w-full flex-col gap-6 sm:flex">
          {/* Call Us (mobile only) */}
          <div className="flex flex-col gap-3">
            <Heading size="lg" as="h5" className="uppercase !text-white-A700">
              Call Us
            </Heading>
            <Link href="tel:+442211335360">
              <Text size="md" as="p" className="!text-white-A700 hover:opacity-80">
                +44 221 133 5360
              </Text>
            </Link>
            <Link href="mailto:customercare@mettamuse.com">
              <Text size="md" as="p" className="!text-white-A700 hover:opacity-80">
                customercare@mettamuse.com
              </Text>
            </Link>
          </div>

          {/* Currency (mobile only) */}
          <div className="flex flex-col gap-3">
            <Heading size="lg" as="h5" className="uppercase !text-white-A700">
              Currency
            </Heading>
            <Text size="s" as="h6" className="!text-white-A700">
              USD
            </Text>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex w-full flex-wrap justify-between gap-8 md:flex-col">
          {/* mettā muse Links */}
          <div className="flex w-[30%] min-w-[200px] flex-col gap-4 md:w-full">
            <div 
              className="flex items-center justify-between cursor-pointer sm:border-b sm:border-white-A700 sm:border-opacity-20 sm:pb-4"
              onClick={toggleMettaLinks}
            >
              <Heading size="xl" as="h4" className="!text-white-A700">
                mettā muse
              </Heading>
              <Img
                src={showMettaLinks ? "downlogo.svg" : "downlogo.svg"}
                width={16}
                height={16}
                alt="dropdown"
                className="h-4 w-4"
              />
            </div>
            <div className={`${!showMettaLinks ? 'sm:hidden' : ''} flex flex-col gap-3`}>
              <Link href="#">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  About Us
                </Text>
              </Link>
              <Link href="Stories" target="_blank" rel="noreferrer">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Stories
                </Text>
              </Link>
              <Link href="Artisans" target="_blank" rel="noreferrer">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Artisans
                </Text>
              </Link>
              <Link href="Boutiques" target="_blank" rel="noreferrer">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Boutiques
                </Text>
              </Link>
              <Link href="#">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Contact Us
                </Text>
              </Link>
              <Link href="#">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  EU Compliances Docs
                </Text>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex w-[30%] min-w-[200px] flex-col gap-4 md:w-full">
            <div 
              className="flex items-center justify-between cursor-pointer sm:border-b sm:border-white-A700 sm:border-opacity-20 sm:pb-4"
              onClick={toggleQuickLinks}
            >
              <Heading size="lg" as="h5" className="uppercase !text-white-A700">
                Quick Links
              </Heading>
              <Img
                src={showQuickLinks ? "downlogo.svg" : "downlogo.svg"}
                width={16}
                height={16}
                alt="dropdown"
                className="h-4 w-4"
              />
            </div>
            <div className={`${!showQuickLinks ? 'sm:hidden' : ''} flex flex-col gap-3`}>
              <Link href="#">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Orders & Shipping
                </Text>
              </Link>
              <Link href="Join/Login as a Seller" target="_blank" rel="noreferrer">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Join/Login as a Seller
                </Text>
              </Link>
              <Link href="#">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Payment & Pricing
                </Text>
              </Link>
              <Link href="#">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Return & Refunds
                </Text>
              </Link>
              <Link href="FAQs" target="_blank" rel="noreferrer">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  FAQs
                </Text>
              </Link>
              <Link href="#">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Privacy Policy
                </Text>
              </Link>
              <Link href="#">
                <Text size="lg" as="p" className="!text-white-A700 hover:opacity-80">
                  Terms & Conditions
                </Text>
              </Link>
            </div>
          </div>

          {/* Right Column (Desktop) - Hidden on Mobile */}
          <div className="flex w-[30%] min-w-[200px] flex-col gap-6 md:w-full sm:hidden">
            {/* Contact Us (desktop only) */}
            <div className="flex flex-col gap-4">
              <Heading size="lg" as="h5" className="uppercase !text-white-A700">
                Contact Us
              </Heading>
              <div className="flex flex-col gap-3">
                <Link href="tel:+442211335360">
                  <Text size="md" as="p" className="!text-white-A700 hover:opacity-80">
                    +44 221 133 5360
                  </Text>
                </Link>
                <Link href="mailto:customercare@mettamuse.com">
                  <Text size="md" as="p" className="!text-white-A700 hover:opacity-80">
                    customercare@mettamuse.com
                  </Text>
                </Link>
              </div>
            </div>

            {/* Currency (desktop only) */}
            <div className="flex flex-col gap-3">
              <Heading size="lg" as="h5" className="uppercase !text-white-A700">
                Currency
              </Heading>
              <Text size="s" as="h6" className="!text-white-A700">
                USD
              </Text>
            </div>

            {/* Follow Us (desktop only) */}
            <div className="flex flex-col gap-4">
              <Heading size="lg" as="h5" className="uppercase !text-white-A700">
                Follow Us
              </Heading>
              <div className="flex items-center gap-4">
                <Img
                  src="img_info.svg"
                  width={32}
                  height={32}
                  alt="info"
                  className="h-8 w-8"
                />
                <Img
                  src="img_mdi_linkedin.svg"
                  width={24}
                  height={24}
                  alt="linkedin"
                  className="h-6 w-6"
                />
              </div>
            </div>

            {/* mettā muse Accepts (desktop only) */}
            <div>
              <Heading size="lg" as="h5" className="!text-white-A700">
                <span className="text-white-A700">mettā muse&nbsp;</span>
                <span className="uppercase text-white-A700">Accepts</span>
              </Heading>
            </div>
          </div>

          {/* Mobile Only: Follow Us & Accepts */}
          <div className="hidden w-full flex-col gap-6 sm:flex">
            {/* Follow Us (mobile only) */}
            <div className="flex flex-col gap-4">
              <div 
                className="flex items-center justify-between cursor-pointer border-b border-white-A700 border-opacity-20 pb-4"
                onClick={toggleFollowUs}
              >
                <Heading size="lg" as="h5" className="uppercase !text-white-A700">
                  Follow Us
                </Heading>
                <Img
                  src={showFollowUs ? "downlogo.svg" : "downlogo.svg"}
                  width={16}
                  height={16}
                  alt="dropdown"
                  className="h-4 w-4"
                />
              </div>
              {showFollowUs && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Img
                      src="img_info.svg"
                      width={32}
                      height={32}
                      alt="info"
                      className="h-8 w-8"
                    />
                    <Img
                      src="img_mdi_linkedin.svg"
                      width={24}
                      height={24}
                      alt="linkedin"
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* mettā muse Accepts (mobile only) - Now outside Follow Us dropdown */}
            <div className="mt-4">
              <Heading size="lg" as="h5" className="!text-white-A700">
                <span className="text-white-A700">mettā muse&nbsp;</span>
                <span className="uppercase text-white-A700">Accepts</span>
              </Heading>
            </div>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex gap-2">
          <div className="flex rounded border border-red-50 border-opacity-50 bg-light_blue-800 p-1.5">
            <Img
              src="img_vector.svg"
              width={39}
              height={16}
              alt="payment"
              className="my-1 h-[11px]"
            />
          </div>
          <div className="flex rounded border border-red-50 border-opacity-50 bg-white-A700 p-2">
            <Img
              src="img_settings.svg"
              width={39}
              height={16}
              alt="payment"
              className="h-4"
            />
          </div>
          <div className="flex rounded border border-red-50 border-opacity-50 bg-white-A700 p-2">
            <Img
              src="paypal.svg"
              width={39}
              height={16}
              alt="payment"
              className="h-4"
            />
          </div>
          <div className="flex rounded border border-red-50 border-opacity-50 bg-white-A700 p-2">
            <Img
              src="gpay.svg"
              width={39}
              height={16}
              alt="payment"
              className="h-4"
            />
          </div>

          <div className="flex rounded border border-red-50 border-opacity-50 bg-white-A700 p-2">
            <Img
              src="voda.svg"
              width={39}
              height={16}
              alt="payment"
              className="h-4"
            />
          </div>
          
          <div className="flex rounded border border-red-50 border-opacity-50 bg-deep_purple-A400 p-1.5">
            <Img
              src="img_settings_white_a700.svg"
              width={40}
              height={16}
              alt="payment"
              className="h-4"
            />
          </div>
        </div>

        {/* Copyright */}
        <Text as="p" className="text-center !text-white-A700">
          Copyright © 2023 mettamuse. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}