"use client";

import React from "react";
import { NavbarContent } from "@nextui-org/react";

interface INavbarContentProps {
    children: React.ReactNode;
    props: any;
}

export default function NavbarContentComponent({
    children, ...props
}: INavbarContentProps): React.ReactNode {
    return (
        <NavbarContent {...props}>
            {children}
        </NavbarContent>
    )
}