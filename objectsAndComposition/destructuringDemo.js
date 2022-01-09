const department = {
    name: 'Engineering',
    data: {
        director: {
            name: 'Alex',
            position: 'Engineering Director',
            hobbies: {
                first: 'sleeping',
                second: 'eating'
            }
        },
        employees: [],
        company: 'Quick Build'
    }
};

const { data: { director: { hobbies } } } = department;
console.log(hobbies);

const employees = [
    { name: 'Alex', position: 'Worker' },
    { name: 'Sofia', position: 'Secretary' }
];

const [{name}] = employees;
console.log(name);
