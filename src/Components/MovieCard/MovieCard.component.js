import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import commonStyles from '../../Commons/common.styles'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import GetImageUrl from '../../Utils/GetImage'
import styles from './MovieCard.styles';

function MovieCard({action, item, horizontal}) {
    if(horizontal)  {
        return (
            
            <TouchableOpacity onPress={action} style={[styles.HCardContainer, {marginRight: 16}]}>
                    <Image source={{ uri: GetImageUrl(item.poster_path) }} style={[styles.HPoster]} resizeMode='stretch' height={212} width={143} />
                    <View style={[styles.DetailsContainer]}>
                        <Text style={[{ fontFamily: 'Mulish-Bold', fontSize: 17, fontWeight: '400', color: '#000000', lineHeight: 17.57, flexWrap: 'wrap' }]}>{item.original_title}</Text>
    
                        <View style={[styles.RatingContainer, {marginTop: 8,  alignItems: 'center', maxWidth: 212, flexWrap: 'wrap'}]}>
                            <FontAwesomeIcon icon={faStar} color={'#ffc219'} size={15} />
                            <Text style={[{ fontFamily: 'Mulish-Regular' , fontSize: 15, fontWeight: '400', color: '#9C9C9C', marginLeft: 4 }]}>{item.vote_average}/10 IMDb</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }else{
        return (
            <TouchableOpacity onPress={action} style={[styles.CardContainer,{ flexDirection: 'row' }]}>
                    <Image source={{ uri: GetImageUrl(item.poster_path) }} style={[styles.Poster]} resizeMode='stretch' height={128} width={85} />
                    <View style={[{ marginLeft: 8}]}>
                        <Text style={[{ fontFamily: 'Mulish-Bold', fontSize: 17, fontWeight: '400', color: '#000000', lineHeight: 17.57, flexWrap: 'wrap' }]}>{item.original_title}</Text>
    
                        <View style={[styles.RatingContainer, { alignItems: 'center'}]}>
                            <FontAwesomeIcon icon={faStar} color={'#ffc219'} size={15} />
                            <Text style={[{ fontFamily: 'Mulish-Regular' , fontSize: 15, fontWeight: '400', color: '#9C9C9C', marginLeft: 4 }]}>{item.vote_average}/10 IMDb</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }
}

export default MovieCard