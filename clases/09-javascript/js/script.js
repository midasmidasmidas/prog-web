import { robots } from "./robots.js";

console.log(robots[0].name);

const {series, id, name} = robots[0];

console.log("----------------");
console.log(`La serie es: ${series}`);
console.log(`El id es: ${id}`);
console.log(`El nombre es: ${name}`);
console.log("----------------");

const getRobotById = (id='013') => // el ='013' es el valor por defecto en caso de llamar a la funcion sin añadir un argumento
{
    return robots.find((robot) =>
    {
        return robot.id === id;
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

console.log(getRobotById('001'));

const getRobotsBySeries = (series=1) =>
{
    return robots.filter((robot) =>
    {
        return robot.series === series;
    })
}

console.log("----------------");

// esto es identico a lo de arriba, pero no se usa un arrow function, sino que se llama a una funcion ya creada para conseguir el robot
// const getRobotsBySeries = (series=1) =>
// {
//     return robots.filter(getRobotSeries);
// }

// function getRobotSeries(robot)
// {
//     return robot.series === series;
// }

console.log(getRobotsBySeries(1));
console.table(getRobotsBySeries(1));

console.log("----------------");

// for (let i = 0; i < robots.length; i++)
// {
//     console.log(robots[i]);
// }

// for (const robot of robots)
// {
//     console.log(robot);
// }

// console.log("----------------");

const createCard = (series, id, name, weapon, avatar, sprite1) =>
{
    return `<div class="col-lg-1 col-md-4 col-sm-12">
            <div class="card">
                <img src="${avatar}" class="card-img-top" alt="${name}">
                <img src="${sprite1}" class="card-img-top m1- w-50" alt="${name}">
                <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p>${series}</p>
                <p>${weapon}</p>
            </div>
        </div>
    `;
}

const robotCardsRow = document.getElementById("robotCardsRow");
robots.map((robot) => 
{
    const card = createCard(robot.series, robot.id, robot.name, robot.weapon, robot.avatar, robot.sprite1);
    robotCardsRow.innerHTML += card;
});
