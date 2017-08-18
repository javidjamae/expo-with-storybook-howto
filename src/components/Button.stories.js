import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Button from './Button'

storiesOf('components/Button', module).add('with Text', () =>
  <Button>
    Text
  </Button>
)

storiesOf('components/Button', module).add('with Text2', () =>
  <Button>
    Text2
  </Button>
)
