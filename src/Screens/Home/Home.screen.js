import React, { useEffect, useState } from 'react'
import { Text, View, VirtualizedList } from 'react-native'
import Header from '../../Components/Header/Header.component'
import GetTrendingMovies from '../../Utils/GetTrendingMovies'
import MovieCard from '../../Components/MovieCard/MovieCard.component'
import styles from './Home.styles'
import commonStyles from '../../Commons/common.styles'
import { DESCRIPTION_SCREEN } from '../screenName'

function Home({ navigation }) {

    const [Movies, setMovies] = useState([])

    useEffect(() => {
        GetTrendingMovies()
            .then(data => setMovies(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header />
            <View style={styles.screenContainer}>
                <Text style={[commonStyles.text, commonStyles.boldText, styles.Heading]}>Trending Today</Text>
                <VirtualizedList
                    scrollsToTop
                    data={Movies}
                    style={{ width: '100%' }}
                    initialNumToRender={7}
                    renderItem={({ item }) => <MovieCard item={item} action={() => navigation.push(DESCRIPTION_SCREEN, { movie: item })} /> }
                    keyExtractor={(item, index) => item.id}
                    getItemCount={data => data?.length}
                    getItem={(data, index) => data[index]}
                    ListFooterComponent={() => <View style={{ height: 120 }} />}
                    scrollEventThrottle={400}
                />
            </View>
        </>
    )
}

export default Home