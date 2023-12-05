interface IPostData {
    title: string;
    previewImage: {
        url: string;
        size: {
            height: number;
            width: number;
        }
    };
    description: string;
    types: string[];
    redirect: string;
    timePost: string;
    author: string;
}


export type { IPostData };