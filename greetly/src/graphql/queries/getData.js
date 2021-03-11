import gql from 'graphql-tag';

export default gql`
  query {
    jobs {
      id
      title
      description
      applyUrl
      company {
        id
        name
      }
      userEmail
    }
  }
`