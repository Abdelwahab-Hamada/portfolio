import { gql } from '@apollo/client'

const refsQuery=gql`
            query {   
                refs{
                    id
                    name
                    img
                }
            }
`

export default refsQuery