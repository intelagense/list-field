// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//http: github.com/carbonfive/
//http: github.com
function domainName(url){
    let urlArr = url.replace("//", " ").replaceAll(".", " ").split(" ").slice(1)
    let urlEnd = urlArr.slice(urlArr.length - 2, -1)
    console.log(urlEnd)
}
domainName("https://www.cnet.com")