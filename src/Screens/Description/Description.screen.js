import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import commonStyles from '../../Commons/common.styles'
import GetImageUrl from '../../Utils/GetImage';
import styles from './Description.styles';

function Description(props) {
    const MovieData = props.route.params.movie

    const backHandler = () => props.navigation.pop()

    return (
        <>
            <TouchableOpacity style={[styles.backButton]} onPress={backHandler} >
                <FontAwesomeIcon icon={faArrowLeft} color={'#fff'} size={16} />
            </TouchableOpacity>

            <ScrollView style={[styles.ScreenContainer]}>
                <Image source={{ uri: GetImageUrl(MovieData.poster_path) }} style={[styles.Poster]} resizeMode='stretch' height={300} />
                <View style={[styles.DescriptionContainer]}>
                    <Text style={[{fontFamily: 'Mulish-Bold', fontSize: 24, color: '#000000', lineHeight: 25.1, letterSpacing: 0.02}]}>{MovieData.original_title}</Text>
                    <View style={[styles.RatingContainer]}>
                        <FontAwesomeIcon icon={faStar} color={'#ffc219'} size={15} />
                        <Text style={[{ fontFamily: 'Mulish-Regular' , fontSize: 15, fontWeight: '400', color: '#9C9C9C', marginLeft: 4, letterSpacing: 0.02 }]}>{MovieData.vote_average}/10 IMDb</Text>
                    </View>
                    <View style={[styles.DescriptionBox, {marginTop: 28}]}>
                        <Text style={[{fontFamily: 'Mulish-Bold', fontSize: 24, color: '#000000', lineHeight: 25.1, letterSpacing: 0.02}]}>Description</Text>
                        <Text style={[{marginTop: 12}, {fontFamily: 'Mulish-Regular', fontSize: 15, lineHeight: 22, fontWeight: '400', color: '#9C9C9C'}]}>{MovieData.overview}</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Description