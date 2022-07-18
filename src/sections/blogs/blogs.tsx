import React from 'react'
import Swiper from "react-id-swiper";

import './blogs.scss'
import "swiper/css/swiper.css";

import Title from "../../components/title/title"
import BlogBox from "../../components/blogBox/blogBox"

import Preview01 from "../../assets/blogs/blog1/preview.png";

const blogsFolderPath = "../../assets/blogJsons"

export default function Blogs() {
  let stories = [ 
    {
      image: Preview01,
      id: "1",
      title: "title1",
      description: "description1",
      date: "",
    },
    {
      image: Preview01,
      id: "2",
      title: "title2",
      description: "description2",
      date: "",
    },
    {
      image: Preview01,
      id: "3",
      title: "title3",
      description: "description3",
      date: "",
    }
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
  // let mydata = JSON.parse(blogsFolderPath + "blog1.json");
  // let obj = parseJsonBlog(mydata);

  return (
    <div className="blogs" id="blogs">
      <div className="wrapper">
        <Title title="BLOGS." />
        <p className="font12">
          Subtitle
        </p>
        <div className="padding30">
          <Swiper {...params}>
            {stories && stories.map((story) => (
              <div>
                <BlogBox article={story} />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

function parseJsonBlog(json: JSON) {

}
