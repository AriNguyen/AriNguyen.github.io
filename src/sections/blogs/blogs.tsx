import React, { useState } from 'react'
import Swiper from "react-id-swiper";

import './blogs.scss'
import "swiper/css/swiper.css";

import Title from "../../components/title/title"
import BlogBox from "../../components/blogBox/blogBox"
// import Modal from "../../components/contactModal/modal";
import BlogModal from "../../components/blogBox/blogModal";

import Preview01 from "../../assets/blogs/blog1/hoyahacks.jpg";
import Preview02 from "../../assets/blogs/blog2/hackru.jpg";
import Preview03 from "../../assets/blogs/blog3/ai3.jpg";
// declare module '*.md'
// import md from "../../assets/blogs/blog1/blog1.md";

const blogsFolderPath = "../../assets/blogJsons"

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
  const [errorModal, setErrorModal] = useState(false);
  const [currentViewStory, setCurentViewStory] = useState<string | "">("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
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
      date: "August 7th, 2022",
      blogPath: "https://raw.githubusercontent.com/AriNguyen/aringuyen.github.io/master/src/assets/blogs/blog3/blog3.md"
    },
  ];
  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
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
    setErrorModal(false);
  };

  let showSuccessModal = (story: story) => {
    setCurentViewStory(story.blogPath);
    setSuccessModal(true);
    setSending(false);
    // resetForm();
  };

  return (
    <div className="blogs" id="blogs">
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
