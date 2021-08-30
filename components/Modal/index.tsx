import React, { useEffect } from 'react';
import { useInput } from '../../hooks/useInput';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Product, Products } from '../../shared/interface';

interface ModalProps {
  title: string;
  product?: Product;
  toggleShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<Products>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>;
  showModal: boolean;
}

export const EditProductModal: React.FC<ModalProps> = ({
  title,
  product,
  toggleShowModal,
  showModal,
  setProducts,
  setSelectedProduct,
}) => {
  const { value: productTitle, bind: bindTitle, reset: resetTitle } = useInput(
    product?.title
  );
  const { value: price, bind: bindPrice, reset: resetPrice } = useInput(
    product?.price
  );
  const { value: url, bind: bindUrl, reset: resetUrl } = useInput(product?.url);
  const {
    value: description,
    bind: bindDescription,
    reset: resetDescription,
  } = useInput(product?.description);

  const onSubmit = (event, data) => {
    event.preventDefault();
    const product = JSON.stringify(data);
    fetch('http://localhost:3000/api/products', {
      method: 'PUT',
      body: product,
    })
      .then(res => res.json())
      .then(({ data }) => {
        resetTitle();
        setProducts(data);
        toggleShowModal(false);
        setSelectedProduct(null);
      });
  };

  const handleClose = () => {
    resetTitle();
    setSelectedProduct(null);
    toggleShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} id='form'>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={event =>
            onSubmit(event, {
              title: productTitle || product.title,
              url: url || product.url,
              description: description || product.description,
              price: price || product.price,
              ...(product?._id && { _id: product._id }),
            })
          }>
          <Modal.Body>
            <div className='modal-body'>
              <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Example: A Teddy bear'
                  {...bindTitle}
                  defaultValue={product?.title}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Example: 34'
                  {...bindPrice}
                  defaultValue={product?.price}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Image URL</label>
                <input
                  type='url'
                  className='form-control'
                  placeholder='Example: https://images.unsplash.com/photo-1629392554711-1b9aa59f2dbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
                  {...bindUrl}
                  defaultValue={product?.url}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea
                  className='form-control'
                  placeholder='Example: This is a cute teddy bear doll. You will have to fun playing with it!'
                  maxLength={80}
                  {...bindDescription}
                  defaultValue={product?.description}
                  rows={3}></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' type='submit'>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
