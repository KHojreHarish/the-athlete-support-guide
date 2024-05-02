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
      height={6}
      className={`${roboto.className} drop-shadow-xl bg-[#fff]`}
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

      <NavbarBrand className="hidden md:flex gap-4  xl:ml-[-29%] xl:mr-[20%] ">
        <TaspLogo />
      </NavbarBrand>

      <NavbarContent
        className="hidden md:flex gap-4 sm:gap-8 "
        justify="center"
      >
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-2xl"
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
          <Link color="foreground" href="#" className=" text-2xl">
            Hire Your Support
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: "#FF3F01" }} href="#" className=" text-2xl">
            Share Your Expertise
          </Link>
        </NavbarItem>
        <NavbarItem className=" text-2xl">
          <button>Login Now</button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className=" xl:mr-[-15%] xl:ml-[15%] ">
        <NavbarItem className=" text-2xl">
          <Button
            as={Link}
            style={{ backgroundColor: "#FF3F01", color: "white" }}
            href="#"
            variant="flat"
            startContent={<ProfileIcon />}
            className=" rounded-sm"
          >
            Join Now
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex text-2xl">
          <Link href="#" color="foreground" underline="hover">
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
