// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";

expect.extend(matchers);

// to run the tests : npx test

// au début, je n'avais pas trouvé la fonction abs donc je l'avais réécrite.
// const absolute_value = function (n:number):number{
// 	if (n < 0) {
// 		return -n
// 	}
// 	return n
// }

// test("Abs", () => {
//   expect(absolute_value(1)).toEqual(1);
// });
// test("Abs 0", () => {
//   expect(absolute_value(0)).toEqual(0);
// });
// test("Abs <0", () => {
//   expect(absolute_value(-1)).toEqual(1);
// });

type Coordinates = {
	x:number;
	y:number;
}


const taxicab = function (pt_a:Coordinates, pt_b:Coordinates):number{
	return Math.abs(pt_a.x - pt_b.x) + Math.abs(pt_a.y - pt_b.y)
}

test("Manhattan 0", () => {
	const a:Coordinates = {x:0,y:0};
  	expect(taxicab(a,a)).toEqual(0)
});
test("Manhattan y1", () => {
	const a:Coordinates = {x:0,y:0};
	const b:Coordinates = {x:0,y:1};
  	expect(taxicab(a,b)).toEqual(1)
});
test("Manhattan y2", () => {
	const a:Coordinates = {x:0,y:2};
	const b:Coordinates = {x:0,y:1};
  	expect(taxicab(a,b)).toEqual(1)
});
test("Manhattan x1", () => {
	const a:Coordinates = {x:0,y:0};
	const b:Coordinates = {x:1,y:0};
  	expect(taxicab(a,b)).toEqual(1);
});
test("Manhattan x2", () => {
	const a:Coordinates = {x:2,y:0};
	const b:Coordinates = {x:1,y:0};
  	expect(taxicab(a,b)).toEqual(1);
});
test("Manhattan xy1", () => {
	const a:Coordinates = {x:0,y:0};
	const b:Coordinates = {x:1,y:1};
  	expect(taxicab(a,b)).toEqual(2);
});
test("Manhattan xy2", () => {
	const a:Coordinates = {x:-1,y:-1};
	const b:Coordinates = {x:1,y:1};
  	expect(taxicab(a,b)).toEqual(4);
});