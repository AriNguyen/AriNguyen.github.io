import Swiper from "react-id-swiper";
import { FcNext, FcPrevious } from 'react-icons/fc';

import Title from "../../components/title/title";
import HackathonCard from "../../components/hackathonCard/hackathonCard";

import hackathons from "./hackathons.json";
import "./hackathon.scss";

export default function Hackathon() {
  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //     clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
    renderPrevButton: () => <FcPrevious className="swiper-button-prev swiper-button-big"></FcPrevious>,
    renderNextButton: () => <FcNext className="swiper-button-next swiper-button-big"></FcNext>,
  };
  return (
    <div id="hackathons" className="section-wrapper main-color-background">
      <div className="wrapper">
        <Title title="Hackathons." />
        <Swiper {...params}>
          {hackathons && hackathons.map((hackathon) => (
            <div>
              <HackathonCard hackathon={hackathon} />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  )
}