const webLinks = [
    {link: "https://www.google.com/", icon: "https://www.google.com/favicon.ico"},
    {link: "https://www.youtube.com/", icon: "./icons/youtube_favicon_144x144.png"},
    {link: "https://www.ozbargain.com.au/", icon: "https://www.ozbargain.com.au/favicon.ico"},
    {link: "https://www.afr.com/", icon: "https://www.afr.com/favicon.ico"},
    {link: "https://www.smh.com.au/", icon: "https://www.smh.com.au/favicons/smh.ico"},
    {link: "https://paycalculator.com.au/", icon: "https://paycalculator.com.au/favicon.ico"},
    {link: "https://iworkfor.nsw.gov.au/", icon: "https://iworkfor.nsw.gov.au/favicon.ico"},
    {link: "https://www.removepaywall.com/", icon: "https://www.removepaywall.com/faviFold/favicon-32x32.png"},
    {link: "https://www.abc.net.au/news", icon: "https://www.abc.net.au/news-assets/favicon-32x32.png"},
    {link: "https://my.smata.com/login", icon: "https://static.wixstatic.com/media/c4412c_d2f39fc981a54810a2f5e5a7d8b91211~mv2.png/v1/fill/w_169,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202020-08-06%20at%201_29_43%20pm.png"},
    {link: "https://www.jbhifi.com.au/", icon: "//www.jbhifi.com.au/cdn/shop/files/favicon_7cbca4eb-4222-41b7-a8f8-9dc52b7c4a7c_32x32.png"},
    {link: "https://www.umart.com.au/", icon: "https://www.umart.com.au/images/umart-logo-500x500.png"},
    {link: "https://au.camelcamelcamel.com/", icon: "https://assets.camelcamelcamel.com/live-assets/camelcamelcamel-logo-2018-583259dd2c1880ff44d801e313ca1d885d2ea345690072a457c5af98b5ca513f.png"},
    {link: "https://www.itnews.com.au/", icon: "https://www.itnews.com.au/images/itn-logo.png"},
    {link: "https://www.theguardian.com/au", icon: "https://static.guim.co.uk/images/favicon-32x32.ico"},
    {link: "https://www.economist.com/", icon: "https://www.economist.com/favicon.ico"}
];

function main(linkData) {
    const bodyElement = document.getElementsByTagName('body')[0];
    
    for (let index = 0; index < webLinks.length; index++) {
        const webLink = webLinks[index];
        if (typeof webLink === 'string') {
            const aElement = document.createElement('a');
            aElement.href = webLink;
            bodyElement.append(aElement)
        } else {
            const aElement = document.createElement('a');
            aElement.href = webLink['link'];
            
            const imgElement = document.createElement('img');
            imgElement.src = webLink['icon']
            aElement.append(imgElement);
            bodyElement.append(aElement)    
        }
    }
};

main(webLinks);