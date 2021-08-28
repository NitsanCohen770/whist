import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Product>({
    defaultValues: {
      price: product?.price,
      title: product?.title,
      description: product?.description,
      url: product?.url,
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<Product> = (data, e) => {
    const jsonDATA = JSON.stringify(data);
    fetch('http://localhost:3000/api/products', {
      method: 'PUT',
      body: jsonDATA,
    })
      .then(res => res.json())
      .then(({ data }) => {
        setProducts(data);
        toggleShowModal(false);
        setSelectedProduct(null);
      });
  };

  const handleClose = () => toggleShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className='modal-body'>
              <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input
                  {...register('title')}
                  type='text'
                  className='form-control'
                  placeholder='Example: A Teddy bear'
                  value={product?.title}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input
                  {...register('price')}
                  type='number'
                  className='form-control'
                  placeholder='Example: 34'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Image URL</label>
                <input
                  {...register('url')}
                  type='url'
                  className='form-control'
                  placeholder='Example: https://images.unsplash.com/photo-1629392554711-1b9aa59f2dbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea
                  {...register('description')}
                  className='form-control'
                  placeholder='Example: This is a cute teddy bear doll. You will have to fun playing with it!'
                  maxLength={80}
                  rows={3}></textarea>
                <input
                  {...register('_id')}
                  type='hidden'
                  value={product?._id}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button
              variant='primary'
              type='submit'
              onClick={() => reset({ defaultValues })}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
