import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public characterCountMax = 100;
  public form: FormGroup;
  public textFormControlName = 'textFormControl';
  public textFormControl: FormControl;
  public textEditor1Value: string;
  public textEditor2Value: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.textFormControl = this.fb.control('');
    this.form = this.fb.group({
      [this.textFormControlName]: this.textFormControl
    });
  }

  public onContentChanged(content: any) {
    this.textEditor1Value = content;
  }

  public onSubmit() {
    this.textEditor2Value = this.form.get(this.textFormControlName).value;
  }

}
