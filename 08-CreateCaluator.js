function createCalculator(total) {

    return {
         add(value) { 
            total += value;
            return total;
          },
          subtract(value) {
            total -= value;
            return total;
          },
          multiply(value) {
            total *= value;
            return total;
          },
          divide(value) {
            total /= value;
            return total;
          }, 
          clear() {
            total = 0;
            return total;
          },
          getTotal() {
            return total;
          }
    }

  }

  console.log(createCalculator(3 ).add(2))
  console.log(createCalculator(3 ).subtract(2))
  console.log(createCalculator(3 ).multiply(2))
  console.log(createCalculator(3 ).divide(2))
  console.log(createCalculator(3 * 4).clear())
  console.log(createCalculator(3 ).getTotal())