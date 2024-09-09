import { useMediaQuery } from "@react-hook/media-query";

const useResponsive = () => {
    const isSmallScreen = useMediaQuery("only screen and (max-width: 600px)");
    const isMediumScreen = useMediaQuery(
        "only screen and (min-width: 601px) and (max-width: 1024px)"
    );
    const isLargeScreen = useMediaQuery("only screen and (min-width: 1025px)");

    return {
        isSmallScreen,
        isMediumScreen,
        isLargeScreen,
    };
};

export default useResponsive;
