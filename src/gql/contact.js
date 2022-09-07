import { gql } from '@apollo/client'

const contactMutation=gql`
                    mutation ($email:String!,$message:String!){
                        sendEmail(email:$email,message:$message ){
                            success
                        }
                    }
`

export default contactMutation