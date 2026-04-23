const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")


async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;

    
}

function tweet(){
   window.open("https://x.com/intent/tweet?text="+ quote.innerHTML + " ---- By " + author.innerHTML ,"Tweet Window", "width=600,height =300")
}

window.onload = getquote(api_url);
    
