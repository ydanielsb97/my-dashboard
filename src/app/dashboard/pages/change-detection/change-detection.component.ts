import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title title="Change Detection" />
    <pre>
      {{ frameworkAsSignal() | json }}
    </pre>
    <pre>
      {{ frameworkAsProperty | json }}
    </pre>
  `
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: "Angular",
    releaseYear: 2016
  })

  public frameworkAsProperty = {
    name: "Angular",
    releaseYear: 2016
  }

  constructor(){
    setTimeout(() => {

      // this.frameworkAsSignal.update(value => ({ 
      //   ...value,
      //   name: "React"
      // }))
      this.frameworkAsProperty.name = 'React';

      console.log("Hecho")
    }, 3000);
  }
}
