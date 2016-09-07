// from here: https://github.com/pleerock/ng2-radio-group

import { Component, Input, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { RadioComponent } from './radio.component';
import { RadioGroupService } from './radio-group.service';

@Component({
    selector: 'radio-group',
    directives: [ RadioComponent ],
    templateUrl: './radio-group.component.pug',
    providers: [ RadioGroupService ],
    // encapsulation: ViewEncapsulation.None,
})
export class RadioGroupComponent extends InputBase {

    @Input() fgd: FormGroupDirective;
    @Input() field: string;
    @Input() disabled: boolean = false;
    @Input() defaultValue: string;

    constructor(el: ElementRef, private service: RadioGroupService) {
        super(el);

        this.service.optionSelected$.subscribe((value) => {
            this.control.updateValue(value);
        });
    }

    public ngOnInit(): void {
        this.onInit();

        this.service.fieldName = this.field;
        this.service.defaultValue = this.defaultValue;
    }

    public addValidators(): void { }

}
