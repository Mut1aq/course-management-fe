import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-control-errors',
  standalone: true,
  imports: [NgIf, TranslateModule],
  templateUrl: './form-control-errors.component.html',
  styleUrl: './form-control-errors.component.scss',
})
export class FormControlErrorsComponent implements OnChanges {
  @Input({ required: true })
  controlToValidate!: AbstractControl<string | number> | null;

  @Input({ required: true }) translationName!: string;

  ngOnChanges(changes: SimpleChanges) {
    this.controlToValidate = changes['controlToValidate'].currentValue;
    this.translationName = changes['translationName'].currentValue;
  }
}
