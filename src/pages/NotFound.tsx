import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='center'>
            <h1>404 - Not found</h1>
            <p>The page you are looking for doesn't exist</p>
            <Link className="btn" to="/">Go back to Home</Link>
        </div>
    )
}

export default NotFound