import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Component = 'button';

    // Lưu các props để rải làm vào thuộc tính của component
    const props = {
        onClick,
        ...passProps,
    };

    // nếu có to thì component là Link, còn href thì thẻ a
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    //Nếu button có props disabled thì duyệt hết props để loại các sự kiện handle event
    if (disabled) {
        // delete props.onClick
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    // nhận các props là các style của button, tạo class với lên tương ứng props truyền vào để css
    const classNames = cx('wrapper', {
        [className]: className,
        primary: primary,
        text: text,
        outline,
        rounded,
        small,
        disabled,
    });

    return (
        <Component className={classNames} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
