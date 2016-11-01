function walk(rootNode)
{
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{

// Backpacer Species 
    // Polar bear to trust fund baby 
    v = v.replace(/\bPolar Bear\b/g, "Trust Fund Baby");
    v = v.replace(/\bPolar bear\b/g, "Trust fund baby");
    v = v.replace(/\bpolar bear\b/g, "trust fund baby");
    v = v.replace(/\bPolar Bears\b/g, "Trust Fund Babies");
    v = v.replace(/\bPolar bears\b/g, "Trust fund babies");
    v = v.replace(/\bpolar bears\b/g, "trust fund babies");

    //Grizzliessss
    v = v.replace(/\b(?:Grizzly)\b/g, "Dirty Backpacker");
    v = v.replace(/\b(?:Grizzlies)\b/g, "Dirty Backpackers");
    v = v.replace(/\b(?:grizzly)\b/g, "dirty backpacker");
    v = v.replace(/\b(?:grizzlies)|(?:grizzly bears)\b/g, "dirty backpackers");
    v = v.replace(/\bGrizzly bear\b/g, "Dirty backpacker");
    v = v.replace(/\bGrizzly bears\b/g, "Dirty backpackers");


    // Habitat
    v = v.replace(/\b(?:Den)|(?:Cave)\b/g, "Hostel");
    v = v.replace(/\b(?:Dens)|(?:Caves)\b/g, "Hostels");
    v = v.replace(/\b(?:den)|(?:cave)\b/g, "hostel");
    v = v.replace(/\b(?:dens)|(?:caves)\b/g, "hostels");
    // Growl
    v = v.replace(
        /\b(?:Bear)\b/g,
        "Backpacker"
    );
    v = v.replace(/\b(?:BEAR)\b/g, "BACKPACKER");
    v = v.replace(/\b(?:BEARS)\b/g, "BACKPACKERS");
    v = v.replace(
        /\b(?:Bears)\b/g,
        "Backpackers"
    );

    v = v.replace(
        /\b(?:bear)\b/g,
        "backpacker"
    );
    v = v.replace(
        /\b(?:bears)\b/g,
        "backpackers"
    );
    v = v.replace(
        /\b(?:hibernation)|(?:hibernating)\b/g,
        "finding yourself"
    );
    v = v.replace(/\b(?:Hibernation)|(?:Hibernating)\b/g, "Finding Yourself");
    v = v.replace(
        /\b(?:hibernate)\b/g,
        "go find themself"
    );
    v = v.replace(/\b(?:cub)\b/g, "Go Pro");
    v = v.replace(/\b(?:Cub)\b/g, "Go Pro");
    v = v.replace(/\b(?:Cubs)\b/g, "Go Pros");
    v = v.replace(/\b(?:cubs)\b/g, "Go Pros");
    // change young to go pro if bear in sentence 

    v = v.replace(
        /\b(?:Backpacker Spray)\b/g,
        "Deodorant"
    );
    v = v.replace(
        /\b(?:Backpacker spray)\b/g,
        "Deodorant"
    );
    v = v.replace(
        /\b(?:backpacker spray)\b/g,
        "deodorant"
    );

    v = v.replace(
        /\b(?:backpacker sprays)\b/g,
        "deodorant"
    );

// honey
    v = v.replace(
        /\b(?:Honey)\b/g,
        "Free beer"
    );

    v = v.replace(
        /\b(?:Eat honey)\b/g,
        "Drink free beer"
    );

     v = v.replace(
        /\b(?:Eat Honey)\b/g,
        "Drink Free Beer"
    )
    v = v.replace(
        /\b(?:eat honey)\b/g,
        "drink free beer"
    );
    v = v.replace(
        /\b(?:honey)\b/g,
        "free beer"
    );
    v = v.replace(
        /\b(?:beehive)\b/g,
        "keg"
    );
    v = v.replace(
        /\b(?:beehives)\b/g,
        "kegs"
    );
    v = v.replace(
        /\b(?:Beehive)\b/g,
        "Keg"
    );
    v = v.replace(/\b(?:Beehives)\b/g, "Kegs");
    v = v.replace(/\b(?:hives)\b/g, "kegs");
    v = v.replace(/\b(?:Hives)\b/g, "Kegs");
    //beekeeping
    v = v.replace(/\bbeekeeping\b/g, "Brewing");
    v = v.replace(/\bBeekeeping\b/g, "brewing");
    v = v.replace(/\bBeekeepers\b/g, "Brewers");
    v = v.replace(/\bbeekeepers\b/g, "brewers");
    v = v.replace(/\bBeekeeper\b/g, "Brewer");
    v = v.replace(/\bbeekeeper\b/g, "brewer");

    // Grizlly bear to dirty backpacer

    
    // Global 
    v = v.replace(/\bGlobal warming\b/g, "Getting a job");
    v = v.replace(/\bGlobal Warming\b/g, "Getting a Job");
    v = v.replace(/\bglobal warming\b/g, "getting a job");
    v = v.replace(/\bClimate warming\b/g, "Getting a job");
    v = v.replace(/\bClimate Warming\b/g, "Getting a Job");
    v = v.replace(/\bclimate warming\b/g, "getting a job");

    v = v.replace(/\bClimate Change\b/g, "Finding a Job");
    v = v.replace(/\bClimate change\b/g, "Finding a job");
    v = v.replace(/\bclimate change\b/g, "finding a job");
    
    // Cohorts
    v = v.replace(/\b(S|s)truggling (A|a)spirationals\b/g, "Struggling (with) Pythons");
    v = v.replace(/\b(S|s)uccessful (H|h)omeowners\b/g, "Viper Stripers");
    v = v.replace(/\b(A|a)ctive (A|a)ffluents\b/g, "Activated Boas");
    v = v.replace(/\b(C|c)omfortable (?:tv|Tv|TV) (W|w)atchers\b/g, "Cozy Cobras");

    // The Generation of €700
    v = v.replace(
        /\b(?:The Generation of €700)|(?:€700 Generation)\b/g,
        "Ophion"
    );
    v = v.replace(
        /\b(?:the generation of €700)|(?:€700 generation)\b/g,
        "ophion"
    );

    // Mileurista
    v = v.replace(/\b(?:M|m)ill?eurista\b/g, "Nagual");

    // Precarious Generation
    v = v.replace(
        /\b(?:Precarious Generation)|(?:Generation Precarious)\b/g,
        "Gargouille"
    );
    v = v.replace(
        /\b(?:precarious generation)|(?:generation precarious)\b/g,
        "gargouille"
    );

    return v;
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].nodeType === 3) {
                // Replace the text for text nodes
                handleText(mutation.addedNodes[i]);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(mutation.addedNodes[i]);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
