import React, { useState } from 'react'
import Swiper from "react-id-swiper";
import { FcNext, FcPrevious } from 'react-icons/fc';

import './blogs.scss'
import "swiper/css/swiper.css";

import Title from "../../components/title/title"
import BlogBox from "../../components/blogBox/blogBox"
import BlogModal from "../../components/blogBox/blogModal";
import CloseButton from '../../components/closeButton/closeButton';

import stories from "./blogs.json"

type story = {
  image: string,
  id: string,
  title: string,
  description: string,
  date: string,
  blogPath: string
}



export default function Blogs() {
  const [isBlogOnClick, setIsBlogOnClick] = useState(false);
  const [currentViewBlog, setCurentOpenBlog] = useState<string | "">("");

  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    renderPrevButton: () => <FcPrevious className="swiper-button-prev swiper-button-big"></FcPrevious>,
    renderNextButton: () => <FcNext className="swiper-button-next swiper-button-big"></FcNext>,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  let closeModal = () => {
    setIsBlogOnClick(false);
    document.body.style.overflow = "auto";
  };

  let showBlogModal = (story: story) => {
    setCurentOpenBlog(story.blogPath);
    setIsBlogOnClick(true);
    document.body.style.overflow = "hidden"
  };

  return (
    <div className="section-wrapper main-color-background" id="blogs">
      {isBlogOnClick &&
        <>
          <BlogModal path={currentViewBlog} closeModal={closeModal} onKeyDown={closeModal} />
          <CloseButton onClick={closeModal} />
        </>
      }
      <div className="wrapper">
        <Title title="BLOGS." />
        {/* <p className="font12">
          Subtitle
        </p> */}
        <div className="swiper-blog-box padding30">
          <Swiper {...params}>
            {stories && stories.map((story) => (
              <div>
                <BlogBox article={story} onClick={() => showBlogModal(story)} />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
