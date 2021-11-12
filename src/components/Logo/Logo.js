
import { HEADER_HEIGHT } from "../../utils/constants"

export default function Logo() {
    return (
        <div style={{
            height: HEADER_HEIGHT,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img
                style={{ height: '40px' }}
                src="/images/logo.png"
                alt="voizfm logo"
                loading="lazy"
            />
        </div>
    )
}
