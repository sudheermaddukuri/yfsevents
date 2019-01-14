import { NgModule } from '@angular/core';

import { YfseventsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [YfseventsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [YfseventsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class YfseventsSharedCommonModule {}
