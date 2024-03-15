# React Native SVG Avatar

> A React Native package to render SVG avatars with ease.
> Used [dapi-labs/react-nice-avatar](https://github.com/dapi-labs/react-nice-avatar) for SVG and utility functions.

## Installation

Install from npm

```sh
$ npm i rn-svg-avatar
```

## Usage

Example 1:

Will always return a random avatar everytime it renders

```tsx
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Avatar from 'rn-svg-avatar'

const HomeScreen = () => {
    return <View style={styles.container}>
        <Avatar />
    </View>
}

const styles = StyleSheet.create({
    container: {}
})

export default HomeScreen ;

```

Example 2:

Will always return the same avatar for a fixed config (config should be string)

```tsx
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Avatar from 'rn-svg-avatar'

const HomeScreen = () => {
    return <View style={styles.container}>
        <Avatar config={'someString'} />
    </View>
}

const styles = StyleSheet.create({
    container: {}
})

export default HomeScreen ;


```

Example 3:

Can customize avatar's properties like shape, shape.

```tsx
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Avatar from 'rn-svg-avatar'

const HomeScreen = () => {
    return <View style={styles.container}>
        <Avatar config={'someString'} shape={'rounded'} size={160} />
    </View>
}

const styles = StyleSheet.create({
    container: {}
})

export default HomeScreen ;

```

![ExampleImage](https://github.com/singhrahulism/rn-svg-avatar/blob/main/Example/ExampleImage.png)

## Options

| prop | type | default | accept | description |
| --- | --- | --- | --- | --- |
| size | number | 100 | any positive value | changes the height and width of the avatar's root container |
| shape | string | square | 'circle', 'rounded', 'square' | change shape of the avatar's root container' |
| scale | number | 0.8 | a value in the range (0, 1] - excluding 0, including 1 | any numerical value | Scale factor applied to the avatar size. w.r.t to the root container |
| containerStyle | StyleProp<ViewStyle> | {} | React Native View style | Custom styles for the avatar container. |
| bgColor | string | *random | Any valid color string | Background color of the avatar's root container |
| config | string or *this config object | none/random | string or AvatarFullConfig | Configuration for the avatar. |
| logSchema | boolean | false | true/false | Whether to log schema of the avatar to the console |


## Authors

* **Rahul Singh** - [LinkedIn](https://www.linkedin.com/in/singhrahulism/)

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Rahul Singh