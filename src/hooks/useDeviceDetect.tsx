import { useEffect, useState } from 'react';

const mobileMaxWidth = 767;

const useDeviceDetect = (): Boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const width = window.innerWidth;

        setIsMobile(width <= mobileMaxWidth);
    }, []);

    return isMobile;
};

export default useDeviceDetect;
