import React from 'react'
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native'

import Face from './Face/Face'
import Eyebrow from './Eyebrow/Eyebrow'
import Ear from './Ear/Ear'
import Eyes from './Eyes/Eyes'
import Glasses from './Glasses/Glasses'
import Hair from './Hair/Hair'
import Hat from './Hat/Hat'
import Mouth from './Mouth/Mouth'
import Nose from './Nose/Nose'
import Shirt from './Shirt/Shirt'
import { AvatarFullConfig } from './types'
import { genConfig } from './utils'

interface AvatarIF {
    size?: number;
    shape?: 'circle' | 'rounded' | 'square';
    borderRadius?: number;
    scale?: number; // range: (0, 1] 
    containerStyle?: StyleProp<ViewStyle> | undefined;
    bgColor?: string;
    config?: string | AvatarFullConfig,
    logSchema?: boolean;
}

const Avatar: React.FC<AvatarIF> = (props) => {
    
    const {
        size=100,
        shape,
        scale=0.8,
        containerStyle,
        bgColor,
        config,
        logSchema
    } = props

    const schema = genConfig(config)

    if(logSchema) {
        console.log("Generated Schema: ", schema)
    }

    const getBorderRadius = () => {
        switch(shape)
        {
            case 'circle':
                return size/2
            case 'rounded':
                return 10
            case 'square':
            default:
                return 0
        }
    }

    const getScale = (): number => {
        if (scale <= 0 || scale > 1) {
            return 0.8
        }
        return scale
    }

    return (
        <View style={[
            styles.avatarRootContainer,
            {
                height: size,
                width: size,
                backgroundColor: bgColor ? bgColor : schema.bgColor,
                overflow: 'hidden',
                borderRadius: getBorderRadius(),
            },
            containerStyle
        ]}>
            <View style={[
                styles.avatarContainer,
                {
                    height: size*getScale(),
                    width: size*getScale()
                }
            ]}>
                {/* Face */}
                <Face
                    color={schema.faceColor}
                />
                {/* Hat or Hair (ONLY ONE) */}
                <Hat
                    color={schema.hatColor}
                    variant={schema.hatStyle}
                />
                {
                    schema.hatStyle === "none"
                    ? (
                        <Hair
                            color={schema.hairColor}
                            variant={schema.hairStyle}
                            colorRandom={schema.hairColorRandom}
                        />
                    ) : null
                }
                {/* Eyebrow */}
                <Eyebrow
                    variant={schema.eyeBrowStyle}
                />
                {/* Eyes */}
                <Eyes
                    variant={schema.eyeStyle}
                />
                {/* Glasses */}
                <Glasses
                    variant={schema.glassesStyle}
                />
                {/* Ear */}
                <Ear
                    variant={schema.earSize}
                    color={schema.faceColor}
                />
                {/* Nose */}
                <Nose
                    variant={schema.noseStyle}
                />
                {/* Mouth */}
                <Mouth
                    variant={schema.mouthStyle}
                />
                {/* Shirt */}
                <Shirt
                    variant={schema.shirtStyle}
                    color={schema.shirtColor}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarRootContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    avatarContainer: {
        bottom: 0,
    }
})

export default Avatar ;
