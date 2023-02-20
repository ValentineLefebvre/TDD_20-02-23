// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import {Coordinates} from ".";

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

const compute_one_axis_distance = function (coord_a:number, coord_b:number):number{
	return Math.abs(coord_a - coord_b);
}
const compute_manhattan_distance = function (pt_a:Coordinates, pt_b:Coordinates):number{
	return compute_one_axis_distance(pt_a.x,pt_b.x) + compute_one_axis_distance(pt_a.y,pt_b.y);
}

test("Manhattan 0", () => {
	const a:Coordinates = {x:0,y:0};
  	expect(compute_manhattan_distance(a,a)).toEqual(0)
});
test("Manhattan y1", () => {
	const a:Coordinates = {x:0,y:0};
	const b:Coordinates = {x:0,y:1};
  	expect(compute_manhattan_distance(a,b)).toEqual(1)
});
test("Manhattan y2", () => {
	const a:Coordinates = {x:0,y:1};
	const b:Coordinates = {x:0,y:2};
  	expect(compute_manhattan_distance(a,b)).toEqual(1)
});
test("Manhattan y3", () => {
	const a:Coordinates = {x:0,y:3};
	const b:Coordinates = {x:0,y:1};
  	expect(compute_manhattan_distance(a,b)).toEqual(2)
});
test("Manhattan y4", () => {
	const a:Coordinates = {x:0,y:0};
	const b:Coordinates = {x:0,y:-1};
  	expect(compute_manhattan_distance(a,b)).toEqual(1)
});
test("Manhattan y5", () => {
	const a:Coordinates = {x:0,y:6};
	const b:Coordinates = {x:0,y:-1};
  	expect(compute_manhattan_distance(a,b)).toEqual(7)
});
test("Manhattan x", () => {
	const a:Coordinates = {x:2,y:0};
	const b:Coordinates = {x:-3,y:0};
  	expect(compute_manhattan_distance(a,b)).toEqual(5);
});
test("Manhattan xy1", () => {
	const a:Coordinates = {x:0,y:0};
	const b:Coordinates = {x:1,y:1};
  	expect(compute_manhattan_distance(a,b)).toEqual(2);
});
test("Manhattan xy2", () => {
	const a:Coordinates = {x:-1,y:-1};
	const b:Coordinates = {x:1,y:1};
  	expect(compute_manhattan_distance(a,b)).toEqual(4);
});
test("Manhattan xy3", () => {
	const a:Coordinates = {x:1,y:1};
	const b:Coordinates = {x:-1,y:-1};
  	expect(compute_manhattan_distance(a,b)).toEqual(4);
});
test("Manhattan xy4", () => {
	const a:Coordinates = {x:1,y:-1};
	const b:Coordinates = {x:-1,y:1};
  	expect(compute_manhattan_distance(a,b)).toEqual(4);
});
test("Manhattan xy5", () => {
	const a:Coordinates = {x:-1,y:2};
	const b:Coordinates = {x:5,y:-3};
  	expect(compute_manhattan_distance(a,b)).toEqual(11);
});