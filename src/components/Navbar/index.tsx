"use client";

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    Avatar,
    NavbarMenu,
    NavbarMenuItem,
    Link, NavbarMenuToggle
} from "@nextui-org/react";
import NavbarItemComponent from "@/components/Navbar/NavbarItem";
import NavbarDropdownItem from "@/components/Navbar/NavbarDropdown/NavbarDropdownItem";
import NavbarContentComponent from "@/components/Navbar/NavbarContent";
// import Avatar from "@/components/avatar"
import {SearchDefault} from "@/components/Search";
import Logo from "@/components/Logo";
import React, {useState} from "react";
// import Link from "next/link"

interface INavbarProps {
    children?: React.ReactNode
}

export default function NavbarComponent({
    children
}: INavbarProps) {
    const [loginStatus, setLoginStatus] =  useState<boolean>(false);
    // const {loginInfo} = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    let menuItems = [
        "Dashboard",
        "Projects",
        "Team",
        "Calendar",
        "Documents",
        "Reports",
        "Settings",
        "Help",
    ];
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll={true} className={""}>
            <NavbarContent justify={"start"} className={"flex"}>
                <NavbarBrand>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <Logo />
                    <p className="font-bold text-inherit ml-2">ACME</p>
                </NavbarBrand>
            </NavbarContent>
            {children}
            <NavbarContent justify={"center"} className="hidden sm:flex items-center">
                <NavbarItemComponent isActive={true} event={"onClick"} action={()=> {console.log("action 1 active")}}>
                    <Link href={"/dashboard"}>
                        Dashboard
                    </Link>
                </NavbarItemComponent>
                <NavbarItemComponent isActive={true} event={"onClick"} action={()=> {console.log("action 1 active")}}>
                    <Link href={"/dashboard"}>
                        Dashboard
                    </Link>
                </NavbarItemComponent>
                <NavbarItemComponent isActive={true} event={"onClick"} action={()=> {console.log("action 1 active")}}>
                    <Link href={"/dashboard"}>
                        Dashboard
                    </Link>
                </NavbarItemComponent>
            </NavbarContent>
            <NavbarContent justify={"end"} className={"flex align-middle"}>
                <SearchDefault />
                <NavbarContent as="div" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">abcdef@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    )
}