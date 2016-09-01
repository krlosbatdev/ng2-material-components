import { Component } from '@angular/core';
import { processComponents } from '../demo-base/demo-base';
import { MATERIAL_ALL } from '../../../../dist/ng2-material-components';

// components
import { DemoCardComponent } from './card/card';



const components: any[] = [
    { category: 'user-interface', key: 'card', component: DemoCardComponent },

];

const content = {};
processComponents(components);

@Component({
    template: require('./demo-user-interface.jade')({ content, components }),
    directives: [ MATERIAL_ALL ].concat(components.map((c: any) => c.component)),
})
export class DemoUserInterfaceRoute {

}