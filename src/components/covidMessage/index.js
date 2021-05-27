import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles';

const CovidMessage = ()=> {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if neccessary</Text>
            <Text style={styles.text}>Invariant Violation: View config getter callback for component `covidMessage` must be a function (received `undefined`). Make sure to start component names with a capital letter</Text>
            <Text style={styles.learnMore}> Learn more</Text>
        </View>
    )
}


export default CovidMessage;