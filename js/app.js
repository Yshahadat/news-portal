const loadNews = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
}

const displayNews = news => {
    const newsContainer = document.getElementById('news-container');
    news.forEach(News => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${news.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
        
        `;
        newsContainer.appendChild(newsDiv);
    });
};
loadNews();


