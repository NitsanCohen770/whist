import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SalesStats } from '../components';

export default {
  title: 'Admin/SalesStats',
  component: SalesStats,
} as ComponentMeta<typeof SalesStats>;

const Template: ComponentStory<typeof SalesStats> = args => (
  <SalesStats {...args} />
);

export const TopFive = Template.bind({});
TopFive.args = {
  title: 'Top 5 Products',
};

export const TopFiveUnique = Template.bind({});
TopFiveUnique.args = {
  title: 'Top 5 Unique Products',
};

export const FiveDaysSales = Template.bind({});
FiveDaysSales.args = {
  title: 'Sales in the past five days',
};
