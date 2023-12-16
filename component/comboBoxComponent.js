import { AbstractComponent } from "./abstractComponent.js";

export class comboBoxComponent extends AbstractComponent {
    constructor(optionsComponent) {
        super();
        this.optionsComponent = optionsComponent;
    }

    getTemplate() {
        return `<div class="weather-widget">
        <select id="city-select">`
            + optionsComponent + `
        </select>
        <div id="weather-result">

        </div>
    </div>`;
    }


    setHandler() {
        const container = this.getElement();

        container.addEventListener("change", function () {
            input.value = this.options[this.selectedIndex].text;
        });
    }
}
