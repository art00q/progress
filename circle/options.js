import UI_ELEMENTS from "./view.js";
import {
    draw,
    animateCircle,
    hideCircle,
    drawCircleTemplate,
} from "./circle.js";

export default function init() {
    drawCircleTemplate();
    draw(60);

    UI_ELEMENTS.ANIMATION.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
    
        animateCircle(isChecked);
      });
    
    UI_ELEMENTS.HIDE.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
    
        hideCircle(isChecked);
    });
    
    UI_ELEMENTS.INPUT.addEventListener('input', (event) => {
        if (+event.target.value > 100) {
          event.target.value = 100;
        };
    
        if (+event.target.value < 0) {
          event.target.value = 0;
        };
    
        draw(event.target.value)
    })
}