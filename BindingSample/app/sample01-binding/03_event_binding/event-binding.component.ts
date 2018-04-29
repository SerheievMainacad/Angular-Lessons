import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "event-binding",
    templateUrl: "event-binding.component.html"
})
export class EventBindingComponent {
    onSave() {
        alert("saved.");
    }

    testEvent(event) {
        console.log(event)
    }
}