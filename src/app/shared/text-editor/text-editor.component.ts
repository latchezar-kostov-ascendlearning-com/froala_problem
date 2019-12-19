import { Component, forwardRef, Input, SimpleChanges, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextEditorOptions } from './text-editor-options';
import { TextEditorToolbarButtons, defaultTextEditorToolbarButtons } from './text-editor-toolbar-buttons.enum';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextEditorComponent),
      multi: true
    }
  ]
})
export class TextEditorComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() placeholderText = 'Insert text here...';
  @Input() showCharacterCount = false;
  @Input() characterCountMax = 1000;
  @Input() heightMin = 300;
  @Input() toolbarButtons: Array<TextEditorToolbarButtons> = defaultTextEditorToolbarButtons;
  @Output() contentChanged = new EventEmitter<any>();

  public model: any;
  public editorOptions: TextEditorOptions;
  public isInitialized = true;
  private froalaControl: any;

  constructor() { }

  ngOnInit() {
    this.updateEditorOptions();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateEditorOptions();
  }

  // Begin ControlValueAccesor methods.
  public onChange = (_) => {};
  public onTouched = () => {};

  // Form model content changed.
  public writeValue(content: any): void {
    this.model = content;
  }

  public registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  public registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  // End ControlValueAccesor methods.

  public initialize(initControls: any) {
    this.froalaControl = initControls;
    if (this.froalaControl) {
      this.froalaControl.initialize();
    }
  }

  public onContentChanged(content: any) {
    if (this.onChange) {
      this.onChange(content);
    }
    this.contentChanged.emit(content);
  }

  private updateEditorOptions() {
    if (!this.toolbarButtons) {
      this.toolbarButtons = defaultTextEditorToolbarButtons;
    }

    this.editorOptions = {
      key: 'SDB17hC8E7E6D4A3G3gKTRe2CG1PGe1DESAe1Kg1EBC1Pe2TKoF4I4B3B9A3B5F6B2B3D4==fdsafdaadsfads',
      placeholderText: this.placeholderText,
      attribution: false,
      charCounterCount: this.showCharacterCount,
      charCounterMax: this.characterCountMax,
      heightMin: this.heightMin,
      toolbarButtons: this.toolbarButtons,
      toolbarButtonsXS: this.toolbarButtons,
      toolbarButtonsSM: this.toolbarButtons,
      toolbarButtonsMD: this.toolbarButtons
    };

    if (this.froalaControl) {
      const editor = this.froalaControl.getEditor();
      if (editor) {
        this.isInitialized = false;
        if (editor.opts) {
          editor.opts = Object.assign(editor.opts, this.editorOptions);
        }
        this.froalaControl.destroy();
        this.initialize(this.froalaControl);
        this.isInitialized = true;
      }
    }
  }
}
