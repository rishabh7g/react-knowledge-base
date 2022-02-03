import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loading } from '.';

export default {
  title: 'Reusable/Loading',
  component: Loading,
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const CircleLoading = Template.bind({});
CircleLoading.args = {
  bgColor: 'rgba(0,0,0,0.3)',
  color: '#333',
};
