import {Link, Image} from "@nextui-org/react"
import {Badge, ColorName} from "@/components/Badge";
import {ConvertUnionTypeToArray} from "@/ultis/convertType";
import React from "react";
import {IPostData } from "@/types/postType";


interface PostcardProps extends IPostData {
    props?: any;
    isCompact: boolean;
}

import moment from 'moment';
import 'moment/locale/vi';
import {resolveItunes} from "next/dist/lib/metadata/resolvers/resolve-basics";

// moment().locale('vi');
// const BadgeColors: ColorName[] = ConvertUnionTypeToArray<ColorName>();

const BadgeColors: ColorName[] = ['blue', 'gray', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink']

const CompactPostCard = ({
    author, timePost, description, types
}: {
    author: string;
    timePost: string;
    description: string;
    types: string[];

}) => {
    return (
        <React.Fragment>
            <div className={"font- text-sm dark:text-white light:text-black line-clamp-4"}>
                <p>{description}</p>
            </div>
            <div className={""}>
                <div className={"font-semibold underline text-xs dark:text-white light:text-black"}>
                    <p>{author}{":"}</p>
                </div>
                {/*{" - "}*/}
                {/*Card Time*/}
                <div className={"font-semibold text-xs opacity-50 dark:text-white light:text-black"}>
                    <p>{moment(timePost).locale('vi').format('dddd, DD/MM/YYYY, HH:mm (GMTZ)')}</p>
                </div>
            </div>
            {/*Post Type*/}
            <div className={"flex flex-wrap gap-2"}>
            {types.map((type, index) =>
                <Badge key={"badge-key-"+index} color={BadgeColors[(index)%(BadgeColors.length)]} randomColor={false}>
                    {type}
                </Badge>
            )}
            </div>
        </React.Fragment>
    )
}

export default function PostCard({
isCompact, title, previewImage, description, types, redirect, timePost, author, ...props
}: PostcardProps) {



    return (
       <Link href={redirect} isExternal={true} className={"items-start mb-2"}>
           <div className={"flex flex-row justify-start items-center relative max-w-sm"} {...props}>
               <div className={"flex flex-col justify-center items-start rounded-sm gap-4"}>
                   {/*Card Image*/}
                   <div className={"flex items-center justify-center rounded-md "}>
                       <Image
                           src={previewImage.url}
                           width={previewImage.size.width}
                           height={previewImage.size.height}
                           alt={title}
                           className={"align-middle rounded-md"}
                       />
                   </div>
                   {/*Card Title*/}
                   <div className={"font-semibold text-md dark:text-white light:text-black line-clamp-2"}>
                       <p>{title}</p>
                   </div>
                   {
                       !isCompact ? (<CompactPostCard {...{author, timePost, description, types}}/>) : null
                   }
               </div>
           </div>
       </Link>
    )
}