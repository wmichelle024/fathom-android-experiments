//debugger;
const {dom, rule, ruleset, type, score, out} = require('fathom-web');


function containsColonsOrDashes(elem) {
    return true;
}

// example partially from https://github.com/mozilla/fathom
var titleFinder = ruleset([
    // Give any title tag a score of 1, and tag it as title-ish:
    rule(dom("title"), type('titley')),
    rule(type("titley"), score(1)),
    rule(type('titley').max(), out('titley'))
    ]
);

var titleNode = titleFinder.against(document).get('titley')[0].element;
var title = titleNode.innerText;

java.setTitle(title);

console.log("hi");