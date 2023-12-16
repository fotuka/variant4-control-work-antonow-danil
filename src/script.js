import { render } from "./render.js";
import { ComboBoxComponent } from "./component/comboBoxComponent.js";
import { data } from "../src/mock/data.js";
import { OptionsComponent } from "./component/OptionsComponent.js";

const bodyElement = document.querySelector(".app-body");

const optionsComponent = new OptionsComponent(["123","234","345"]);

const comboBoxComponent = new ComboBoxComponent(optionsComponent.getTemplate());

render(comboBoxComponent, bodyElement);

comboBoxComponent.setHandler();
