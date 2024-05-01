fetch('cars.json')
    .then(response => response.json())
    .then(carsData => {
        const mappedCars = carsData.map(car => {
            return {
                name: car.Name,
                Kilometers_per_Liter: ((car.Miles_per_Gallon * 1.60934) / 3.78541).toFixed(2),
                Weight_in_kg: (car.Weight_in_lbs * 0.453592).toFixed(2),
                Year: car.Year.slice(0, 4),
                Horsepower: car.Horsepower,
                Origin: car.Origin,
                Cylinders: car.Cylinders
            };
        });
        const usaLower200 = mappedCars.filter(car => car.Origin === 'USA' && car.Horsepower < 200);
        const EurJapHigh4 = mappedCars.filter(car => (car.Origin === 'Europe' || car.Origin === 'Japan') && car.Cylinders > 4);
        console.log(mappedCars);

        const carsContainer = document.querySelector(".cars");
        const carsHTML = mappedCars.map(car => {
            let flagSrc = '';
            if (car.Origin === 'USA') {
                flagSrc = 'ussa.png';
            } else if (car.Origin === 'Europe') {
                flagSrc = 'eur.png';
            } else if (car.Origin === 'Japan') {
                flagSrc = 'japp.svg';
            }
            return `<div class="car">
                        <h2>${car.name}</h2>
                        <p>Kilometers per Liter: ${car.Kilometers_per_Liter}</p>
                        <p>Weight (kg): ${car.Weight_in_kg}</p>
                        <p>Year: ${car.Year}</p>
                        <p>Horsepower: ${car.Horsepower}</p>
                        <p>Cylinders: ${car.Cylinders}</p>
                         <img class="origin" src="${flagSrc}" alt="${car.Origin} flag">
                    </div>`;
        }).join('');

        carsContainer.innerHTML = carsHTML;
    })
    .catch(error => {
        console.error(error);
    });