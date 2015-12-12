export class HeroForm {
	constructor(
		public id: number,
		public name: string,
		public power: string,
		public alterEgo?: string
	) { }
}

// Khi một đối tượng Hero được tạo thì TypeScript sẽ tự động làm các hành động
// let myHero = new Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
// console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
//Các Alterego là tùy chọn và các constructor cho phép chúng ta bỏ qua nó; lưu ý (?) trong Alterego ?.