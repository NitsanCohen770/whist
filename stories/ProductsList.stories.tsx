import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductList } from '../components';
import mockData from '../__mocks__/data/MOCK_DATA.json';

export default {
  title: 'Products/ProductList',
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = args => (
  <ProductList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  products: mockData,
};
