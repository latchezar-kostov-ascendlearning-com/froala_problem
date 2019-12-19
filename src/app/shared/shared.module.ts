import { NgModule } from '@angular/core';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    declarations: [
        TextEditorComponent
    ],
    imports: [
        FroalaEditorModule,
        FroalaViewModule
    ],
    exports: [
        TextEditorComponent
    ]
})
export class SharedModule {}
