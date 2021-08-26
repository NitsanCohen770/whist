import React from 'react';
import Link from 'next/link';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Nav
        style={{ marginBottom: '3rem' }}
        className='ml-auto'
        variant='tabs'
        defaultActiveKey='/'>
        <Nav.Item>
          <Link href='/' passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
        </Nav.Item>
        <Link href='/admin' passHref>
          <Nav.Link eventKey='link-1'>Admin</Nav.Link>
        </Link>
        <Nav.Item>
          <Link href='/stats' passHref>
            <Nav.Link eventKey='link-2'>Stats</Nav.Link>
          </Link>
        </Nav.Item>

        <NavDropdown
          style={{ marginLeft: 'auto' }}
          title='Link'
          id='navbarScrollingDropdown'>
          <NavDropdown.Item>Action</NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item href='#action5'>
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};
