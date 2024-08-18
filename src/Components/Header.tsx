import DateRange from "./DateRange"
import Meses from "./Meses"

const Header = () => {
    return (
        <div className="mb">
            <div className="mb">
                <DateRange />
            </div>
            <Meses />
        </div>
    )
}

export default Header;