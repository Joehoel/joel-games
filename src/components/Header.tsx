import { IconButton } from '@chakra-ui/button';
import { Flex, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import { CgLogOut, CgProfile } from 'react-icons/cg';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function Header() {
  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Snake',
      path: '/snake',
    },
    {
      name: 'Pong',
      path: '/pong',
    },
    {
      name: 'Hangman',
      path: '/hangman',
    },
  ];

  const location = useLocation();

  return (
    <Flex
      w="100%"
      mt="2rem"
      bgColor="california.500"
      color="#fff"
      border="3px solid #32220b"
      boxShadow="3px 3px 0px 0px #32220b"
    >
      <List d="flex">
        {routes.map(({ path, name }) => (
          <ListItem
            key={path}
            borderRight="3px solid #32220b"
            _hover={{ bgColor: 'california.700' }}
            bgColor={location.pathname === path ? 'california.700' : ''}
            transition="150ms all ease"
          >
            <Link to={path}>
              <Text px={6} py={3} fontSize="lg">
                {name}
              </Text>
            </Link>
          </ListItem>
        ))}
      </List>

      <List d="flex" ml="auto" alignItems="center" mr={6}>
        <ListItem mr={3}>
          <IconButton
            aria-label="Profile"
            icon={<CgProfile />}
            bgColor="california.500"
            _hover={{ bgColor: 'california.700' }}
            _active={{ bgColor: 'california.700' }}
            fontSize="3xl"
          >
            Profile
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton
            aria-label="Logout"
            icon={<CgLogOut />}
            bgColor="california.500"
            _hover={{ bgColor: 'california.700' }}
            _active={{ bgColor: 'california.700' }}
            fontSize="3xl"
          >
            Logout
          </IconButton>
        </ListItem>
      </List>
    </Flex>
  );
}
