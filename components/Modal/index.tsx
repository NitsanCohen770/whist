import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Product } from '../../shared/interface';

interface ModalProps {
  title: string;
  product?: Product;
}

export const EditProductModal: React.FC<ModalProps> = ({ title, product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='modal-body'>
              <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Example: A Teddy bear'
                  value={product?.title || ''}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Example: 34'
                  value={product?.price || 0}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Image URL</label>
                <input
                  type='url'
                  className='form-control'
                  placeholder='Example: https://images.unsplash.com/photo-1629392554711-1b9aa59f2dbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
                  value={product?.url || ''}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea
                  className='form-control'
                  placeholder='Example: This is a cute teddy bear doll. You will have to fun playing with it!'
                  maxLength={80}
                  value={product?.description || ''}
                  rows={3}></textarea>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
