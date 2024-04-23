import { robots } from "./robots.js";

console.log(robots[0].name);

const {series, id, name} = robots[0];

console.log("----------------");
console.log(`La serie es: ${series}`);
console.log(`El id es: ${id}`);
console.log(`El nombre es: ${name}`);
console.log("----------------");

const getRobotById = (id='013') =>
{
    return robots.find((robot) =>
    {
        return robot.id === id
    });
}

// la funcion de arriba es idéntica a esto
// function getRobotById(id='013')
// {
//     return robots.find((robot) =>
//     {
//         return robot.id === id
//     });
// }

console.log(getRobotById('000'));

// for (let i = 0; i < robots.length; i++)
// {
//     console.log(robots[i]);
// }

// for (const robot of robots)
// {
//     console.log(robot);
// }