import logo from '../images/logo.svg';

function Header() {
    return(
        <header className="header">
            <div className="header__box">
                <img className="header__logo" src={logo} alt="логотип"></img>
            </div>
        </header>
    );
}

export default Header;