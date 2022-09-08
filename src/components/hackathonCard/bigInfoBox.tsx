import "./bigInfoBox.scss"

type bigInfoBoxProps = {
  title: string;
  subTitle: string;
  title2: string;
  subTitle2: string;
  info: string;
  boxFooter: string;
}

export default function BigInfoBox({ title, subTitle, title2, subTitle2, info, boxFooter }: bigInfoBoxProps) {
  return (
    <div className="big-info-box flex-center black-color-background border-right25">
      <div>
        {title && <h4 className="font24 weight800">{title}</h4>}
        {subTitle && <h3 className="font15 weight500">{subTitle}</h3>}
        {title2 && <h4 className="font24 weight800">{title2}</h4>}
        {subTitle2 && <h3 className="font15 weight500">{subTitle2}</h3>}
        {info && <p className="font15 weight500">{info}</p>}
        {boxFooter && <p className="font15 weight500">{boxFooter}</p>}
      </div>
    </div>
  )
}