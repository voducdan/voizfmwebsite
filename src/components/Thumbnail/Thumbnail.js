
export default function Thumbnail(props) {
    return (
        <img
            style={{
                ...props.style
            }}
            src={props.avtSrc}
            alt={props.alt}
            loading="lazy"
        />
    )
}