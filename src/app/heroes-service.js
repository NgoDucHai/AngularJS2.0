var HeroesService = (function () {
    function HeroesService() {
        this.heroes = [
            { name: "RubberMan", power: 'flexibility' },
            { name: "Tornado", power: 'Weather changer' }
        ];
    }
    HeroesService.prototype.getHeroes = function () {
        return this.heroes;
    };
    return HeroesService;
})();
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes-service.js.map