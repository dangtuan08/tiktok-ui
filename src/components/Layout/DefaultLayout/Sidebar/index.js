import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { CameraIcon, FollowIcon, HomeIcon, MusicIcon, TagIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar-container')}>
                {/* NAV SIDE BAR */}
                <div className={cx('nav-sidebar')}>
                    <a href="#" className={cx('nav-item', 'active')}>
                        <HomeIcon />
                        <h2 className={cx('nav-title')}>For You</h2>
                    </a>
                    <a href="#" className={cx('nav-item')}>
                        <FollowIcon />
                        <h2 className={cx('nav-title')}>Following</h2>
                    </a>
                    <a href="#" className={cx('nav-item')}>
                        <CameraIcon />
                        <h2 className={cx('nav-title')}>LIVE</h2>
                    </a>
                </div>

                {/* FRAME CONTAINER WITH BTN LOGIN */}
                <div className={cx('frame-container')}>
                    <p className={cx('login-hint')}>Log in to follow creators, like videos, and view comments.</p>
                    <Button outline className={cx('login-btn')}>
                        Log in
                    </Button>
                </div>

                {/*  SUGGESTED ACCOUNTS */}
                <div className={cx('user-container')}>
                    <p className={cx('user-title')}>Suggested accounts</p>

                    <div className={cx('user-item')}>
                        <a className={cx('user-link')} href="">
                            <Image
                                src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/82310958_2300873846679486_4416914740521992192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=z_KmyrqcT0gAX8cgOa0&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9Wmn_0uU_MpKkUpzLwamyzZNyVysxwcei4Ow_WiCS9Fg&oe=62B080E1"
                                className={cx('user-avatar')}
                            />
                            <div className={cx('user-info')}>
                                <h4 className={cx('user-nickname')}>adi.syahreza</h4>
                                <p className={cx('user-desc')}>Adi Syahreza</p>
                            </div>
                        </a>
                    </div>

                    <div className={cx('user-item')}>
                        <a className={cx('user-link')} href="">
                            <Image
                                src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/82310958_2300873846679486_4416914740521992192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=z_KmyrqcT0gAX8cgOa0&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9Wmn_0uU_MpKkUpzLwamyzZNyVysxwcei4Ow_WiCS9Fg&oe=62B080E1"
                                className={cx('user-avatar')}
                            />
                            <div className={cx('user-info')}>
                                <h4 className={cx('user-nickname')}>adi.syahreza</h4>
                                <p className={cx('user-desc')}>Adi Syahreza</p>
                            </div>
                        </a>
                    </div>
                    <a href="#" className={cx('more-user')}>
                        See all
                    </a>
                </div>

                {/* DISCOVER */}

                <div className={cx('discover-container')}>
                    <p className={cx('discover-title')}>Discover</p>
                    <div className={cx('discover-list')}>
                        <Button
                            className={cx('discover-item')}
                            titleClassname={cx('discover-text')}
                            href={'/'}
                            rounded
                            leftIcon={<TagIcon />}
                        >
                            genzlife
                        </Button>
                        <Button
                            className={cx('discover-item')}
                            titleClassname={cx('discover-text')}
                            href={'/'}
                            rounded
                            leftIcon={<TagIcon />}
                        >
                            tiktoksoiphim
                        </Button>
                        <Button
                            className={cx('discover-item')}
                            titleClassname={cx('discover-text')}
                            href={'/'}
                            rounded
                            leftIcon={<TagIcon />}
                        >
                            vinawoman
                        </Button>
                        <Button
                            className={cx('discover-item')}
                            titleClassname={cx('discover-text')}
                            href={'/'}
                            rounded
                            leftIcon={<MusicIcon />}
                        >
                            Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n
                        </Button>
                        <Button
                            className={cx('discover-item')}
                            titleClassname={cx('discover-text')}
                            href={'/'}
                            rounded
                            leftIcon={<MusicIcon />}
                        >
                            Thiên Thần Tình Yêu - RICKY STAR
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
