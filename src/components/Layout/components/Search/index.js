import React, { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // khi searchValue thay đổi thì sẽ re-render, gọi lại hook useDebounce sau 500ms thì sẽ trả về đúng giá trị searchValue nhận vào
    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleClick = () => {
        setSearchResult([]);
        setSearchValue('');
    };

    // useEffect chỉ chạy khi nhận đc debouncedValue thay đổi. Mỗi lần thay đổi sẽ delay 500ms nên api không gọi liên tục mà 500ms mới gọi 1 lần
    useEffect(() => {
        //Kiểm tra rỗng và chỉ nhập khoảng trắng
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        // setLoading để hiện nút spiner trong khi chờ api
        setLoading(true);

        // C1: dùng async await thay vì promise.then().catch()

        // const fetchApi = async () => {
        //     const res = await searchServices.search(debouncedValue);
        //     // console.log(res);
        //     setSearchResult(res);
        //     setLoading(false);
        // };
        // fetchApi();

        // C2: dùng promise.then().catch()
        searchServices
            .search(debouncedValue)
            .then((res) => {
                setSearchResult(res);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, [debouncedValue]);

    // Nếu ấn nút xóa thì setSearchValue = '', setSearchResult = [] và focus lại ô input
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const valueSearch = e.target.value;
        // Không cho nhập kí tự đầu tiên là space trong ô tìm kiếm
        if (!valueSearch.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    return (
        <HeadlessTippy
            interactive
            // trigger={'click'}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((item) => {
                            return <AccountItem data={item} key={item.id} onClick={handleClick} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {!loading && !!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button> */}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => {
                        // Hủy thuộc tính mặc định để khi click không hiện border div search, và bỏ focus ô input
                        e.preventDefault();
                        inputRef.current.blur();
                    }}
                >
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
