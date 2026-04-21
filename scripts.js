const api_url = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    
}

getquote(api_url)