// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//http: github.com/carbonfive/
//http: github.com
function domainName(url){
    let urlEnd = url.replace("//", " ").split().slice(1,1)
    console.log(urlEnd)
}
domainName("https://www.cnet.com")