"use client";

import Image from 'next/image';
import PostCard from "@/components/Post/PostCard";
import {usePostData} from "@/hooks/usePostData";
import {IPostData as PostData } from "@/types/postType";
import {tw} from "@/ultis/tailwind-ultis";
import {BannerWrapper} from "@/components/Banner";

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
            >
                <div className={tw(
                    "flex flex-col justify-center items-center gap-4",
                    "bg-white p-4 rounded-md"
                )}>
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
                </div>
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
