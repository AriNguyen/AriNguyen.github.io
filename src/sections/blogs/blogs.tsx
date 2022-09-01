import React, { useState } from 'react'
import Swiper from "react-id-swiper";

import './blogs.scss'
import "swiper/css/swiper.css";
import { FcNext, FcPrevious } from 'react-icons/fc';

import Title from "../../components/title/title"
import BlogBox from "../../components/blogBox/blogBox"
import BlogModal from "../../components/blogBox/blogModal";

import Preview01 from "../../assets/blogs/blog1/hoyahacks.jpg";
import Preview02 from "../../assets/blogs/blog2/hackru.jpg";
import Preview03 from "../../assets/blogs/blog3/ai5.jpg";
import Preview04 from "../../assets/blogs/blog4/teamDragons.png";
import Preview05 from "../../assets/blogs/blog5/springGBM.jpg"

type story = {
  image: string,
  id: string,
  title: string,
  description: string,
  date: string,
  blogPath: string
}

export default function Blogs() {
  const [successModal, setSuccessModal] = useState(false);
  const [currentViewStory, setCurentViewStory] = useState<string | "">("");
  let stories = [
    {
      image: Preview01,
      id: "1",
      title: "My Story of Attending 14 Hackathons",
      description: "description placeholder",
      date: "July 23rd, 2022",
      blogPath: "https://raw.githubusercontent.com/AriNguyen/aringuyen.github.io/master/src/assets/blogs/blog1/blog1.md"
    },
    {
      image: Preview02,
      id: "2",
      title: "5 Lessons Learned from Attending 14 Hackathons",
      description: "description placeholder",
      date: "August 1st, 2022",
      blogPath: "https://raw.githubusercontent.com/AriNguyen/aringuyen.github.io/master/src/assets/blogs/blog2/blog2.md"
    },
    {
      image: Preview03,
      id: "3",
      title: "My Journey in Artificial Intelligence (So Far)",
      description: "description placeholder",
      date: "August 9th, 2022",
      blogPath: "https://raw.githubusercontent.com/AriNguyen/aringuyen.github.io/master/src/assets/blogs/blog3/blog3.md"
    },
    {
      image: Preview04,
      id: "4",
      title: "Attending Micro Air Vehicle (MAV) Student Challenge ",
      description: "description placeholder",
      date: "August 14th, 2022",
      blogPath: "https://raw.githubusercontent.com/AriNguyen/aringuyen.github.io/master/src/assets/blogs/blog4/blog4.md"
    },
    {
      image: Preview05,
      id: "4",
      title: "Things I Learned From Being the President of A Student Organization",
      description: "description placeholder",
      date: "August 21st, 2022",
      blogPath: "https://raw.githubusercontent.com/AriNguyen/aringuyen.github.io/master/src/assets/blogs/blog5/blog5.md"
    },
  ];
  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
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
    setSuccessModal(false);
  };

  let showSuccessModal = (story: story) => {
    setCurentViewStory(story.blogPath);
    setSuccessModal(true);
    // resetForm();
  };

  return (
    <div className="section-wrapper blogs" id="blogs">
      {successModal &&
        <BlogModal path={currentViewStory} closeModal={closeModal} onKeyDown={closeModal} />
      }
      <div className="wrapper">
        <Title title="BLOGS." />
        {/* <p className="font12">
          Subtitle
        </p> */}
        <div className="padding30">
          <Swiper {...params}>
            {stories && stories.map((story) => (
              <div>
                <BlogBox article={story} onClick={() => showSuccessModal(story)}/>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
