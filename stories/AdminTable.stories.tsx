import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AdminTable } from '../components';

export default {
  title: 'Example/AdminTable',
  component: AdminTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AdminTable>;

const Template: ComponentStory<typeof AdminTable> = args => (
  <AdminTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
