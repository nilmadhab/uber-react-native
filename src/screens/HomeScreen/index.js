import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {styles} from './styles';

import CovidMessage from '../../components/covidMessage'
import covidMessage from '../../components/covidMessage'
import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
    return (
        <View>
            <HomeMap />
            <CovidMessage/>

            <HomeSearch />

        </View>
    )
}

export default HomeScreen;
