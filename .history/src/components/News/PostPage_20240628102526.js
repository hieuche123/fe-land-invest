import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import ViewDetail from "./ViewDetail";
import { callFetchBookById } from "../../services/api";

const PostPage = () => {
    const [dataBook, setDataBook] = useState()
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    const id = params?.get('id');

    useEffect(()=>{
        fetchBook(id);
    },[id])

    const fetchBook = async(id) => {
        const res = await callFetchBookById(id);
        if(res && res.data) {
            let raw = res.data;
            raw.items = getImages(raw);

            setDataBook(raw);

            // setTimeout(()=> {
            //     setDataBook(raw);

            // },3000)
        }
    }

    const getImages = (raw) => {
        const images = [];
        if(raw.thumbnail) {
            images.push(
                {
                    original: `${import.meta.env.VITE_BACKEND_URL}/images/book/${raw.thumbnail}`,
                    thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/${raw.thumbnail}`,
                    originalClass: 'original-image',
                    thumbnailClass: 'thumbnail-image',
                }
            )
        }
        if(raw.slider) {
            raw.slider?.map((item)=>{
                images.push(
                    {
                        original: `${import.meta.env.VITE_BACKEND_URL}/images/book/${item}`,
                        thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/${item}`,
                        originalClass: 'original-image',
                        thumbnailClass: 'thumbnail-image',
                    }
                )
            })
        }
        return images;
    }
    console.log('databook',dataBook)
    return(
        <>
            <ViewDetail dataBook={dataBook}/>
        </>
    )
}

export default PostPage;