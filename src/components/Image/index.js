import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '~/assets/images';

// ES6 đổi tên props fallback thành customFallback và gán mặc định images.noImage nếu không có fallback truyền vào
function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleErr = () => {
        // nếu ảnh bị lỗi sẽ set customFallback để load avatar với ảnh là props fallback truyền vào. Nếu không truyền props fallback thì ảnh sẽ là ảnh mặc định
        setFallback(customFallback);
    };
    return (
        <img
            src={fallback || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            onError={handleErr}
        />
    );
}

export default forwardRef(Image);
