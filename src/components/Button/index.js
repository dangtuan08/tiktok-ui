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
    console.log(Component);
    // nhận các props là các style của button, tạo class với lên tương ứng props truyền vào để css
    const classNames = cx('wrapper', {
        primary: primary,
        text: text,
        outline,
    });

    return (
        <Component className={classNames} {...props}>
            {children}
        </Component>
    );
}

export default Button;
