import reactLogo, { ReactComponent as ReactLogoIcon } from './assets/react.svg';
import styles from './app.module.scss';

const tg = window.Telegram.WebApp;

function AppComponent() {
    return (
        <div className={styles.host}>
            <button
                onClick={() => {
                    tg.close();
                }}
                type='button'
            >
                Close
            </button>
        </div>
    );
}

export default AppComponent;
