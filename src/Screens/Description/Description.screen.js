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
                <FontAwesomeIcon icon={faArrowLeft} color={'#fff'} size={30} />
            </TouchableOpacity>

            <ScrollView style={[styles.ScreenContainer]}>
                <Image source={{ uri: GetImageUrl(MovieData.backdrop_path) }} style={[styles.Poster]} resizeMode='stretch' />
                <View style={[styles.DescriptionContainer]}>
                    <Text style={[commonStyles.text, commonStyles.boldText, styles.Title]}>{MovieData.original_title}</Text>
                    <View style={[styles.RatingContainer]}>
                        <FontAwesomeIcon icon={faStar} color={'#ffc219'} size={20} />
                        <Text style={[commonStyles.text, commonStyles.LightText, styles.RatingText]}>{MovieData.vote_average}/10 IMDb</Text>
                    </View>
                    <View style={[styles.DescriptionBox]}>
                        <Text style={[commonStyles.text, commonStyles.boldText, styles.DescriptionHeading]}>Description</Text>
                        <Text style={[commonStyles.text, commonStyles.LightText, styles.DescriptionText]}>{MovieData.overview}</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Description