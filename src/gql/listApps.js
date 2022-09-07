import { gql } from '@apollo/client'

const appsQuery=gql`
            query {   
                apps{
                    id
                    repoLink
                    hostLink
                    appLink
                    name
                    logo
                    descripe
                }
            }
`

export default appsQuery