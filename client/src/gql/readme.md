## Types
type Collection {
    id: ID!
    title: String!
    fieldsEnabled: Boolean!
    num: Int
    chars: Map
    price: Float!
    items: [Item!]! // always [] with Item, when no items will be an empty [] (second ! tells about it)
}





## Queries

### Простой запрос

query {
    payments {
        name
    }
}


### Запрос с параметром
query DroidById($id: ID!) {
  droid(id: $id) {
    name
  }
}

query($id: ID!) {
  collection(id: $id) {
    id,
    title,
    items {
      id,
      name
    }
  }
}

// в вэриаблах в плейграунде
{
  "id": 2
}
