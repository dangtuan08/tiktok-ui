import React, { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    // gán phần tử cuối cùng của mảng vào biến current
    let current = history[history.length - 1];

    //render các item trong menu
    const renderItems = () => {
        return current.data.map((item, index) => {
            // duyệt mảng nếu phần tử duyệt đến có children thì xác nhận đây là phẩn tử cha
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        // Kiểm tra khi click nếu là phần tử cha thì gán lại state với phần tử con này được push thêm vào mảng,
                        //  lúc này phần tử cuối cùng là children nên biến current sẽ là children nên khi duyệt sẽ render ra phần tử con này
                        if (isParent) {
                            console.log(item.children);
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
        // return items.map((item, index) => {
        //     return <Button key={index} leftIcon={item.icon}>{item.title}</Button>
        // })
    };

    return (
        <HeadlessTippy
            arrow={true}
            interactive
            // di chuyển vị trí hiển thị Tippy offset={[ sang trái/phải, lên trên/dưới]}
            offset={[16, 8]}
            delay={[0, 800]}
            // visible
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    return setHistory((prev) => {
                                        return prev.slice(0, prev.length - 1);
                                    });
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
