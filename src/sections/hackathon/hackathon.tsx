import { Row, Col } from "react-flexbox-grid";
import Swiper from "react-id-swiper";
import { FcNext, FcPrevious } from 'react-icons/fc';

import Title from "../../components/title/title";
import InfoBox from "../../components/infoBox/info-box";
import ImageBox from "../../components/imageBox/image-box";

import Photo1 from "../../assets/blogs/blog1/hackru.jpg"
import Photo2 from "../../assets/blogs/blog1/hackpsu.jpg"
import Photo3 from "../../assets/blogs/blog1/dragonhacks.jpg"
import Photo4 from "../../assets/projects/project4/preview.jpg"

import "./hackathon.scss";

export default function Hackathon() {
    let hackathons = [
        {}
    ];
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
                                    <ImageBox image={Photo1} title="" subTitle="" />
                                </Col>
                                <Col md={8} lg={6}>
                                    <InfoBox title='1st Place Winner - Social Good Track'
                                        subTitle='HackRU Fall 2019 | Rutgers University'
                                        title2='' subTitle2=''
                                        info='asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd
                        asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd'
                                        boxFooter='' />
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Swiper>
                {/* <Row>
                    <Col md={8} lg={6}>
                        <ImageBox image={Photo1} title="Ari Nguyen" subTitle="Web designer" />
                    </Col>
                    <Col md={8} lg={6}>
                        <InfoBox title='1st Place Winner - Social Good Track' 
                        subTitle='HackRU Fall 2019 | Rutgers University'
                        title2='' subTitle2=''
                        info='asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd
                        asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd' 
                        boxFooter='' />
                    </Col>
                </Row>

                <Row>
                    <Col md={8} lg={6}>
                        <ImageBox image={Photo2} title="Ari Nguyen" subTitle="Web designer" />
                    </Col>
                    <Col md={8} lg={6}>
                        <InfoBox title='Best Use of an Internet of Things Device' 
                        subTitle='HackPSU Fall 2019 | Penn State University' 
                        title2='' subTitle2=''
                        info='asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd
                        asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd' 
                        boxFooter='' />
                    </Col>
                </Row>

                <Row>
                    <Col md={8} lg={6}>
                        <ImageBox image={Photo3} title="Ari Nguyen" subTitle="Web designer" />
                    </Col>
                    <Col md={8} lg={6}>
                        <InfoBox title='The Benefits and Costs of Going Digital (Boomi, a Dell Technologies business)'
                        subTitle='Philly Codefest 2020'
                        title2='The Wolfram Award' subTitle2='DeltaX Hacks'
                        info='asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd
                        asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd' 
                        boxFooter='' />
                    </Col>
                </Row>

                <Row>
                    <Col md={8} lg={6}>
                        <ImageBox image={Photo4} title="Ari Nguyen" subTitle="Web designer" />
                    </Col>
                    <Col md={8} lg={6}>
                        <InfoBox title='Winner - 1st Choice Pick'
                        subTitle=''  
                        title2='Best Hack for Social Good' 
                        subTitle2='DragonHacks 2021 | Drexel University'
                        info='asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd
                        asdfadsfasdasdfadsfasdasdfadsfasdasdfadsfasd' 
                        boxFooter='' />
                    </Col>
                </Row> */}
            </div>
        </div>
    )
}