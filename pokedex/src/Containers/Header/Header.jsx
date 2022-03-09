import {Link} from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <header>
        <ul>
            <li>
                <Link to="/">Pokemon List</Link>
            </li>
            <li>
                <Link to="/caught">Caught List</Link>
            </li>
        </ul>
    </header>
  )
}
