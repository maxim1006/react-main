import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

function App() {
    const { keycloak } = useKeycloak();

    // console.log({ keycloak });
    // console.log('user logged in', keycloak.authenticated);

    return (
        <div className='layout'>
            <button
                type='button'
                onClick={() => {
                    void keycloak.login();
                }}
            >
                login
            </button>
            <button
                type='button'
                onClick={() => {
                    void keycloak.logout();
                }}
            >
                logout
            </button>
            <nav>
                <ul>
                    <li>
                        <Link to={`about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`welcome`}>Welcome</Link>
                    </li>
                    <li>
                        <Link to={`protected`}>Protected</Link>
                    </li>
                    <li>
                        <Link to={`custom-login`}>Custom</Link>
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
