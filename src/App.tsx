import './App.css'

export interface Vehicle {
  make: string
  model: string
  year: number
  start(): void
}

export class Car implements Vehicle {
  make: string
  model: string
  year: number

  constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
  }

  start(): void {
    console.log('Car engine started')
  }
}

const car: Vehicle = new Car('Toyota', 'Corolla', 2024)
car.start()

function App() {
  return (
    <main className="vehicle-example">
      <h1>Vehicle example</h1>
      <p>This car implements the Vehicle interface.</p>
      <dl>
        <div>
          <dt>Make</dt>
          <dd>{car.make}</dd>
        </div>
        <div>
          <dt>Model</dt>
          <dd>{car.model}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{car.year}</dd>
        </div>
      </dl>
    </main>
  )
}

export default App
