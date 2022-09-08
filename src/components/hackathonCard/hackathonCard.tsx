import { Row, Col } from "react-flexbox-grid";

import InfoBox from "./bigInfoBox";
import ImageBox from "./hackathonImage";

import "./hackathonCard.scss";

type HackathonProps = {
  hackathon: {
    image: string,
    title: string,
    subTitle: string,
    title2: string,
    subTitle2: string,
    info: string,
    boxFooter: string
  }
}

export default function HackathonCard({ hackathon }: HackathonProps) {
  return (
    <Row className="hackathon-card">
      <Col className="padding0" md={9} lg={7}>
        <ImageBox image={hackathon.image} title="" subTitle="" />
      </Col>
      <Col className="padding0" md={7} lg={5}>
        <InfoBox title={hackathon.title} subTitle={hackathon.subTitle}
          title2={hackathon.title2} subTitle2={hackathon.subTitle2}
          info={hackathon.info} boxFooter={hackathon.boxFooter} />
      </Col>
    </Row>
  )
}