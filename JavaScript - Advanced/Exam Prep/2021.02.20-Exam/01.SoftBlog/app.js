function solve(){
   const createBtn = document.querySelector('.btn.create');
   createBtn.addEventListener('click', generatePost);

   function generatePost(e){
      e.preventDefault();
      let siteContent = document.querySelector('.site-content> main>section');
      let author = document.querySelector('#creator');
      let title = document.querySelector('#title');
      let category = document.querySelector('#category');
      let content = document.querySelector('#content');

      let article = createElement('article');
      let h1 = createElement('h1',title.value);
      let categoryP = createElement('p', 'Category: ');
      let categoryStrong = createElement('strong',category.value);
      let creatorP = createElement('p','Creator: ');
      let creatorStrong = createElement('strong',author.value);
      let contentP = createElement('p',content.value);
      let div = createElement('div','','buttons');
      let deleteBtn = createElement('button','Delete','btn delete');
      let archiveBtn = createElement('button','Archive','btn archive');

      deleteBtn.addEventListener('click', deleteArticle);
      archiveBtn.addEventListener('click', archiveArticle);
      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      creatorP.appendChild(creatorStrong);
      categoryP.appendChild(categoryStrong);

      article.appendChild(h1);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(contentP);
      article.appendChild(div);

      siteContent.appendChild(article);
      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   }
   function deleteArticle(e){
      e.currentTarget.parentElement.parentElement.remove();
   }
   function archiveArticle(e){
      let article = e.currentTarget.parentElement.parentElement;
      let title = article.querySelector('h1').textContent;
      let ol = document.querySelector('.archive-section>ol');
      let li = createElement('li',title);
      ol.appendChild(li);
      let allLi = Array.from(ol.querySelectorAll('li'));
      allLi.sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ol.appendChild(li));

      article.remove();

   }

   function createElement(type,text,classType){
      let element = document.createElement(type);
      if(text != undefined || text !=''){
          element.textContent = text;
      }
      if(classType != undefined){
          element.className = classType;
      }
      return element;
  }
  }
