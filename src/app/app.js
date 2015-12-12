var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var hero_1 = require('./hero');
var hero_form_component_1 = require('./hero_form.component');
var nameService_1 = require('./nameService');
//-----------------------------------------
var edit_item_1 = require('./edit-item');
var heroes_service_1 = require('./heroes-service');
var hero_card_component_1 = require('./hero-card.component');
var hero_editor_component_1 = require('./hero-editor.component');
//-------------------Display Data----------------------
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm'),
            new hero_1.Hero(13, 'Bombasto'),
            new hero_1.Hero(15, 'Magneta'),
            new hero_1.Hero(20, 'Tornado')
        ];
        this.myHero = this.heroes[0];
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n  <h1>Displaying Data</h1>\n  <h1>{{title}}</h1>\n  <h2>My favorite hero is: {{myHero.name}}</h2>\n  <p>Heroes:</p>\n  <ul>\n    <li *ng-for=\"#hero of heroes\">\n      {{ hero.id }}\n\t\t- {{ hero.name }}\n      </li>\n  </ul>\n  <p *ng-if=\"heroes.length > 3\">There are many heroes!</p>\n",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//bootstrap(AppComponent);
//-------------------------------Componet Event------------------
var ClickMeComponent = (function () {
    function ClickMeComponent() {
    }
    ClickMeComponent.prototype.onClickMe = function () {
        alert('You are my hero!');
    };
    ClickMeComponent = __decorate([
        angular2_1.Component({
            selector: 'click-me',
            template: '<button (click)="onClickMe()">Click me </button>'
        }), 
        __metadata('design:paramtypes', [])
    ], ClickMeComponent);
    return ClickMeComponent;
})();
//bootstrap(ClickMeComponent);
//-------------------------User Input----------------------
var KeyUpComponent = (function () {
    function KeyUpComponent() {
        this.values = '';
    }
    KeyUpComponent.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    KeyUpComponent = __decorate([
        angular2_1.Component({
            selector: 'key-up',
            template: "\n    <h4>Give me some keys!</h4>\n    <div><input (keyup)=\"onKey($event)\"></div>\n    <div>{{values}}</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyUpComponent);
    return KeyUpComponent;
})();
//bootstrap(KeyUpComponent);
var KeyUpComponentV3 = (function () {
    function KeyUpComponentV3() {
        this.values = '';
    }
    KeyUpComponentV3 = __decorate([
        angular2_1.Component({
            selector: 'key-up3',
            template: "\n    <h4>Type away! Press [enter] when done.</h4>\n    <div><input #box (keyup.enter)=\"values=box.value\"></div>\n    <div>{{values}}</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyUpComponentV3);
    return KeyUpComponentV3;
})();
var KeyUpComponentV4 = (function () {
    function KeyUpComponentV4() {
        this.values = '';
    }
    KeyUpComponentV4 = __decorate([
        angular2_1.Component({
            selector: 'key-up4',
            template: "\n    <h4>Type away! Press [enter] or mouse away when done.</h4>\n    <div>\n      <input #box \n        (keyup.enter)=\"values=box.value\" \n        (blur)=\"values=box.value\">\n    <div>\n    <div>{{values}}</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyUpComponentV4);
    return KeyUpComponentV4;
})();
var LittleTour = (function () {
    function LittleTour() {
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    }
    LittleTour.prototype.addHero = function (newHero) {
        if (newHero.value) {
            this.heroes.push(newHero.value);
            newHero.value = null; // clear the newHero textbox
        }
    };
    LittleTour = __decorate([
        angular2_1.Component({
            selector: 'little-tour',
            template: "\n    <h4>Little Tour of Heroes</h4>\n    <input #new-hero \n      (keyup.enter)=\"addHero(newHero)\"\n      (blur)=\"addHero(newHero)\">\n    <button (click)=addHero(newHero)>Add</button>\n    <ul><li *ng-for=\"#hero of heroes\">{{hero}}</li></ul>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], LittleTour);
    return LittleTour;
})();
//bootstrap(LittleTour);
//---------------------------Form ----------------------------
var AppComponentForm = (function () {
    function AppComponentForm() {
    }
    AppComponentForm = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: '<hero-form></hero-form>',
            directives: [hero_form_component_1.HeroFormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentForm);
    return AppComponentForm;
})();
angular2_1.bootstrap(AppComponentForm);
//-----------------------Dependency Inject ------------------
var App = (function () {
    function App(NameService) {
        this.name = NameService.getName();
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app1',
            template: '<h1>Hello {{name}}!</h1>'
        }), 
        __metadata('design:paramtypes', [nameService_1.NameService])
    ], App);
    return App;
})();
//bootstrap(App, [NameService]);
//-----------------------heroes-list----------------------
var HeroesListComponent = (function () {
    function HeroesListComponent(heroesService) {
        this.heroes = heroesService.getHeroes()
            .map(function (item) { return new edit_item_1.EditItem(item); });
    }
    HeroesListComponent.prototype.onSaved = function (editItem, updatedHero) {
        editItem.item = updatedHero;
        editItem.editing = false;
    };
    HeroesListComponent.prototype.onCanceled = function (editItem) {
        editItem.editing = false;
    };
    HeroesListComponent = __decorate([
        angular2_1.Component({
            selector: 'heroes-list-component',
            template: "\n    <div>\n      <ul>\n        <li *ng-for=\"#editItem of heroes\">\n          <hero-card-component\n            [hidden]=\"editItem.editing\"\n            [hero]=\"editItem.item\">\n          </hero-card-component>\n          <button\n            [hidden]=\"editItem.editing\"\n            (click)=\"editItem.editing = true\">\n              edit\n          </button>\n          <hero-editor-component\n            (saved)=\"onSaved(editItem, $event)\"\n            (canceled)=\"onCanceled(editItem)\"\n            [hidden]=\"!editItem.editing\"\n            [hero]=\"editItem.item\">\n          </hero-editor-component>\n        </li>\n      </ul>\n    </div>",
            directives: [angular2_1.CORE_DIRECTIVES, hero_card_component_1.HeroCardComponent, hero_editor_component_1.HeroEditorComponent]
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService])
    ], HeroesListComponent);
    return HeroesListComponent;
})();
exports.HeroesListComponent = HeroesListComponent;
var EditItem = (function () {
    function EditItem(item) {
        if (item === void 0) { item = T; }
        this.item = item;
    }
    return EditItem;
})();
//bootstrap(HeroesListComponent, [HeroesService]); 
//# sourceMappingURL=app.js.map