"use client";
import { IPostData } from "@/types/postType";
import {useEffect, useState} from "react";

export const usePostData = () => {
    const [postData, setPostData] = useState<IPostData[]>([{
        title: "string",
        previewImage: {
            url: "string",
            size: {
                height: 100,
                width: 100,
            }
        },
        description: "string",
        types: ["news", "categories"],
        redirect: "/",
        timePost: "string",
        author: "string",
    }]);

    useEffect(() => {
        fetch("/api/v1/post")
            .then(response => response.json())
            .then(data => {
                setPostData(data);
                // console.log(data)
            });
    }, []);
    return {postData, setPostData};
}