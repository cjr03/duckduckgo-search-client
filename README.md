# DuckDuckGo Search API Client
![TypeScript](https://img.shields.io/badge/TypeScript-deepskyblue)
![Node.js](https://img.shields.io/badge/Node.js-green)
![Jest](https://img.shields.io/badge/Jest-maroon)

TypeScript integration with the [DuckDuckGo Instant Answer API](https://api.duckduckgo.com/).  
Queries the DuckDuckGo Instant Answer API and returns structured results. Includes strong typing, input validation, error handling, and Jest tests.

This project emphasizes:

- Reverse-engineering undocumented APIs
- Real-world API exploration, analysis, and formalization skills
- Comprehensive type formalization
- Proper integration implementation
- Test-driven validation

---

## Features

- Validates query parameters before sending
- Uses `fetch` with retry logic (`utils/fetchWithRetry.ts`)
- Fully typed request/response contracts
- Jest tests covering valid, invalid, and nonsense queries

---

## Project Structure

```plaintext
.
├── routes/
│ └── search.ts
├── types/
│ └── search.types.ts
├── utils/
│ └── fetchWithRetry.ts
├── tests/
│ └── search.test.ts
├── index.ts
```

### `types/` Directory

- Documents types thoroughly
- Investigated API responses completely
- Formalized all request and response structures
- Comprehensive type definitions

### `routes/` Directory

- Investigated the API shape and response structure
- Implementing proper error handling

### `tests/` Directory

- Validates response data structure
- Tests error scenarios
- Ensures type safety
- Verifies integration functionality

### `index.ts` File

- Validates wiring

---

## 🔧 Usage

```ts
import { searchDuckDuckGo } from "./routes/search";

const results = await searchDuckDuckGo({ q: "cat" });
console.log(results.Abstract);
```

---

## Run Tests

```bash
npm install
npm test
```

---

## 📜 License

MIT
