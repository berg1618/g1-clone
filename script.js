async function fetchIfrnNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/everything?language=pt&q=neymar&sortBy=publishedAt&apiKey=14b670b7093c4cf39fd40f4ca0892f5a');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        updateNews(data);
    } catch (error) {
        console.error(error);
    }
}

function updateNews(data) {
    const elems = document.getElementsByClassName("title");
    const paragraphs = document.getElementsByClassName('content');
    const cards = document.querySelectorAll('.card');
    const imgs = document.querySelector('.img-noticia');

    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.innerHTML = data['articles'][i]['title'];

        const card = cards[i];
        card.style.backgroundImage = `url(${data['articles'][i]['urlToImage']})`;

        const p = paragraphs[i];
        p.innerHTML = data['articles'][i]['content'];

        imgs.src = data['articles'][i]['urlToImage'];

    }


}

fetchIfrnNews().catch((error) => {
    console.error(error);
});