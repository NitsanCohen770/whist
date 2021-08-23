import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  label: 'Danger',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  label: 'Success',
};
