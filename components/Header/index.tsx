import React from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { Nav, NavDropdown } from 'react-bootstrap';
import { orderState } from '../../recoil/atmos/order';
import { Button } from '../Button';
import { useRouter } from 'next/dist/client/router';

interface HeaderProps {
  showModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ showModal }) => {
  const currentRoute = useRouter().pathname;
  const [order, setOrder] = useRecoilState(orderState);
  const totalOrderSum = order
    .map(orderItem => orderItem.quantity * orderItem.product.price)
    .reduce((a, b) => a + b, 0);

  const sendOrderHandler = () => {
    const orderWithDate = {
      order: [...order],
      date: new Date(),
      totalOrderSum,
    };
    const orderData = JSON.stringify(orderWithDate);
    fetch('http://localhost:3000/api/sendOrder', {
      method: 'POST',
      body: orderData,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => setOrder([]));
  };

  const headerButtonHandler = () => {
    if (currentRoute === '/')
      return (
        <NavDropdown
          data-cy='dropdown'
          style={{ marginLeft: 'auto' }}
          title={`Shopping cart  ${order.length}`}
          id='navbarScrollingDropdown'>
          {order.map(orderItem => (
            <NavDropdown.Item
              data-cy='dropdown-item'
              key={orderItem.product._id}>
              {orderItem.product.title}: X{orderItem.quantity}
            </NavDropdown.Item>
          ))}
          <NavDropdown.Divider />
          <div className='d-flex flex-row justify-content-center'>
            Total: ${totalOrderSum}
          </div>
          <NavDropdown.Divider />
          <NavDropdown.Item className='d-flex flex-row justify-content-center'>
            <Button
              clickHandler={sendOrderHandler}
              label='Order Now'
              type='success'
            />
          </NavDropdown.Item>
        </NavDropdown>
      );
    if (currentRoute === '/admin')
      return (
        <div style={{ marginLeft: 'auto' }}>
          <Button
            clickHandler={() => showModal(true)}
            type='success'
            label='New Product'
          />{' '}
        </div>
      );
    if (currentRoute === '/stats') return null;
  };

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
        {headerButtonHandler()}
      </Nav>
    </>
  );
};
