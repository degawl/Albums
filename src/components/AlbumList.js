import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        console.log('Component will mount albumlist');
    }

    render() {
        return (
            <View>
                <Text>123</Text>
            </View>
        );
    }
}

export default AlbumList;
