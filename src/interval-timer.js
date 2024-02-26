class IntervalTimer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var display = document.createElement("p");

        this.timeRemaining = this.getAttribute("time-seconds");
        // persist this value so we can reset
        this.originalTimeRemaining = this.timeRemaining;


        display.innerText = this.timeRemaining;

        this.appendChild(display);
        this.resetCount = 0;

        this.addCountdownCallbacks();


        // reset
        // TODO(rudiejd): I need a way to clean out the event loop when the reset happens :(
        // for now, just make the countdown callbacks no-op if the reset count doesnt match
        this.addEventListener("click", () => {
            this.timeRemaining = this.originalTimeRemaining;
            display.innerText = this.timeRemaining;
            this.addCountdownCallbacks();
        });
    }

    // TODO(rudiejd) document, make parameters constant?
    addCountdownCallbacks() {
        let i = this.timeRemaining;
        this.resetCount++;
        let resetCount = this.resetCount;
        while (i > 0) {
            setTimeout( () => {
                if (this.resetCount != resetCount) {
                    return;
                }
                this.timeRemaining--;
                this.innerText = this.timeRemaining;
            }, i * 1000);
            i--;
        }
    }

}


window.customElements.define('interval-timer', IntervalTimer)

