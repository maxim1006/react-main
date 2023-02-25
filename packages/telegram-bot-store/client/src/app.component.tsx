import reactLogo, { ReactComponent as ReactLogoIcon } from './assets/react.svg';
import styles from './app.module.scss';

function AppComponent() {
    return (
        <div className={styles.host}>
            Hello world
            <img src='/vite.svg' alt='Vite logo' />
            <img src={reactLogo} alt='React logo' />
            <ReactLogoIcon />
        </div>
    );
}

export default AppComponent;
