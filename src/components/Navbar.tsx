"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown, ProfileIcon, TaspLogo } from "./icons";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    " Hire Your Support",
    "Share Your Expertise",
    "Login Now",
    " Register",
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBlurred={true}
      height={"4.5rem"}
      maxWidth={"xl"}
      className={`${roboto.className} drop-shadow-xl bg-[#fff] md:max-h-[4rem] lg:max-h-[5rem] `}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <TaspLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex md:gap-5 lg:gap-10 sm:gap-8 "
        justify="start"
      >
        <NavbarBrand className=" h-[3.5rem] w-[8rem] ">
          <TaspLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        justify="center"
        className="hidden md:flex md:gap-5 lg:gap-10 sm:gap-8 "
      >
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent  md:text-[1rem] lg:text-[1.2rem] "
                endContent={<ChevronDown />}
                radius="sm"
                variant="light"
              >
                Explore
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className=" md:text-[1rem] lg:text-[1.2rem]"
          >
            Hire Your Support
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            style={{ color: "#FF3F01" }}
            href="#"
            className=" md:text-[1rem] lg:text-[1.2rem]"
          >
            Share Your Expertise
          </Link>
        </NavbarItem>
        <NavbarItem className=" md:text-[1rem] lg:text-[1.2rem]">
          <button>Login Now</button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className=" ">
        <NavbarItem>
          <Button
            as={Link}
            style={{ backgroundColor: "#FF3F01", color: "white" }}
            href="#"
            size="md"
            variant="flat"
            startContent={<ProfileIcon />}
            className=" rounded-sm md:text-[1rem] lg:text-[1rem]"
          >
            Join Now
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex ">
          <Link
            href="#"
            color="foreground"
            underline="hover"
            className=" text-[1.2rem] "
          >
            Register
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
