import { Box } from "@chakra-ui/react";
import { mainColor } from "@theme/theme";
import { useEffect, useState } from "react";


type IconHeaderProps = {
    text?: string
    icon?: any
    colorIcon?: string
    colorText?: string
    children?: any
    onClick?: () => void
};

export const IconHeader: React.FC<IconHeaderProps> = ({
    text,
    icon,
    colorIcon,
    colorText,
    children,
    onClick,
}) => {

    const [active , setActive ] = useState(false)

    return (
        <Box
            onClick={onClick}
            onMouseEnter={()=>setActive(true)}
            onMouseLeave={()=>setActive(false)}
            className="flex flex-col justify-center items-center cursor-pointer mx-3"
            color={colorIcon ? colorIcon : mainColor.orange}
        >
            <Box display='flex'className={`${active && 'icon-animate'}`}>
                {icon}
            </Box>
            {text && <Box className="capitalize mx-2" color={colorText ? colorText : mainColor.white} >{text}</Box>}
            {children}
        </Box>
    );
};

export default IconHeader 