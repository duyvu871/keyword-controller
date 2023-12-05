import Head from "next/head";
import { useState } from "react";
import {IPostData} from "@/types/postType";

interface PostPageProps {
    children?: React.ReactNode
    params: {
        postSlug: string;
    }

}
export default function PostPage({
    params,
}: PostPageProps) {
    const [post, setPost] = useState<IPostData>();

    return (
        <div className={"container mx-auto mb-8"}>
            <Head>
                <meta property="og:image" content={post?.featuredImage?.url || post?.featuredImageUrl || '/bg.jpg'} />

                <meta property="og:title" content={post.title} />

                <meta property="og:description" content={post.description} />

                <meta property="og:image:width" content="1200"/>

                <meta property="og:image:height" content="630"/>
            </Head>
        </div>
    )

}