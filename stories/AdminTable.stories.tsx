import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AdminTable } from '../components';
import mockData from '../__mocks__/data/MOCK_DATA.json';

export default {
  title: 'Admin/AdminTable',
  component: AdminTable,
} as ComponentMeta<typeof AdminTable>;

const Template: ComponentStory<typeof AdminTable> = args => (
  <AdminTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  products: mockData,
};
