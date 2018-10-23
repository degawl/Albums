import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList test={'Test'} />
    </View>
);

AppRegistry.registerComponent('Albums', () => App);
