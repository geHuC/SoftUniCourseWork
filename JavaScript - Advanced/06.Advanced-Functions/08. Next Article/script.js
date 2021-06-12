function getArticleGenerator(articles) {
    let articlesArray = articles;
    let contentDiv = document.getElementById('content')
    return () =>{
        if(articlesArray.length > 0 ){
        let article = document.createElement('article');
        article.textContent = articlesArray.shift();
        contentDiv.appendChild(article);
        } 
    };
}
