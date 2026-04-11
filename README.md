# Simple Base!!

A minimalist, plugin-based REST API implementation with zero UI dependencies. Simplified API delivers pure JSON responses through an intuitive plugin architecture.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/rynxzyy/Simplified-Api)

## Overview

Simplified API is a base REST API implementation designed to be as simple as possible. It focuses solely on delivering JSON responses without any UI components, making it lightweight and straightforward to use. The API follows a plugin-based architecture where endpoints are automatically created based on the file structure.

## Features

- **Plugin-Based Architecture**: Easily extend functionality by adding new files
- **Zero UI Dependencies**: Focus solely on API functionality with pure JSON responses
- **Simple File-Based Routing**: API endpoints are automatically created based on file structure
- **Minimal Configuration**: Get started quickly with sensible defaults
- **Flexible Plugin Structure**: Optional parameters configuration for maximum adaptability
- **Lightweight & Fast**: No bloated dependencies or unnecessary overhead

## Project Structure

```
simplified-api/
├── index.js           # Main entry point
├── api/               # API plugins directory
│   ├── example.js     # Example endpoint: /example
│   └── ai/            # Nested route directory
│       └── hydromind.js  # AI endpoint: /ai/hydromind
├── lib/               # Helper libraries and utilities
└── package.json       # Project dependencies
```

## How It Works

1. **File-Based Routing**: 
   The API endpoints are automatically created based on your file structure within the `api` directory:

   ```
   api/
   ├── users.js        -> /users
   ├── products.js     -> /products
   └── ai/
       ├── chat.js     -> /ai/chat
       └── hydromind.js -> /ai/hydromind
   ```

2. See the plugin example in the /api file but it's not a plugin!!
## How to save the api/category/file.js file

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/rynxzyy/simplified-api.git
   cd simplified-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Access your API endpoints:
   - `GET /hello?name=John` -> `{"message": "Hello, John!"}`
   - `GET /ai/hydromind?text=Hello&model=gpt3` -> `{"result": "AI response here"}`

## Adding New Endpoints

To add a new endpoint, simply create a new JavaScript file in the `api` directory or any subdirectory:

1. Create a new file (e.g., `api/weather.js`):
   ```javascript
   const axios = require('axios');

   module.exports = {
       category: 'Weather',
       // Optional params array
       params: ['city'],
       async run(req, res) {
           try {
               const { city } = req.query;
               if (!city) return res.status(400).json({ error: 'City is required' });
               
               // Your weather API integration code here
               
               res.status(200).json({
                   result: weatherData
               });
           } catch (error) {
               res.status(500).json({ error: error.message });
           }
       }
   }
   ```

2. The endpoint will be automatically available at `/weather?city=London`

## Error Handling

Plugins should use standard HTTP status codes and error messages:

```javascript
if (!requiredParam) {
    return res.status(400).json({ error: 'Required parameter missing' });
}

try {
    // Your code here
} catch (error) {
    res.status(500).json({ error: error.message });
}
```

## License

This project is licensed under the [MIT License](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
