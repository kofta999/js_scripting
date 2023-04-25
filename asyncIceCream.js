// TODO: add support for picking fruits etc instead of using index 0

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

let isShopOpen = true

// USING PROMISES

// let order = (time, work) => new Promise((resolve, reject) => {
//   isShopOpen ?
//   setTimeout(() => {
//     resolve( work() )
//   }, time)
//   :
//     reject(console.log("we're closed"))
// })

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`) )

// .then( () => order(0000, () => console.log("Prod has started")) )

// .then( () => order(2000, () => console.log("Fruit was chopped")) )

// .then( () => order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`)) )

// .then( () => order(1000, () => console.log("started the machine")) )

// .then( () => order(2000, () => console.log(`holder ${stocks.holder[0]} was used`)) )

// .then( () => order(3000, () => console.log(`${stocks.toppings[0]} was selected`)) )

// .then( () => order(1000, () => console.log("icecream was served")) )

// .catch( () => console.log("customer has left"))

// .finally( () => console.log("day ended, shop is closed"))


// USING ASYNC/AWAIT

const time = (ms) => new Promise( (resolve, reject) => {
  isShopOpen ?
  setTimeout(resolve, ms)
  :
  reject(console.log("shop closed"))
} )


async function kitchen () {
  try {
    await time(2000)
    console.log(`${stocks.fruits[0]} was selected`)

    await time(0000)
    console.log("Prod has started")

    await time(2000)
    console.log("Fruit was chopped")

    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`)

    await time(1000)
    console.log("started the machine")

    await time(2000)
    console.log(`holder ${stocks.holder[0]} was used`)

    await time(3000)
    console.log(`${stocks.toppings[0]} was selected`)

    await time(1000)
    console.log("icecream was served")

  } catch (error) {
    console.log("cusomter left", error)
  } finally {
    console.log("day ended")
  }
}

kitchen()