const webLinks = [
    {link: "https://www.google.com/", icon: "https://www.google.com/favicon.ico"},
    {link: "https://www.ozbargain.com.au/", icon: "https://www.ozbargain.com.au/favicon.ico"},
    {link: "https://www.afr.com/", icon: "https://www.afr.com/favicon.ico"},
    {link: "https://www.smh.com.au/", icon: "https://www.smh.com.au/favicons/smh.ico"},
    {link: "https://paycalculator.com.au/", icon: "https://paycalculator.com.au/favicon.ico"},
    {link: "https://iworkfor.nsw.gov.au/", icon: "https://iworkfor.nsw.gov.au/favicon.ico"},
    {link: "https://www.removepaywall.com/", icon: "https://www.removepaywall.com/faviFold/favicon-32x32.png"},
    {link: "https://www.abc.net.au/news", icon: "https://www.abc.net.au/news-assets/favicon-32x32.png"},
    {link: "https://my.smata.com/login", icon: "https://static.parastorage.com/client/pfavico.ico"}
];

function main(linkData) {
    const bodyElement = document.getElementsByTagName('body')[0];
    
    for (let index = 0; index < webLinks.length; index++) {
        const webLink = webLinks[index];
        const aElement = document.createElement('a');
        aElement.href = webLink['link'];
        
        const imgElement = document.createElement('img');
        imgElement.src = webLink['icon']

        aElement.append(imgElement);
        bodyElement.append(aElement)
    }
};

main(webLinks);