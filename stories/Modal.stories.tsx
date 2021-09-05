import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditProductModal } from '../components';
import { Product } from '../shared/interface';

export default {
  title: 'Products/Modal',
  component: EditProductModal,
} as ComponentMeta<typeof EditProductModal>;

const product: Product = {
  title: 'A Nice Book',
  price: 90,
  url:
    'https://images.unsplash.com/photo-1629392554711-1b9aa59f2dbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
  description: 'This is really a great book. A must read!',
};

const Template: ComponentStory<typeof EditProductModal> = args => (
  <EditProductModal {...args} />
);

export const NewProduct = Template.bind({});
NewProduct.args = {};

export const EditProduct = Template.bind({});
EditProduct.args = {};
