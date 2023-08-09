import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavItem = ({ icon, children, hoverColor, hoverBg, page, ...rest }) => {
    return (
      <Box as={Link} to={page} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex align="center" p="4" borderRadius="lg"
          role="group" cursor="pointer" _hover={{ bg: hoverBg, color: hoverColor, }} {...rest}>
            {icon && (
                <Icon mr="4" fontSize="20" _groupHover={{ color: 'white', }} as={icon}/>
            )}
            <Text display={{ base: 'none', md: 'none', lg: 'block'}}>
                {children}
            </Text>
        </Flex>
      </Box>
    );
  };

