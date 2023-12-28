import express from 'express';
const app = express()
const port = 3000

app.get('/noticias', async (req, res) => {
    const news = [];
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?language=pt&q=economia&sortBy=publishedAt&apiKey=14b670b7093c4cf39fd40f4ca0892f5a`);
        if (!response.ok) {
            throw new Error(`chave inválida! status: ${response.status}`);
        }

        const resultJson = await response.json();

        const articles = resultJson['articles'];

        for (let i = 0; i < articles.length; i++) {
            const title = articles[i]['title'];
            const description = articles[i]['description'];
            const content = articles[i]['content'];
            const source = articles[i]['source']['name'];
            const data = {'titulo' : title, 'descricao' : description, 'conteudo' : content, 'fonte' : source};
            news.push(data)
        }
        res.send(news)
    } catch (error) {
        throw new Error(`Nada encontrado! status: ${response.status}`);
    };
})

app.listen(port, () => {
    console.log(`g2 back is listening on port ${port}`)
})