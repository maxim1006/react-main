import { NavLink } from 'react-router-dom';
import './MainMenu.scss';
import { generateUUID } from '@app/common/utils/generate.utils';

export type MainMenuProps = {
    routes: { to: string; title: string }[];
    exact?: boolean;
};

export default function MainMenu({ routes, exact }: MainMenuProps) {
    if (Array.isArray(routes)) {
        return (
            <ul className='main-menu'>
                {routes.map((route, _index) => {
                    return (
                        <li className='main-menu__item' key={generateUUID()}>
                            {/* тоже что и Link только с возможностью стилизации*/}
                            <NavLink
                                end={!!exact}
                                className={({ isActive }) => ('main-menu__link' + isActive ? ' _active' : '')}
                                to={route.to}
                            >
                                {route.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        );
    }
    return <p>there are no routes for you</p>;
}
