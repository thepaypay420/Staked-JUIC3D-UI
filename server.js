const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import CORS middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS middleware
app.use(cors());

// Define a route to fetch NFT floor prices from Magic Eden
app.get('/nft-floor-prices', async (req, res) => {
    try {
        // Make a request to Magic Eden API
        const response = await axios.get('https://api-mainnet.magiceden.dev/v2/collections/juic3dnfts/stats');

        // Send the response data back to the client
        res.json(response.data);
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ error: 'Failed to fetch NFT floor prices' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
