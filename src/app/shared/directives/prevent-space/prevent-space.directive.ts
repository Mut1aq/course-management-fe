import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventSpace]',
  standalone: true,
})
export class PreventSpaceDirective {
  @HostListener('keydown', ['$event']) onKeyDown($event: KeyboardEvent) {
    const { key, preventDefault } = $event;
    !key.trim() ? preventDefault() : null;
  }
}
