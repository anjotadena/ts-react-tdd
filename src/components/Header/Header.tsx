
type HeaderProps = {
}

// const defaultProps = {
//     label: "Button Label"
// }

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <nav>
            <div>
                <div data-testid="logo">LOGO</div>
                <div data-testid="search">Search</div>
                <div data-testid="menu">Menu</div>
            </div>
            <div>
                <button data-testid="home-type">Home type</button>
                <button data-testid="dates">Dates</button>
                <button data-testid="guests">Guests</button>
                <button data-testid="price">Price</button>
                <button data-testid="rooms">Rooms</button>
                <button data-testid="amenities">Amenities</button>
            </div>
        </nav>
    );
}

export default Header;
