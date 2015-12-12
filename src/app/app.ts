import {Component, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';
import {HeroFormComponent} from './hero_form.component';
import {NameService} from './nameService';

//-----------------------------------------
import {EditItem} from './edit-item';
import {HeroesService} from './heroes-service';
import {RestoreService} from './restore-service';
import {HeroCardComponent} from './hero-card.component';
import {HeroEditorComponent} from './hero-editor.component';
import {Hero} from './hero1';



//-------------------Display Data----------------------
@Component({
  selector: 'my-app',
  template: `
  <h1>Displaying Data</h1>
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ng-for="#hero of heroes">
      {{ hero.id }}
		- {{ hero.name }}
      </li>
  </ul>
  <p *ng-if="heroes.length > 3">There are many heroes!</p>
`,
  directives: [CORE_DIRECTIVES]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
}
//bootstrap(AppComponent);
//-------------------------------Componet Event------------------
@Component({
	selector: 'click-me',
	template: '<button (click)="onClickMe()">Click me </button>'
})
class ClickMeComponent {
	onClickMe() {
		alert('You are my hero!')
	}
}
//bootstrap(ClickMeComponent);
//-------------------------User Input----------------------

@Component({
	selector: 'key-up',
	template: `
    <h4>Give me some keys!</h4>
    <div><input (keyup)="onKey($event)"></div>
    <div>{{values}}</div>
  `
})
class KeyUpComponent {
	values = '';
	onKey(event) {
		this.values += event.target.value + ' | ';
	}
}

//bootstrap(KeyUpComponent);
@Component({
	selector: 'key-up3',
	template: `
    <h4>Type away! Press [enter] when done.</h4>
    <div><input #box (keyup.enter)="values=box.value"></div>
    <div>{{values}}</div>
  `
})
class KeyUpComponentV3 {
	values = '';
}

@Component({
	selector: 'key-up4',
	template: `
    <h4>Type away! Press [enter] or mouse away when done.</h4>
    <div>
      <input #box 
        (keyup.enter)="values=box.value" 
        (blur)="values=box.value">
    <div>
    <div>{{values}}</div>
  `
})
class KeyUpComponentV4 {
	values = '';
}

@Component({
	selector: 'little-tour',
	template: `
    <h4>Little Tour of Heroes</h4>
    <input #new-hero 
      (keyup.enter)="addHero(newHero)"
      (blur)="addHero(newHero)">
    <button (click)=addHero(newHero)>Add</button>
    <ul><li *ng-for="#hero of heroes">{{hero}}</li></ul>
  `,
	directives: [CORE_DIRECTIVES]
})

class LittleTour {
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	addHero(newHero) {
		if (newHero.value) {
			this.heroes.push(newHero.value);
			newHero.value = null; // clear the newHero textbox
		}
	}
}

//bootstrap(LittleTour);
//---------------------------Form ----------------------------

@Component({
	selector: 'my-app',
	template: '<hero-form></hero-form>',
	directives: [HeroFormComponent]
})
class AppComponentForm { }
bootstrap(AppComponentForm);

//-----------------------Dependency Inject ------------------


@Component({
  selector: 'app1'
  template: '<h1>Hello {{name}}!</h1>'
})
class App {
  constructor(NameService: NameService) {
    this.name = NameService.getName();
  }
}

//bootstrap(App, [NameService]);


//-----------------------heroes-list----------------------
@Component({
  selector: 'heroes-list-component'
  template: `
    <div>
      <ul>
        <li *ng-for="#editItem of heroes">
          <hero-card-component
            [hidden]="editItem.editing"
            [hero]="editItem.item">
          </hero-card-component>
          <button
            [hidden]="editItem.editing"
            (click)="editItem.editing = true">
              edit
          </button>
          <hero-editor-component
            (saved)="onSaved(editItem, $event)"
            (canceled)="onCanceled(editItem)"
            [hidden]="!editItem.editing"
            [hero]="editItem.item">
          </hero-editor-component>
        </li>
      </ul>
    </div>`,
  directives: [CORE_DIRECTIVES, HeroCardComponent, HeroEditorComponent]
})
export class HeroesListComponent {
  heroes: Array<Hero>;
  constructor(heroesService: HeroesService) {
    this.heroes = heroesService.getHeroes()
      .map(item => new EditItem(item));
  }

  onSaved(editItem: EditItem<Hero>, updatedHero: Hero) {
    editItem.item = updatedHero;
    editItem.editing = false;
  }

  onCanceled(editItem: EditItem<Hero>) {
    editItem.editing = false;
  }
}

class EditItem<T> {
  item: T;
  editing: boolean
  constructor(public item T) { }
}

//bootstrap(HeroesListComponent, [HeroesService]);