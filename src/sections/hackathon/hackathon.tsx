import { Row, Col } from "react-flexbox-grid";
import Swiper from "react-id-swiper";
import { FcNext, FcPrevious } from 'react-icons/fc';

import Title from "../../components/title/title";
import InfoBox from "../../components/infoBox/info-box";
import ImageBox from "../../components/imageBox/image-box";

// import Photo1 from "../../assets/blogs/blog1/hackru.jpg"
// import Photo2 from "../../assets/blogs/blog1/hackpsu.jpg"
// import Photo3 from "../../assets/blogs/blog1/dragonhacks.jpg"
// import Photo4 from "../../assets/projects/project4/preview.jpg"
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
    <div id="hackathons" className="section-wrapper white-color-background">
      <div className="wrapper">
        <Title title="Hackathons." />
        <Swiper {...params}>
          {hackathons && hackathons.map((hackathon) => (
            <div>
              {/* <BlogBox article={hackathon} onClick={() => showSuccessModal(hackathon)} /> */}
              <Row>
                <Col md={8} lg={6}>
                  <ImageBox image={hackathon.image} title="" subTitle="" />
                </Col>
                <Col md={8} lg={6}>
                  <InfoBox title={hackathon.title} subTitle={hackathon.subTitle}
                    title2={hackathon.title2} subTitle2={hackathon.subTitle2}
                    info={hackathon.info} boxFooter={hackathon.boxFooter} />
                </Col>
              </Row>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  )
}