async function fetchAnimeNews() {
    const response = await fetch(`https://newsapi.org/v2/everything?language=pt&q=anime&sortBy=publishedAt&apiKey=14b670b7093c4cf39fd40f4ca0892f5a`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    updateNews(data);
}

function updateNews(data) {
    const elems = document.getElementsByClassName("title");

    const paragraphs = document.getElementsByClassName('content');


    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.innerHTML =  data['articles'][i]['title'];

        const p = paragraphs[i];
        p.innerHTML =  data['articles'][i]['content'];

    }

}

fetchAnimeNews().catch((error) => {
    console.error(error);
});