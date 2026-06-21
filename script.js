function shortenURL() {
    let url = document.getElementById("url").value;

    if(url === "") {
        alert("Enter a URL");
        return;
    }

    let shortCode = Math.random().toString(36).substring(2, 8);
    document.getElementById("result").innerHTML =
        "Short URL: https://short.ly/" + shortCode;
}
