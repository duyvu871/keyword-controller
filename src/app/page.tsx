"use client";

import Image from 'next/image';
import PostCard from "@/components/Post/PostCard";
import {usePostData} from "@/hooks/usePostData";
import {IPostData as PostData } from "@/types/postType";
import {tw} from "@/ultis/tailwind-ultis";
import {BannerWrapper} from "@/components/Banner";
import Link from "next/link";

import {Redirect_banner_ads} from "@/resources/redirect_banner_ads"
import {randomList} from "@/ultis/random";
import React from "react";

const PostWrapper = ({
postList, isGridLayout, isCompact
}: {
  postList: PostData[];
  isGridLayout: boolean;
  isCompact: boolean;
}) => {
    const wrapperStyle = (
        isGridLayout
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
        : "flex flex-row gap-4 w-fit overflow-x-auto overflow-y-hidden w-full"
    );

    const cardStyle = (
        isGridLayout
        ? ""
        : "w-[200px]"
    );
  return (
    <div className={tw(wrapperStyle)}>
      {postList.map(
          (post, index) =>
              (<PostCard
                  key={"post-card-"+index}
                  {...post}
                  className={tw(cardStyle, "")}
                  isCompact={isCompact}
              />)
      )}
    </div>
  )
}

const BannerGroup = () => {
    const [isShowBanner, setIsShowBanner] = React.useState<boolean>(true);

    const redirectUrl = randomList(Redirect_banner_ads);

    const directToAdsPage = () => {
        setIsShowBanner(false);
        localStorage.setItem("isShowBanner", "false");
        const anchor = document.createElement('a');
        anchor.href = redirectUrl;
        anchor.target="_blank";
        anchor.click();

    }

    return (
        <div className={tw(
            "fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full"
        )}>

            <BannerWrapper
                isFixed={true}
                position={{
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                }}
                isShow={isShowBanner}
                content={"banner 1"}

            >

               {/*<Link href={randomList(Redirect_banner_ads)} target={"_blank"}>*/}

                   <div className={tw(
                       "flex flex-col",
                       "bg-white p-4 rounded-md pt-[5px] px-[5px]"
                   )}>
                       <div className={tw(
                           "flex flex-col items-end mb-1",
                       )}>
                           <p onClick={() => {directToAdsPage()}} className={"cursor-pointer text-end gap-4 text-md text-white font-bold rounded-full bg-black leading-[0.7] p-1 w-fit"}>&times;</p>
                       </div>
                       <Link href={redirectUrl} target={"_blank"}>
                           <Image
                               src={"/bongda1.png"}
                               width={600}
                               height={200}
                               alt={"logo"}
                           />
                           <div className={tw(
                               "flex flex-col justify-center items-center gap-4",
                               "text-center"
                           )}>
                               <h1 className={tw(
                                   "text-2xl text-black font-bold text-center"
                               )}>
                                   Chào mừng bạn đến với trang web của chúng tôi
                               </h1>
                               <h2 className={tw(
                                   "text-lg text-black font-bold text-center"
                               )}>
                                   Chúng tôi sẽ cập nhật những bài đăng mới nhất cho bạn
                               </h2>
                           </div>
                       </Link>
                   </div>
               {/*</Link>*/}
            </BannerWrapper>
        </div>
    )
}

export default function Home() {

  const { postData } = usePostData();
  // console.log(process.cwd());
  return (
      <main className={"flex flex-col justify-center items-start mx-auto px-8 py-4 gap-4 w-full"}>
          <h1 className={"text-2xl font-bold text-start"}>Bài đăng gần đây</h1>
          <PostWrapper postList={postData.slice(0, 10)} isGridLayout={false} isCompact={true}/>
          <h1 className={"text-2xl font-bold text-start"}>Bài đăng phổ biến</h1>
          <PostWrapper postList={postData} isGridLayout={true} isCompact={false}/>
          <BannerGroup/>
      </main>
  )
}
