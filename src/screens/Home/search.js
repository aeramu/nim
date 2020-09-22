import {gql} from '@apollo/client'

export const SEARCH = gql`
    query($keyword: String!, $first: Int!, $after: ID){
        search(keyword: $keyword, first: $first, after: $after){
            edges{
                id
                nama
                nimTPB
                nimJurusan
                fakultas
                jurusan
                status
            }
            pageInfo{
                endCursor
                hasNextPage
            }
        }
    }
`