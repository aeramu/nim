import React from 'react'
import {FlatList} from 'react-native'
import Account from './components/Account'

export default ({data}) => {
    return(
        <FlatList
            data={data}
            ListHeaderComponent={() => (
                data.length > 0 &&
                <Account 
                    nama='Nama'
                    nim='NIM' 
                    jurusan='Jurusan'
                /> 
            )}
            renderItem={({item}) => (
                <Account 
                    nama={item.nama} 
                    nim={item.nimTPB + " " + item.nimJurusan}
                    jurusan={item.fakultas + " " + item.jurusan}
                    status={item.status}
                />
            )}
        />
    )
}