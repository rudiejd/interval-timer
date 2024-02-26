class IntervalForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let form = document.createElement("form");

        let durationInput = document.createElement("input");

        let repetitionInput = document.createElement("input");

        let submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.innerText = "Add";

        form.appendChild(durationInput);
        form.appendChild(repetitionInput);
        form.appendChild(submitButton);
        
        this.appendChild(form);
    }
}

window.customElements.define('interval-form', IntervalForm)

