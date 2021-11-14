
export default function Thumnail(props) {
    return (
        <img
            src={props.avtSrc}
            alt={props.alt}
            loading="lazy"
        />
    )
}