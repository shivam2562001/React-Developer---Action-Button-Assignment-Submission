import { fn } from '@storybook/test';
import { Button } from './Button';
import {Info} from "@phosphor-icons/react";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'ActionButton',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    type: 'Default',
    status: 'hover',
    onlyIcon: false,
    text: true,
    icon: true,
    SwapIcon:Info,
    size: 'default',
    editText: 'Action',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
export const Neutral = {
  args: {
    type: 'Neutral',
    status: 'hover',
    onlyIcon: false,
    text: true,
    icon: true,
    SwapIcon: Info,
    size: 'default',
    editText: 'Action',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Reverse = {
  args: {
    type: 'Reverse',
    status: 'hover',
    onlyIcon: false,
    text: true,
    icon: true,
    SwapIcon: Info,
    size: 'default',
    editText: 'Action',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

