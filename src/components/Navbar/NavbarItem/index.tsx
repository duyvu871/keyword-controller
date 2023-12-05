"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import React from "react";

interface INavbarItemProps {
    children?: React.ReactNode;
    action?: () => void;
    isActive?: boolean;
    event?: string;
}

export default function NavbarItemComponent({
    children,
    action ,
    isActive,
    event
}: INavbarItemProps): React.ReactNode{

    const eventHandle = {
        [event || "noneEvent"]: action
    }
    return (
        <NavbarItem
            isActive={isActive}
            {
                ...eventHandle
            }
        >
            {children}
        </NavbarItem>
    )
}