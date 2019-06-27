import { dom, flavor, rule, ruleset } from 'fathom-web';
import trainees from './trainees.js';

logger.l("starting");

const rules = trainees.get("overlay").rulesetMaker()
const target = rules.against(dom);

logger.l("Rules: " + rules.toString());
logger.l("Target: " + target.toString());


printObj(target)
//logger.l("Result: " + target.get("overlay"))


function printObj(obj) {
logger.l("Printing object: " + obj.toString())
    var propValue;
    for(var propName in obj) {
        propValue = obj[propName]

        logger.l("Property: " + propName + ", Value: " + propValue)
    }
    logger.l("Finished printing object: " + obj.toString())
}
