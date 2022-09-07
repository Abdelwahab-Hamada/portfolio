import { gql } from '@apollo/client'

const techsQuery=gql`
            query {   
                techs{
                    id
                    name
                    logo
                }
            }
`

export default techsQuery