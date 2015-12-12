var HeroForm = (function () {
    function HeroForm(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return HeroForm;
})();
exports.HeroForm = HeroForm;
// Khi một đối tượng Hero được tạo thì TypeScript sẽ tự động làm các hành động
// let myHero = new Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
// console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
//Các Alterego là tùy chọn và các constructor cho phép chúng ta bỏ qua nó; lưu ý (?) trong Alterego ?. 
//# sourceMappingURL=hero_form.js.map