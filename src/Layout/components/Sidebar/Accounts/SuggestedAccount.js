import React from 'react';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';

const cx = classNames.bind(styles);

const SuggestedAccount = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
};

SuggestedAccount.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SuggestedAccount;
