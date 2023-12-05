"use client";

import React from "react";
import {NavbarItem} from "@nextui-org/react";

interface INavbarDropdownItem {
    children: React.ReactNode;
    props: any;
}

export default function NavbarDropdownItem({children, ...props}: INavbarDropdownItem) {
    return (
        <NavbarItem {...props}>
            {children}
        </NavbarItem>
    )
}