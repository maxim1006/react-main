### разница между findBy, getBy, queryBy
- getBy - всегда должен найти элемент, если не находим тест падает
- queryBy - можем убедиться что переменная null и элемента нет
- findBy - для асинхронщины (вернет Promise)