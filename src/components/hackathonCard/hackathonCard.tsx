import { Row } from "react-flexbox-grid";

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
    <Row className="hackathon-card flex-center">
      <div className="hackathon-img flex-center padding0">
          <img className="" src={hackathon.image} />
      </div>

      <div className="big-info-box flex-center white-color-background padding0">
          <div>
            {hackathon.title && <h3 className="font24 weight800">{hackathon.title}</h3>}
            {hackathon.subTitle && <h4 className="font15 weight500">{hackathon.subTitle}</h4>}
            {hackathon.title2 && <h3 className="font24 weight800">{hackathon.title2}</h3>}
            {hackathon.subTitle2 && <h4 className="font15 weight500">{hackathon.subTitle2}</h4>}
            {hackathon.info && <p className="font15 weight500">{hackathon.info}</p>}
            {hackathon.boxFooter && <p className="font15 weight500">{hackathon.boxFooter}</p>}
          </div>
      </div>
    </Row>
  )
}