import express from 'express';
const app = express()
const port = 3000

app.get('/noticias', async (req, res) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?language=pt&q=economia&sortBy=publishedAt&apiKey=14b670b7093c4cf39fd40f4ca0892f5a`);
        if (!response.ok) {
            throw new Error(`chave inválida! status: ${response.status}`);
        }
        const resultJson = await response.json();
        res.send(resultJson)
    } catch (error) {
        throw new Error(`Nada encontrado! status: ${response.status}`);
    };
})

app.listen(port, () => {
    console.log(`g2 back is listening on port ${port}`)
})