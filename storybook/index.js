import { getStorybookUI, configure } from '@storybook/react-native'
import React from 'react'
import { NativeModules } from 'react-native'
import url from 'url'

import '@storybook/addon-actions/register'

configure( () => {
  require('./stories')
}, module )

const { hostname } = url.parse( NativeModules.SourceCode.scriptURL )

const StorybookUI = getStorybookUI( { port: 19001, host: hostname } )

export default StorybookUI
