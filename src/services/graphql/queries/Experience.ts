import { gql } from "graphql-request";

const q_VisualBuilderQuery = gql`
  query getExperience($key: String, $ver: String, $loc: [Locales]) {
    _Experience(
      locale: $loc
      where: {
        _metadata: { key: { eq: $key } }
        _or: { _metadata: { version: { eq: $ver } } }
      }
    ) {
      items {
        _metadata {
          key
          version
          url {
            default
          }
        }
        composition {
          grids: nodes {
            key
            displayName
            displaySettings {
              ...DisplaySettings
            }
            ... on CompositionStructureNode {
              key
              rows: nodes {
                ... on CompositionStructureNode {
                  key
                  displaySettings {
                    ...DisplaySettings
                  }
                  columns: nodes {
                    ... on CompositionStructureNode {
                      key
                      displaySettings {
                        ...DisplaySettings
                      }
                      elements: nodes {
                        ... on CompositionElementNode {
                          key
                          displaySettings {
                            ...DisplaySettings
                          }
                          element {
                            _metadata {
                              types
                            }
                            ...HeadingElement
                            ...ImageElement
                            ...CTAElement
                            ...VideoElement
                            ...ParagraphElement
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fragment DisplaySettings on CompositionDisplaySetting {
    key
    value
  }
`;

// lol
