class IntervalTimer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var display = document.createElement("p");

        this.timeRemaining = this.getAttribute("time-seconds");

        display.innerText = this.timeRemaining;

        this.appendChild(display);


        let i = this.timeRemaining;
        while (i > 0) {
            setTimeout( () => {
                this.timeRemaining--;
                this.innerText = this.timeRemaining;
            }, i * 1000);
            i--;
        }
    }
}


window.customElements.define('interval-timer', IntervalTimer)

