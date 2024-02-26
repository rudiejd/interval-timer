class IntervalTimer extends HTMLElement {
    constructor() {
        super();
        this.timeRemaining = 100;
    }

    connectedCallback() {

        var display = document.createElement("p");

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

