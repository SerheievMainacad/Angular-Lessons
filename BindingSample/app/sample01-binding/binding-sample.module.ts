import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent
} from "./index";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        InterpolationComponent,
        PropertyBindingComponent,
        EventBindingComponent,
        AttributeBindingComponent,
        ClassBindingComponent,
        StyleBindingComponent,
        
    ]
})
export class BindingSamplesModule {

}