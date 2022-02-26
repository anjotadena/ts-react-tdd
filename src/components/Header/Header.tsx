
type HeaderProps = {
}

// const defaultProps = {
//     label: "Button Label"
// }

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <nav className="py-3 border-bottom navbar navbar-expand navbar-light">
            <div>
                <div data-testid="logo">LOGO</div>
                <div data-testid="search">Search</div>
                <div data-testid="menu">Search</div>
            </div>
            <div data-testid="home-type">
                <button>Home filter</button>
            </div>
        </nav>
        
    );
}

export default Header;
