"use client";

import React from "react";
import {NavbarContent} from "@nextui-org/react";
import {tw} from "@/ultis/tailwind-ultis"
import {isMobile, isMobileTablet} from "@/ultis/checkDevice";

interface INavbarDropdown {
    children: React.ReactNode;
    isMobile: boolean;
    props: any;
}

const styleType = {
    "mobile": "flex gap-4"
}

export default function NavbarDropdown({
    children, props
}: INavbarDropdown) {
    let currentStyle = styleType["mobile"];

    return (
        <NavbarDropdown {...props} className={tw(
            "hidden",
            currentStyle
        )}>
            {children}
        </NavbarDropdown>
    )
}