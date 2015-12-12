import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import { HeroForm } from './hero_form';
@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero_form.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new HeroForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}