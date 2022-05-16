import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Copy, { CopyProps } from '@shared/atoms/Copy'

export default {
  title: 'Component/@shared/atoms/Copy',
  component: Copy
} as ComponentMeta<typeof Copy>

const Template: ComponentStory<typeof Copy> = (args) => <Copy {...args} />

interface Props {
  args: CopyProps
}

export const Default: Props = Template.bind({})
Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam facilisis molestie.'
}
