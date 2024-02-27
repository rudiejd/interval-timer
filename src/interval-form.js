class IntervalForm extends HTMLElement {
    constructor() {
        super();
    }

    createItemContainer(className) {
        let container = document.createElement("div");
        container.className = className;

        return container;
    }

    connectedCallback() {
        let form = document.createElement("form");

        let durationContainer = document.createElement("div");
        durationContainer.className = "md:flex md:items-center mb-6";

        let durationLabel = document.createElement("label");
        durationLabel.innerText = "Duration";
        durationLabel.for = "duration";
        let durationLabelContainer = this.createItemContainer("md:w-1/3");
        durationLabelContainer.appendChild(durationLabel);
        
        
        let durationInput = document.createElement("input");
        durationInput.type = "number"
        durationInput.id = "duration";
        durationInput.className = "bg-gray-200";
        let durationInputContainer = this.createItemContainer("md:w-2/3");
        durationInputContainer.appendChild(durationInput);

        durationContainer.appendChild(durationLabelContainer);
        durationContainer.appendChild(durationInputContainer);


        let repetitionsContainer = document.createElement("div");
        repetitionsContainer.className = "md:flex md:items-center mb-6";

        let repetitionsLabel = document.createElement("label");
        repetitionsLabel.innerText = "repetitions";
        repetitionsLabel.for = "repetitions";
        let repetitionsLabelContainer = this.createItemContainer("md:w-1/3");
        repetitionsLabelContainer.appendChild(repetitionsLabel);
        
        
        let repetitionsInput = document.createElement("input");
        repetitionsInput.type = "number"
        repetitionsInput.id = "repetitions";
        repetitionsInput.className = "bg-gray-200";
        let repetitionsInputContainer = this.createItemContainer("md:w-2/3");
        repetitionsInputContainer.appendChild(repetitionsInput);

        repetitionsContainer.appendChild(repetitionsLabelContainer);
        repetitionsContainer.appendChild(repetitionsInputContainer);

        let submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.innerText = "Add";
        submitButton.className = "bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full"

        form.appendChild(durationContainer);
        form.appendChild(repetitionsContainer)
        form.appendChild(submitButton);
        
        this.appendChild(form);
    }
}

window.customElements.define('interval-form', IntervalForm)

