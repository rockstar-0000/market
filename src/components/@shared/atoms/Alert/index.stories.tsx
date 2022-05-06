import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Alert from '@shared/atoms/Alert'

export default {
  title: 'Component/@shared/atoms/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

interface Props {
  args: {
    text: string
    state: string
  }
}

export const Primary: Props = Template.bind({})
Primary.args = {
  text: 'Alert text',
  state: 'info'
}