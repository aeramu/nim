import React from 'react'
import {FlatList} from 'react-native'
import Account from './components/Account'

export default ({data}) => {

    return(
        <FlatList
            data={data}
            renderItem={({item}) => (
                <Account 
                    nama={item.nama} 
                    nimTPB={item.nimTPB} 
                    nimJurusan={item.nimJurusan}
                    fakultas={item.fakultas}
                    jurusan={item.jurusan}
                    status={item.status}
                />
            )}
        />
    )
}