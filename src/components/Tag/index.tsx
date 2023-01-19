import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { mainColor } from "@theme/theme";
import { FC } from 'react'

type TagProps = {
    tag?: string
} & BoxProps

const Tag: FC<TagProps> = ({ tag, children, ...props }) => {


    const renderColor = () => {
        switch (tag) {
            case 'favourite':
                return mainColor.orange
            case 'mall':
                return mainColor.red
            default:
                return ''
        }
    }

    return (
        <Box bg={renderColor()} {...props} color={mainColor.white} textTransform='capitalize'>
            <Flex>
                {children}
            </Flex>
        </Box>
    );
};

export default Tag