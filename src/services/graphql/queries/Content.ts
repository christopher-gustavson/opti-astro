import { gql } from "graphql-request";

const q_Content = gql`
  query contentById($key: [String]!, $loc: [Locales]!, $ver: String!) {
    _Content(
      ids: $key
      locale: $loc
      where: { _metadata: { version: { eq: $ver } } }
    ) {
      items {
        _metadata {
          types
        }
      }
    }
  }
`;
