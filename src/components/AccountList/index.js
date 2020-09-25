import React from 'react'
import {FlatList} from 'react-native'
import Account from './components/Account'
import LoadMore from '../LoadMore'

export default ({data, onPress, loadMore, containerStyle}) => {
    return(
        <FlatList
            style={containerStyle}
            data={data}
            ListHeaderComponent={() => (
                // data.length > 0 &&
                // <Account 
                //     nama='Nama'
                //     nim='NIM' 
                //     jurusan='Jurusan'
                // /> 
                <></>
            )}
            renderItem={({item}) => (
                <Account 
                    nama={item.nama} 
                    nim={item.nimJurusan == "" ? item.nimTPB : item.nimJurusan}
                    jurusan={item.jurusan == "" ? item.fakultas : item.jurusan}
                    status={item.status}
                />
            )}
            ListFooterComponent={() => (
                loadMore
                ? <LoadMore onPress={() => onPress()}/>
                : null
            )}
        />
    )
}