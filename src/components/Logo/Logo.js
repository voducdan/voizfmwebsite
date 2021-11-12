import logo from "../../images/logo.png"


export default function Logo() {
    return (
        <div>
            <img
                src={logo}
                alt="voizfm logo"
                loading="lazy"
            />
        </div>
    )
}
