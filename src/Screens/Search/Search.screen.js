import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { Keyboard, RefreshControl, Text, View, VirtualizedList } from 'react-native';
import Header from '../../Components/Header/Header.component';
import Input from '../../Components/TextInput/TextInput.component';
import SearchMovies from '../../Utils/SearchMovies';
import MovieCard from '../../Components/MovieCard/MovieCard.component';
import styles from './Search.styles';
import commonStyles from '../../Commons/common.styles';
import { DESCRIPTION_SCREEN } from '../screenName';
import { connect } from 'react-redux';

function Search(props) {

    const [Movies, setMovies] = useState(props.Movies.movies)
    const [SearchText, setSearchText] = useState("")
    const [Page, setPage] = useState(1)
    const [Refresh, setRefresh] = useState(false)

    const getMovies = () => {
        setRefresh(true)
        if (!Refresh) {
            SearchMovies(SearchText, Page)
                .then(data => {
                    setRefresh(false)
                    if (data.length > 0) {
                        setMovies([...Movies, ...data])
                    } else {
                        if (SearchText === '') {
                            setMovies(props.Movies.movies)
                        }
                    }
                })
                .catch(err => {
                    setRefresh(false)
                    console.log(err);
                    setMovies(props.Movies.movies)
                })
        }
    }

    const handler = () => debounce(getMovies, 1000)
    useEffect(getMovies, [Page, SearchText])

    const onChangeText = (value) => {
        setSearchText(value)
        setMovies([])
        setPage(1)
        handler()
    }



    return (
        <>
            <Header />
            <View style={[styles.screenContainer]}>
                <View style={{ width: '40%', position: 'absolute', height: '150%', top: 0, zIndex: 0, bottom: 0, backgroundColor: '#F2F2F2' }} />
                <View style={{ paddingHorizontal: 24 }}>
                    <Input placeholder="Search" value={SearchText} onChangeText={onChangeText} />

                    <VirtualizedList
                        scrollsToTop
                        data={Movies}
                        style={{ width: '100%' }}
                        // initialNumToRender={100000000000000}//
                        onEndReached={() => {
                            if (!Refresh) {
                                setPage(Page + 1)
                            }
                        }}
                        renderItem={({ item }) => <MovieCard item={item} action={() => {
                            Keyboard.dismiss()
                            props.navigation.push(DESCRIPTION_SCREEN, { movie: item })
                        }
                        } />}
                        keyExtractor={(item, index) => item.original_title + item.id + index}
                        getItemCount={data => data?.length}
                        getItem={(data, index) => data[index]}
                        ListFooterComponent={() => <View style={{ height: 220 }} />}
                        refreshControl={
                            <RefreshControl
                                refreshing={Refresh}
                                onRefresh={getMovies}
                            />
                        }
                        scrollEventThrottle={400}
                        ListEmptyComponent={() => <View style={[styles.EmptyText]}><Text style={[commonStyles.text, commonStyles.boldText, commonStyles.textCenter, { fontSize: 25, color: '#00000050', }]}>Type Something to get results</Text></View>}
                    />
                </View>
            </View>
        </>
    )
}

const mapStateToProps = state => {
    return {
        Movies: state.Movies
    };
};

export default connect(mapStateToProps, null)(Search)