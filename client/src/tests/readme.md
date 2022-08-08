### разница между findBy, getBy, queryBy
- getBy - всегда должен найти элемент, если не находим тест падает
- queryBy - можем убедиться что переменная null и элемента нет
- findBy - для асинхронщины (вернет Promise)

#### виды тестов 
#### E2E Tests
tests represent actual user's flows.
**Naming convention:** `*.e2e.ts`
**Examples:**
- Purchase a product with a specific configuration
- Activate SIM card

#### Regression tests
tests for some specific parts of functionality which are tended to be broken from time to time or just have a very complex logic which should be properly tested.
**Naming convention:** `*.regression.ts`
**Examples:**
- Check if prices are calculated correctly
- Check if going back and forth on the checkout page doesn't brake Sales Order handling
- Check if deep links are properly preselecting configuration options

#### Smoke tests
tests which are used to ensure that the portal is up and it's basic features are operational.
**Naming convention:** `*.smoke.ts`
**Examples:**
- Product pages are opening and showing basic marketing info
- Localization files are loaded and applied

#### Integration tests
tests check container layer and requests with mocked data 

#### Unit tests
#### Screenshot tests

