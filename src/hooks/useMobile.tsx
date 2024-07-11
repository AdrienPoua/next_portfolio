import { useState, useEffect } from "react";
import { useMediaQuery, Theme } from "@mui/material";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const isMobileQuery = useMediaQuery((theme: Theme) => theme.breakpoints.down(1024));

    useEffect(() => {
        setIsMobile(isMobileQuery);
    }, [isMobileQuery]);

    return isMobile;
};

export default useIsMobile;
