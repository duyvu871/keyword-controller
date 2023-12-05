import React from "react";
import {tw} from "@/ultis/tailwind-ultis";


interface BannerProps {
    children?: React.ReactNode;
    className?: string;
    isShow?: boolean;
    isShowClose?: boolean;
    isFixed?: boolean;
    position?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
}
export function BannerWrapper({
children, isFixed, isShow, isShowClose, className, position
}: BannerProps) {

    const bannerStyle = isFixed ? tw(
        "w-full h-full flex justify-center items-center fixed top-0 left-0 bg-black bg-opacity-50 z-50",
        `top-${position?.top} left-${position?.left} right-${position?.right} bottom-${position?.bottom}`
    ) : tw(
        "w-full h-full flex justify-center items-center bg-black bg-opacity-50"
    );

    const [isShowBanner, setIsShowBanner] = React.useState<boolean>(true);

    const handleClose = () => {
        setIsShowBanner(false);
    }

    React.useEffect(() => {
        const isShowBanner = localStorage.getItem("isShowBanner");
        if (isShowBanner === "false") {
            setIsShowBanner(false);
        }
    }, []);



    return (
        <div className={tw(
            "w-full h-full flex justify-center items-center",
            bannerStyle,
        )}>
            {children}
        </div>
    )
}