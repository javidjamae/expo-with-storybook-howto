# Expo with Storybook

[Expo](www.expo.io) is a great tool for building React Native app. [Storybook](storybook.js.org) is a great tool for building and testing view components. This README describes the steps necessary to get these two great tools to work together. This repository contains the final product of running through these steps.

## Create a new Expo project:

```
$ exp init expo-with-storybook-howto
? Choose a template type: blank
[exp] Downloading project files...
[exp] Extracting project files...
[exp] Customizing project...
[exp] Starting project...
[exp] Your project is ready at /blah/expo-with-storybook-howto. Use "exp start /blah/expo-with-storybook-howto" to get started.
```

## Install dependencies
```
$ npm i --save-dev @storybook/react-native exp react-dom@16.0.0-alpha.12 concurrently
$ npm i --save react-native-vector-icons
```

## Add scripts to package.json

```
"scripts": {
  "storybook": "concurrently --kill-others \"storybook start -p 19001\" \"exp start --http\""
},

```

## Make a directory for Storybook

```
$ mkdir storybook
```

## Create Storybook files:

Create a file called [storybook/index.js](storybook/index.js):
```
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
```


Create a new file called [storybook/stories.js](storybook/stories.js):
```
import '../src/components/Button.stories'
```

## Create a component
```
$ mkdir -p src/components
```

In this example, I created [src/components/Button.js](src/components/Button.js)


## Create a story for the component

In this example, I created [src/components/Button.stories.js](src/components/Button.stories.js), which looks like this:

```
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
```

## Move app entry point into src folder

```
$ mv App.js src/index.js
```

## Create a new app entry point

Create a new `/App.js` that looks like this:

```
export default (__DEV__
  ? require('./storybook').default
  : require('./src').defaut);
```

## Start Storybook and the simulator
```
$ npm run storybook
```

Go to [http://localhost:19001/](http://localhost:19001/)

## References
* [Storybook for React Native](https://github.com/storybooks/storybook/tree/master/app/react-native)
* [Storybook for React Native - Manual Setup instructions](https://github.com/storybooks/storybook/blob/master/app/react-native/docs/manual-setup.md)
* [An open-source app that uses Storybook](https://github.com/serlo-org/serlo-abc)
* [Using React Native Storybook 2 with Create React Native App](https://medium.com/@inyono/using-react-native-storybook-with-create-react-native-app-471e531bb128)
* [Storybook for React documentation](https://storybook.js.org/basics/guide-react/)
