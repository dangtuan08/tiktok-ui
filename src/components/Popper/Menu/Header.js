import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('header-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
                <h4 className={cx('header-title')}>{title}</h4>
            </button>
        </header>
    );
}

export default Header;
