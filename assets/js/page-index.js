(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "index.md",
                title: "Privacy Statement",
                url: "/opendoc-sensor-data-exchange/Privacy%20Statement/",
                escapedPath: "Privacy%20Statement/index.md",
                dir: "/Privacy%20Statement/",
                tocId: "toc_/privacy%20statement/",
                documentInfo: ["Privacy Statement",null,null]
            },
            
        {
                name: "index.md",
                title: "FAQ",
                url: "/opendoc-sensor-data-exchange/FAQs/",
                escapedPath: "FAQs/index.md",
                dir: "/FAQs/",
                tocId: "toc_/faqs/",
                documentInfo: ["FAQs","",["General.md","Account.md","Publishing.md","Subscription.md","Topic.md","Messaging.md","Portal.md"]]
            },
            
        {
                name: "index.md",
                title: "User Guide",
                url: "/opendoc-sensor-data-exchange/User%20Guide/",
                escapedPath: "User%20Guide/index.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "index.md",
                title: "Terms of Use",
                url: "/opendoc-sensor-data-exchange/Terms%20of%20Use/",
                escapedPath: "Terms%20of%20Use/index.md",
                dir: "/Terms%20of%20Use/",
                tocId: "toc_/terms%20of%20use/",
                documentInfo: ["Terms of Use",null,null]
            },
            
        
        
        {
                name: "Account.md",
                title: "FAQs about Account",
                url: "/opendoc-sensor-data-exchange/FAQs/Account.html",
                escapedPath: "FAQs/Account.md",
                dir: "/FAQs/",
                tocId: "toc_/faqs/",
                documentInfo: ["FAQs","",["General.md","Account.md","Publishing.md","Subscription.md","Topic.md","Messaging.md","Portal.md"]]
            },
            
        {
                name: "General.md",
                title: "FAQs about General",
                url: "/opendoc-sensor-data-exchange/FAQs/General.html",
                escapedPath: "FAQs/General.md",
                dir: "/FAQs/",
                tocId: "toc_/faqs/",
                documentInfo: ["FAQs","",["General.md","Account.md","Publishing.md","Subscription.md","Topic.md","Messaging.md","Portal.md"]]
            },
            
        {
                name: "Messaging.md",
                title: "FAQs about Messaging",
                url: "/opendoc-sensor-data-exchange/FAQs/Messaging.html",
                escapedPath: "FAQs/Messaging.md",
                dir: "/FAQs/",
                tocId: "toc_/faqs/",
                documentInfo: ["FAQs","",["General.md","Account.md","Publishing.md","Subscription.md","Topic.md","Messaging.md","Portal.md"]]
            },
            
        {
                name: "Portal.md",
                title: "FAQs about Portal",
                url: "/opendoc-sensor-data-exchange/FAQs/Portal.html",
                escapedPath: "FAQs/Portal.md",
                dir: "/FAQs/",
                tocId: "toc_/faqs/",
                documentInfo: ["FAQs","",["General.md","Account.md","Publishing.md","Subscription.md","Topic.md","Messaging.md","Portal.md"]]
            },
            
        {
                name: "Publishing.md",
                title: "FAQs about Publishing",
                url: "/opendoc-sensor-data-exchange/FAQs/Publishing.html",
                escapedPath: "FAQs/Publishing.md",
                dir: "/FAQs/",
                tocId: "toc_/faqs/",
                documentInfo: ["FAQs","",["General.md","Account.md","Publishing.md","Subscription.md","Topic.md","Messaging.md","Portal.md"]]
            },
            
        {
                name: "Subscription.md",
                title: "FAQs about Subscription",
                url: "/opendoc-sensor-data-exchange/FAQs/Subscription.html",
                escapedPath: "FAQs/Subscription.md",
                dir: "/FAQs/",
                tocId: "toc_/faqs/",
                documentInfo: ["FAQs","",["General.md","Account.md","Publishing.md","Subscription.md","Topic.md","Messaging.md","Portal.md"]]
            },
            
        {
                name: "Topic.md",
                title: "FAQs about Topic",
                url: "/opendoc-sensor-data-exchange/FAQs/Topic.html",
                escapedPath: "FAQs/Topic.md",
                dir: "/FAQs/",
                tocId: "toc_/faqs/",
                documentInfo: ["FAQs","",["General.md","Account.md","Publishing.md","Subscription.md","Topic.md","Messaging.md","Portal.md"]]
            },
            
        {
                name: "Privacy.md",
                title: "Privacy",
                url: "/opendoc-sensor-data-exchange/Privacy%20Statement/Privacy.html",
                escapedPath: "Privacy%20Statement/Privacy.md",
                dir: "/Privacy%20Statement/",
                tocId: "toc_/privacy%20statement/",
                documentInfo: ["Privacy Statement",null,null]
            },
            
        {
                name: "TOU.md",
                title: "Terms of Use",
                url: "/opendoc-sensor-data-exchange/Terms%20of%20Use/TOU.html",
                escapedPath: "Terms%20of%20Use/TOU.md",
                dir: "/Terms%20of%20Use/",
                tocId: "toc_/terms%20of%20use/",
                documentInfo: ["Terms of Use",null,null]
            },
            
        {
                name: "Activities.md",
                title: "Activities",
                url: "/opendoc-sensor-data-exchange/User%20Guide/Activities.html",
                escapedPath: "User%20Guide/Activities.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "Browse Topic.md",
                title: "Browse Topics",
                url: "/opendoc-sensor-data-exchange/User%20Guide/Browse%20Topic.html",
                escapedPath: "User%20Guide/Browse%20Topic.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "Dashboard.md",
                title: "Dashboard",
                url: "/opendoc-sensor-data-exchange/User%20Guide/Dashboard.html",
                escapedPath: "User%20Guide/Dashboard.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "Getting Started.md",
                title: "Getting Started",
                url: "/opendoc-sensor-data-exchange/User%20Guide/Getting%20Started.html",
                escapedPath: "User%20Guide/Getting%20Started.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "Glossary.md",
                title: "Glossary",
                url: "/opendoc-sensor-data-exchange/User%20Guide/Glossary.html",
                escapedPath: "User%20Guide/Glossary.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "Home Page.md",
                title: "Home Page",
                url: "/opendoc-sensor-data-exchange/User%20Guide/Home%20Page.html",
                escapedPath: "User%20Guide/Home%20Page.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "Introduction.md",
                title: "Introduction #",
                url: "/opendoc-sensor-data-exchange/User%20Guide/Introduction.html",
                escapedPath: "User%20Guide/Introduction.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "My Subscribers.md",
                title: "My Subscribers #",
                url: "/opendoc-sensor-data-exchange/User%20Guide/My%20Subscribers.html",
                escapedPath: "User%20Guide/My%20Subscribers.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "My Subscriptions.md",
                title: "My Subscriptions #",
                url: "/opendoc-sensor-data-exchange/User%20Guide/My%20Subscriptions.html",
                escapedPath: "User%20Guide/My%20Subscriptions.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        {
                name: "Projects.md",
                title: "Projects",
                url: "/opendoc-sensor-data-exchange/User%20Guide/Projects.html",
                escapedPath: "User%20Guide/Projects.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User Guide","",["Getting Started.md","Introduction.md","Home Page.md","Dashboard.md","Browse Topic.md","Projects.md","My Subscribers.md","My Subscriptions.md","Activities.md","Glossary.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()