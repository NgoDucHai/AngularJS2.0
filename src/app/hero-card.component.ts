import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero1';

@Component({
	selector: 'hero-card-component',
	properties: ['hero']
})
@View({
	template: `
    <div>
      <span>Name:</span>
      <span>{{hero.name}}</span>
    </div>
    <div>
      <span>Power:</span>
      <span>{{hero.power}}</span>
    </div>`,
	directives: [CORE_DIRECTIVES]
})
export class HeroCardComponent {
	hero: Hero;
}