# React Native SVG Avatar

> A React Native package to render SVG avatars with ease.
> Used [dapi-labs/react-nice-avatar](https://github.com/dapi-labs/react-nice-avatar) for SVG and utility functions.

## Installation

Install from npm

```sh
$ npm i rn-svg-avatar
```

Example 1:

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

## Authors

* **Rahul Singh** - [LinkedIn](https://www.linkedin.com/in/singhrahulism/)

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Rahul Singh