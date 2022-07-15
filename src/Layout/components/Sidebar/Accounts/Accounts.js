import React from 'react';
import PropTypes from 'prop-types';
import SuggestedAccount from './SuggestedAccount';
import styles from './Accounts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const data = [
    {
        id: 2,
        first_name: 'Đào Lê',
        last_name: 'Phương Hoa',
        full_name: 'Đào Lê Phương Hoa',
        nickname: 'hoaahanassii',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
        bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
        tick: true,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:10:05',
        updated_at: '2022-05-05 16:11:39',
    },
    {
        id: 4,
        first_name: 'Le',
        last_name: 'Bong',
        full_name: 'Le Bong',
        nickname: 'lebong95',
        avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
        bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
        tick: false,
        followings_count: 0,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://fullstack.edu.vn/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:14:57',
        updated_at: '2022-05-05 16:15:53',
    },
];

const Accounts = ({ title, btnTitle = 'see all' }) => {
    return (
        <div className={cx('userContainer')}>
            <p className={cx('title')}>{title}</p>
            {data.map((item, index) => {
                return <SuggestedAccount key={item.id} data={item} />;
            })}
            <p className={cx('more-btn')}>{btnTitle}</p>
        </div>
    );
};

Accounts.propTypes = {
    title: PropTypes.string.isRequired,
    btnTitle: PropTypes.string,
};

export default Accounts;
