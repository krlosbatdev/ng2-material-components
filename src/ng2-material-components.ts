import { NgTranscludeDirective } from './common';

export { NgTranscludeDirective } from './common';

export const MATERIAL_COMMON = [
    NgTranscludeDirective,
];

export { isMobile } from  './utils/utilities';

import { ControlWithType } from './models/control-with-type';
import { DateRange } from './models/date-range';
import { MenuItem } from './models/menu-item';
import { SelectionItem } from './models/selection-item';
import { SubmitableFormGroup } from './models/submitable-form-group';
import { ValidationInfo } from './models/validation-info';

export { ControlWithType } from './models/control-with-type';
export { DateRange } from './models/date-range';
export { MenuItem } from './models/menu-item';
export { SelectionItem } from './models/selection-item';
export { SubmitableFormGroup } from './models/submitable-form-group';
export { ValidationInfo } from './models/validation-info';

export const MATERIAL_MODELS = [
    ControlWithType,
    DateRange,
    MenuItem,
    SelectionItem,
    SubmitableFormGroup,
    ValidationInfo,
];

export * from './forms/material-forms.module';
export * from './user-interface/material-user-interface.module';
