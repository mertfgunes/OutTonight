import Nav from '../components/Nav'

const Home = () => {

    const authToken = true

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <>
        <div className = "home">
            <h1> Swipe Right</h1>
            <button className= "primary-button" onClick={handleClick}>
                {authToken ? 'Sign out' : 'Create an account'}
            </button>
        </div>
        </>
    )
}
export default Home