type ProjectGridItemProps = {
    img: string,
    url: string
}

export default function ProjectGridItem({img, url}:  ProjectGridItemProps) {

    return (
        <>
            <li>
                <a href={url} target="_blank">
                    <img src={img} alt=""/>
                </a>
            </li>
        </>
    )
}