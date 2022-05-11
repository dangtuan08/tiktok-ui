import React from 'react'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';


import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss'
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItems = () => {

        return items.map((item, index) => {
            return <Button key={index} leftIcon={item.icon}>{item.title}</Button>
        })

    }

    return (
        <Tippy
            interactive
            delay={[0, 800]}

            // visible
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >

            {children}
        </Tippy>
    )
}

export default Menu