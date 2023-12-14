const accessKey = "GBaMFRdnHo0o-u-Qnz4jxwjon_dfZDrVeyN-iMs2rSI";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
 
let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value.trim();
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results =data.results;
    console.log(results);
  

    if(page === 1){
        searchResult.innerHTML = "";
    }

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    if (keyword) {
         showMoreBtn.style.display = "block";
          
    }else{
        showMoreBtn.style.display = "none";
        searchResult.innerHTML = "Please enter any word";
    }
     
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
    
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
});

 