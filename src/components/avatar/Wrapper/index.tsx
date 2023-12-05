import {NavbarBrand} from "@nextui-org/react";
import Image from "next/image";
import {Miriam_Libre} from "next/dist/compiled/@next/font/dist/google";
interface AvatarProps {
    avatarUrl: string;
    size?: {
        height: number;
        width: number;
    }
}

export default function Avatar({
    avatarUrl, size
}: AvatarProps) {
    return (
        <NavbarBrand>
            <Image src={avatarUrl} alt={"avatar"}/>
        </NavbarBrand>
    )
}