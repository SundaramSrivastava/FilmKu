import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import commonStyles from '../../Commons/common.styles'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import GetImageUrl from '../../Utils/GetImage'
import styles from './MovieCard.styles';

function MovieCard({action, item}) {
    return (
        <TouchableOpacity onPress={action} style={[styles.CardContainer,{ flexDirection: 'row' }]}>
                <Image source={{ uri: GetImageUrl(item.poster_path) }} style={[styles.Poster]} />
                <View style={[styles.DetailsContainer]}>
                    <Text style={[commonStyles.text, commonStyles.boldText, styles.Title]}>{item.original_title}</Text>

                    <View style={[styles.RatingContainer]}>
                        <FontAwesomeIcon icon={faStar} color={'#ffc219'} size={15} />
                        <Text style={[commonStyles.text, commonStyles.LightText, styles.Rating]}>{item.vote_average}/10 IMDb</Text>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

export default MovieCard