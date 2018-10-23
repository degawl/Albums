import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { 
        thumbnailStyle, 
        headerTextStyle, 
        headerContentStyle, 
        thumbnailContainerStyle, 
        imageStyle,
        cardStyle
    } = styles;

    return (
        <Card>
            <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image 
                    source={{ uri: thumbnail_image }}
                    style={thumbnailStyle}
                />
            </View>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }} 
                />
            </CardSection>
            <CardSection style={cardStyle}>
                <Button onPress={() => console.log(title)} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 350,
        flex: 1,
        width: null
    },
    cardStyle: {
        paddingBottom: 5
    }
};

export default AlbumDetail;
