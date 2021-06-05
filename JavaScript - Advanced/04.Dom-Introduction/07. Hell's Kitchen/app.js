function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const bestOutput = document.querySelector('#bestRestaurant p');
      const workersOutput = document.querySelector('#workers p');
      let restaurantsObject ={}
      let restaurantsArray = [];

      for (const restaurant of input) {
         let [name, workersArray] = restaurant.split(' - ');
         let workers = workersArray.split(', ').map(x => {
             let y = x.split(' '); 
             return {name:y[0], salary:Number(y[1])}});
         if(restaurantsObject[name]){
            workers = workers.concat(restaurantsObject[name].workers);
         }
         let averageSalary = Number(
            (workers.map(x => x.salary)
            .reduce((acc, y) => acc+y) / workers.length)
            .toFixed(2));
         workers.sort((a,b) => b.salary - a.salary);
         restaurantsObject[name] = ({name, workers, averageSalary});
      }
      restaurantsArray = Object.values(restaurantsObject);
      restaurantsArray.sort((a,b) => b.averageSalary - a.averageSalary);

      let bestName = restaurantsArray[0].name;
      let bestAverage = restaurantsArray[0].averageSalary.toFixed(2);
      let bestSalary =restaurantsArray[0].workers[0].salary.toFixed(2);
      bestOutput.textContent = `Name: ${bestName} Average Salary: ${bestAverage} Best Salary: ${bestSalary}`;

      let workersText = '';
      for (const worker of restaurantsArray[0].workers) {
         workersText += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
      workersOutput.textContent = workersText.trim();
   }
}