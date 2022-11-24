import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, Text, View, VirtualizedList } from 'react-native'
import Header from '../../Components/Header/Header.component'
import GetTrendingMovies from '../../Utils/GetTrendingMovies'
import MovieCard from '../../Components/MovieCard/MovieCard.component'
import styles from './Home.styles'
import commonStyles from '../../Commons/common.styles'
import { DESCRIPTION_SCREEN } from '../screenName'
import { SetTrendingMovies } from '../../Redux/actions/movies.action'
import { connect } from 'react-redux'

function Home(props) {

    const [Movies, setMovies] = useState([])

    useEffect(() => {
        GetTrendingMovies()
            .then(data => {
                setMovies(data)
                props.SetTrendingMovies(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header />
            <View style={styles.screenContainer}>
            <View style={{width: '40%', position: 'absolute', height: '150%', top: 0, zIndex: 0, bottom: 0, backgroundColor: '#F2F2F2'}}/>

            <ScrollView >
                <View style={{marginBottom: 10}}>
                <Text style={[ commonStyles.commonHeadings, { paddingHorizontal: 24 } ]}>Now Showing</Text>
                <VirtualizedList
                    scrollsToTop
                    style={{ paddingHorizontal: 24 }}
                    data={Movies}
                    initialNumToRender={7}
                    renderItem={({ item }) => <MovieCard item={item} action={() => props.navigation.push(DESCRIPTION_SCREEN, { movie: item })} horizontal /> }
                    keyExtractor={(item, index) => item.id}
                    getItemCount={data => data?.length}
                    getItem={(data, index) => data[index]}
                    
                    ListFooterComponent={() => <View style={{ width: 24 }} />}
                    scrollEventThrottle={400}
                    horizontal
                />
                </View>
                <View style={{ paddingHorizontal: 24 }}>
                <Text style={[ commonStyles.commonHeadings ]}>Popular</Text>
                <VirtualizedList
                scrollEnabled={false}
                    scrollsToTop
                    data={Movies}
                    // ListHeaderComponent={<Text style={[ commonStyles.commonHeadings ]}>Popular</Text>}
                    style={{ width: '100%' }}
                    initialNumToRender={7}
                    renderItem={({ item }) => <MovieCard item={item} action={() => props.navigation.push(DESCRIPTION_SCREEN, { movie: item })} /> }
                    keyExtractor={(item, index) => item.id}
                    getItemCount={data => data?.length}
                    getItem={(data, index) => data[index]}
                    ListFooterComponent={() => <View style={{ height: 120 }} />}
                    scrollEventThrottle={400}
                />
                </View>
            </ScrollView>
            </View>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        SetTrendingMovies: (Movies) => dispatch(SetTrendingMovies(Movies))
    };
};

export default connect(null, mapDispatchToProps)(Home)