function solve() {
    const textarea = document.querySelector('textarea');
    const btn = document.getElementById('btnSend');
    const bestResto = document.querySelectorAll('#bestRestaurant p')[0];
    console.log(bestResto);
    const bestRestoWorkers = document.querySelectorAll('#workers p')[0];

    btn.addEventListener('click', onclick);

    let restaurants = {
        // name: {
        //     worker: salary:

        // }
    }
    function onclick() {

        const input = JSON.parse(textarea.value);

        input.forEach(resto => {
            let [name, workers] = resto.split(' - ');

            if (!restaurants.hasOwnProperty(name)) {
                restaurants[name] = {};
            }

            workers = workers.split(', ').forEach(w => {
                let [worker, salary] = w.split(' ');
                if (!restaurants[name].hasOwnProperty(worker)) {
                    restaurants[name][worker] = Number(salary);
                } else {
                    restaurants[name][worker] += Number(salary);
                }
            });
        });

        Object.entries(restaurants).forEach(x => {
            let [name, obj] = x;
            let s = Object.values(obj);
            let bestSalary = Math.max(...Object.values(obj));
            restaurants[name]['bestSalary'] = bestSalary;
            let averageSalary = s.reduce((a, c) => a + c, 0) / s.length;
            restaurants[name]['Average Salary'] = averageSalary;
        })


        let bestRestaurant = Object.entries(restaurants).sort((a, b) => b[1]['Average Salary'] - a[1]['Average Salary'])[0]
        
        bestResto.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1]['Average Salary'].toFixed(2)} Best Salary: ${bestRestaurant[1]['bestSalary'].toFixed(2)} `;

        delete bestRestaurant[1]['Average Salary'];
        delete bestRestaurant[1]['bestSalary'];

        let result = '';
        Object.entries(bestRestaurant[1]).sort((a, b) => b[1] - a[1]).forEach(worker => {
            result += `Name: ${worker[0]} With Salary: ${worker[1]} `
        })

        bestRestoWorkers.textContent = result.trim();
    }
}

//["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]