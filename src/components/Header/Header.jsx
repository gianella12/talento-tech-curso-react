import { Nav } from "../Nav/Nav.jsx"
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <>
            <header>
                <Link to='/'>LOGO</Link>
                <Nav />
            </header>
        </>)
} 