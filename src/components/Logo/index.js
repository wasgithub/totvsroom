import React from 'react'
import { Image } from 'react-native'
import images from '../../assets/images'

const Logo = () => {
    return (
        <Image resizeMode={"center"} source={images.login.logoBlack} style={{width: 200, height: 100}}/>
    )
}

export default Logo;
