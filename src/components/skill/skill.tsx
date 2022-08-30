import "./skill.scss";

type skillProps = {
    source: string,
    alt: string,
    title: string,
}

export default function Skill(skill: skillProps) {
    return (
        <img src={skill.source} alt={skill.alt} title={skill.title}/>
    )
}
