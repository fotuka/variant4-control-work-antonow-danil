import { AbstractComponent } from "./abstractComponent.js";

export class OptionsComponent extends AbstractComponent {
    constructor(cityNames) {
        super();
        this.cityNames = cityNames;
    }

    getTemplate() {
        var string;
        for (let index = 0; index < this.cityNames.length; ++index) {
            string =+ "<option class=option" + index + `" value=">` + this.cityNames[index] + `"</option>`;
        }
        return string;
    }
}
