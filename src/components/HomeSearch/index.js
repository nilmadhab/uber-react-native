import React, { Component } from 'react'
import { Text, View } from 'react-native'

import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import styles from './styles'

const HomeSearch = () => {
    return (
        <View>
            {/* input box */}

            <View style={styles.inputBox}>
                <Text style={styles.inputText} >Where to ?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name="clockcircle" size={24} />
                    <Text> Now</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} />
                </View>
            </View>

            {/* previous destination 1:07:25 */}

            {/* home destination */}
        </View>
    )
}

export default HomeSearch;
