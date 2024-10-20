import Nav from '../components/Nav'

const Home = () => {

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div className="overlay">
            <Nav minimal={true} authToken={ authToken } />
            {/*apparently this was a well bug fix for the importing problem...*/}
        <div className = "home">
            <h1> Swipe Right</h1>
            <button className= "primary-button" onClick={handleClick}>
                {authToken ? 'Sign out' : 'Create an account'}
            </button>
        </div>
        </div>
    )
}
export default Home