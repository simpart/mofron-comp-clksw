/**
 * @file mofron-comp-clksw/index.js
 * @brief click switch component for mofron
 *        switching display component by click event
 * @author simpart
 */
const mf = require("mofron");
const Switch = require("mofron-comp-switch");
const Click = require("mofron-event-click");

mf.comp.ClkSw = class extends Switch {
    /**
     * initialize component
     * 
     * @param (mixed) component: switch component
     *                object: component option
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('ClkSw');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();

	    let clk = (c1) => {
	        try { c1.switching(); } catch (e) {
                    console.error(e.stack);
		    throw e;
		}
	    }
	    this.event(new Click(clk));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.ClkSw;
/* end of file */
