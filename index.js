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
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set click event
     * 
     * @type private
     */
    beforeRender () {
        try {
            super.beforeRender();
            
            let clk = (c1,c2,c3) => {
                try { c3.switching(); } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            
	    let chd = this.child();
	    for (let cidx in chd) {
                chd[cidx].event(new Click([clk,this]));
	    }
	} catch (e) {
	    console.error(e.stack);
	    throw e;
	}
    }
}
module.exports = mf.comp.ClkSw;
/* end of file */
