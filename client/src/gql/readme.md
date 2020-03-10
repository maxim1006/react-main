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
  collections {
    id,
    title,
    items {
      id,
      name
    }
  }
}

### Запрос с параметром
query DroidById($id: ID!) {
  droid(id: $id) {
    name
  }
}

{
  customerAccount(customerId: "9155364650313629862") {
    zipCode
  }
  billingAccount (accountId: "9155364650313629862") {
  	accountBalanceValue
  }
}


