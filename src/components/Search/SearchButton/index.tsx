import {SearchIconDefault} from "@/components/Search/SearchIcon";
import {Button, Navbar} from "@nextui-org/react";
import React from "react";

interface SearchButtonProps {
    submitSearch: () => void;
    children?: React.ReactNode;
    props?: any;
}

export function SearchButtonDefault({
    submitSearch, children, ...props
}: SearchButtonProps) {
    return (
        <button color={"primary"} onClick={() => {submitSearch()}} {...props} className={"w-fit p-2 rounded-xl bg-blue-600 hover:bg-blue-700"}>
            <SearchIconDefault size={16}/>
            {children}
        </button>
    )
}