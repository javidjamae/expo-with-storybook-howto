import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Button from './Button'

storiesOf('components/Button', module).add('example', () =>
  <Button>
    Text
  </Button>
)

