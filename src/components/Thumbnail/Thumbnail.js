
export default function Thumnail(props) {
    return (
        <img
            style={{
                height: 201
            }}
            src={props.avtSrc}
            alt={props.alt}
            loading="lazy"
        />
    )
}