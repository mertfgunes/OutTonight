import outtonight from '../images/outtonight.png'

const Nav = ({minimal, authToken}) => {


    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? outtonight : minimal} />
            </div>

            {!authToken && minimal && <button className= "nav-button" >Log in</button>}
        </nav>
    )
}
export default Nav