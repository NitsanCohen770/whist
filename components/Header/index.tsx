import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { Button } from '../Button';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <>
      <Nav style={{ marginBottom: '3rem' }} variant='tabs' defaultActiveKey='/'>
        <Nav.Item>
          <Link href='/' passHref>
            <Nav.Link onClick={() => console.log('h')}>Home</Nav.Link>
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
      </Nav>
    </>
  );
};
