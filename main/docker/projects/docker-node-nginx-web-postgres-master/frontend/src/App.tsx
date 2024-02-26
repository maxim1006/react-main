import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='layout'>
            <nav>
                <ul>
                    <li>
                        <Link to={`about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`welcome`}>Welcome</Link>
                    </li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
