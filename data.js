const pagesData = {
    home: [
        {
            link: "https://www.google.com/", 
            icon: "./icons/google-128.png"
        },
        {
            link: "https://www.youtube.com/", 
            icon: "./icons/youtube-144.png"
        },
        {
            link: "https://www.ozbargain.com.au/", 
            icon: "./icons/ozbargain-128.png"
        },
        {
            link: "https://www.afr.com/", 
            icon: "./icons/afr.png"
        },
        {
            link: "https://www.smh.com.au/", 
            icon: "https://www.smh.com.au/favicons/smh.ico"
        },
        {
            link: "https://paycalculator.com.au/", 
            icon: "https://paycalculator.com.au/favicon.ico"
        },
        {
            link: "https://iworkfor.nsw.gov.au/", 
            icon: "https://iworkfor.nsw.gov.au/favicon.ico"
        },
        {
            link: "https://www.removepaywall.com/", 
            icon: "./icons/wall.png"
        },
        {
            link: "https://www.abc.net.au/news", 
            icon: "https://www.abc.net.au/news-assets/favicon-32x32.png"
        },
        {
            link: "https://my.smata.com/login", 
            icon: "https://static.wixstatic.com/media/c4412c_d2f39fc981a54810a2f5e5a7d8b91211~mv2.png/v1/fill/w_169,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202020-08-06%20at%201_29_43%20pm.png"
        },
        {
            link: "https://www.jbhifi.com.au/", 
            icon: "./icons/jbhifi-128.png"
        },
        {
            link: "https://www.umart.com.au/", 
            icon: "https://www.umart.com.au/images/umart-logo-500x500.png"
        },
        {
            link: "https://au.camelcamelcamel.com/", 
            icon: "https://assets.camelcamelcamel.com/live-assets/camelcamelcamel-logo-2018-583259dd2c1880ff44d801e313ca1d885d2ea345690072a457c5af98b5ca513f.png"
        },
        {
            link: "https://www.itnews.com.au/", 
            icon: "./icons/it-news.png"
        },
        {
            link: "https://www.theguardian.com/au", 
            icon: "./icons/guardian-128.png"
        },
        {
            link: "https://www.economist.com/", 
            icon: "./icons/the-economist.png"
        },
        {
            link: "./rates.html", 
            icon: "./icons/folder.png"
        },
        {
            link: "./pcparts.html", 
            icon: "./icons/folder.png"
        }
    ],

    rates: [
        {
            name: 'Back',
            link: "javascript:history.back()", 
            icon: "./icons/back.png"
        },
        {
            name: 'CPI Quaterley',
            link: "https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release", 
            icon: "./icons/abs.png"
        },
        {
            name: 'CPI Monthly',
            link: "https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/monthly-consumer-price-index-indicator/latest-release", 
            icon: "./icons/abs.png"
        },
        {
            name: 'Unemployment Monthly',
            link: "https://www.abs.gov.au/statistics/labour/employment-and-unemployment/labour-force-australia/latest-release", 
            icon: "./icons/abs.png"
        },
        {
            name: 'WPI Quaterley',
            link: "https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/wage-price-index-australia/latest-release", 
            icon: "./icons/abs.png"
        },
        {
            name: 'ASX Rate Tracker',
            link: "https://www.asx.com.au/markets/trade-our-derivatives-market/futures-market/rba-rate-tracker.html", 
            icon: "./icons/asx.png"
        },
        {
            name: 'RBA Meetings',
            link: "https://www.rba.gov.au/schedules-events/board-meeting-schedules.html",
            icon: "./icons/rba-152.png"
        }
    ],
    pcParts: [
        {
            name: "Back",
            link: "javascript:history.back()", 
            icon: "./icons/back.png"
        },
        {
            name: "umart",
            link: "https://www.umart.com.au/",
            icon: "./icons/umart.png"
        },
        {
            name: "scorptec",
            link: "https://www.scorptec.com.au/",
            icon: "./icons/scorptec.png"
        },
        {
            name: "ple",
            link: "https://www.ple.com.au/",
            icon: "./icons/ple.jpg"
        }, 
        {
            name: "mwave",
            link: "https://www.mwave.com.au/",
            icon: "./icons/mwave.ico"
        }, 
        {
            name: "PCCaseGear",
            link: "https://www.pccasegear.com/",
            icon: "./icons/pccg.png"
        }
    ]
}

function main() {
    const bodyElement = document.getElementsByTagName('body')[0];
    const webLinks = pagesData[document.title];
 
    if(document.title === 'home') {
        const searchDiv = document.createElement('div');
        const searchInput = document.createElement('input');
        const searchButton = document.createElement('button');
        searchButton.textContent = 'view';
        
        searchButton.addEventListener('click', function(event) {
            const input = document.getElementsByTagName('input')[0];
            const bypass = 'https://www.removepaywall.com/search?url=';
            window.location.href = bypass + input.value;
        });
        
        searchDiv.append(searchInput);
        searchDiv.append(searchButton);
        bodyElement.append(searchDiv);
    
    }

    for (let index = 0; index < webLinks.length; index++) {
        const webLink = webLinks[index];
        const aElement = document.createElement('a');
        aElement.href = webLink['link'];
            
        const imgElement = document.createElement('img');
        imgElement.src = webLink['icon'];
        aElement.append(imgElement);
        bodyElement.append(aElement); 
    }
    
};

main();