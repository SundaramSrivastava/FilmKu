import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { Keyboard, RefreshControl, Text, View, VirtualizedList } from 'react-native';
import Header from '../../Components/Header/Header.component';
import Input from '../../Components/TextInput/TextInput.component';
import SearchMovies from '../../Utils/SearchMovies';
import GetImageUrl from '../../Utils/GetImage';
import Button from '../../Components/Button/Button.component'
import MovieCard from '../../Components/MovieCard/MovieCard.component';
import styles from './Search.styles';
import commonStyles from '../../Commons/common.styles';
import { DESCRIPTION_SCREEN } from '../screenName';
import { connect } from 'react-redux';

function Search(props) {

    const [Movies, setMovies] = useState(props.Movies.movies)
    const [SearchText, setSearchText] = useState("")
    const [Page, setPage] = useState(1)
    const [ShowLoadMore, setShowLoadMore] = useState(false)
    const [Refresh, setRefresh] = useState(false)

    const getMovies = () => {
        setRefresh(true)
        SearchMovies(SearchText, Page)
        .then(data => {
            setRefresh(false)
            if (data.length>0) {
                setShowLoadMore(true)
                setMovies([...Movies, ...data])  
            } else {
                setShowLoadMore(false)
            }
        })
        .catch(err => {
            setRefresh(false)

            setMovies(props.Movies.movies)
        })
    }

    const handler = useCallback(debounce(getMovies, 1000), [SearchText])
    useEffect(getMovies, [Page])

    const onChangeText = (value) => {
        setSearchText(value)
        setShowLoadMore(false)
        setMovies([])
        setPage(1)
        handler()
    }



  return (
    <>
            <Header />
            <View style={[styles.screenContainer]}>
                <Input placeholder="Search" value={SearchText} onChangeText={onChangeText}  />
                <VirtualizedList
                    scrollsToTop
                    data={Movies}
                    style={{ width: '100%' }}
                    initialNumToRender={7}
                    renderItem={({ item }) => <MovieCard item={item} action={() => {
                        Keyboard.dismiss()
                        props.navigation.push(DESCRIPTION_SCREEN, { movie: item })}
                    } /> }
                    keyExtractor={(item, index) => item.original_title+item.id}
                    getItemCount={data => data?.length}
                    getItem={(data, index) => data[index]}
                    ListFooterComponent={() => <View style={{height: 220}} >
                        {
                            ShowLoadMore ?
                            <Button action={() => {
                                setPage(Page+1)
                                setShowLoadMore(false)
                            }} label={'Load More'}/>
                            :
                            <></>
                        }
                    </View>}
                    refreshControl={
                        <RefreshControl
                          refreshing={Refresh}
                          onRefresh={getMovies}
                        />
                      }
                    scrollEventThrottle={400}
                    ListEmptyComponent={() => <View style={[styles.EmptyText]}><Text style={[commonStyles.text, commonStyles.boldText, commonStyles.textCenter,{fontSize: 25, color: '#00000050',}]}>Type Something to get results</Text></View>}
                />
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