function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs textarea');
   const bestRestaurantResult = document.querySelector('#bestRestaurant>p');
   const workersP = document.querySelector('#workers>p');

   function onClick() {

      const arr = JSON.parse(input.value);
      let restaurants = {};
      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         let workersArr = tokens[1].split(', ');
         let workers = [];

         for (let worker of workersArr) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary })
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary)
         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary / workers.length, 0 );

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
         let bestRestaurantsSalary = 0;
         let bestRestaurant = undefined;
         for(const name in restaurants) {
            if(restaurants[name].averageSalary > bestRestaurantsSalary) {
               bestRestaurant = {name, 
                  workers: restaurants[name].workers,
                  bestSalary:restaurants[name].bestSalary,
                  averageSalary: restaurants[name].averageSalary   
               }
               bestRestaurantsSalary = restaurants[name].averageSalary;
            }
         }
         bestRestaurantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
         let workersResult = [];
         bestRestaurant.workers.forEach(worker => {workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)});
         
         workersP.textContent = workersResult.join(' ');
      });
   
   }
}