import { Component, signal } from '@angular/core';

type TypeGrade = "A" | "B" | "F"
@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<TypeGrade>("B");

  public toggleContent() {
    this.showContent.update(currentValue => !currentValue)
  }


}
