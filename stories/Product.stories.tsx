import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Product } from '../components';
import mockImage from '../__mocks__/images/watch.jpg';

export default {
  title: 'Products/Product',
  component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = args => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: mockImage,
  title: 'Fancy Watch',
  description:
    'This is one of the best watches in the world. It will go with you anywhere and guess what? Show you what time it is!',
  price: '55$',
};
