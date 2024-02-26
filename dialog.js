
class IntervalDialog extends HTMLElement {
    constructor() {
        super();
        console.log("hi");

    }
    connectedCallback() {
        var dialogElement = document.createElement("dialog");
        dialogElement.className = "py-4 px-4";

        var text = document.createElement("p");
        text.innerText = "Create an Interval";

        var form = document.createElement("interval-form");

        var hideButton = document.createElement("button");
        hideButton.addEventListener("click", () => {
            dialogElement.close();
        });
        // TODO(rudiejd) figure out how to include tailwind in a web component.. or just do css myself
        hideButton.className = "bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full";
        hideButton.innerHTML = "Close"

        dialogElement.appendChild(text);
        dialogElement.appendChild(form);
        dialogElement.appendChild(hideButton);

        this.appendChild(dialogElement);
    }
}

window.customElements.define('interval-dialog', IntervalDialog)


