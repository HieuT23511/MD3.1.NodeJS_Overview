let listStudents = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
];
let maleStudents = listStudents.filter(elements =>
    elements.gender === "male");
let femaleStudents = listStudents.filter(elements =>
    elements.gender === "female");
let totalPointOfMaleStudent = maleStudents.reduce((prev, next) => prev + next.point, 0);
let totalPointOfFemaleStudent = femaleStudents.reduce((prev, next) => prev + next.point, 0);
let averagePointOfMaleStudent = totalPointOfMaleStudent / maleStudents.length;
let averagePointOfFemaleStudent = totalPointOfFemaleStudent / femaleStudents.length;
console.log(`Diem trung binh cua cac ban nam la ${averagePointOfMaleStudent}`);
console.log(`Diem trung binh cua cac ban nu la ${averagePointOfFemaleStudent}`);


