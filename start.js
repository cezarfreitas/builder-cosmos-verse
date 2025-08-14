import { handler } from './build/handler.js';
import express from 'express';

const app = express();
const port = process.env.PORT || 80;

// Serve static files
app.use(express.static('build/client'));

// Handle SvelteKit routes
app.use(handler);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
