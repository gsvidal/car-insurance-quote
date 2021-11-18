// Obtain year difference (between option selected and current)
export function getYearDiff(year) {
  return new Date().getFullYear() - year;
}

// Calculate total to pay according to brand
export function getBrand(brand) {
  let increment;

  switch(brand) {
    case "European":
      increment = 1.3;
      break;
    case "American":
      increment = 1.15;
      break;
    case "Asian":
      increment = 1.05;
      break;    
    default: 
      break;
  }

  return increment;
}

// Calculate insurance type
export function getPlan(plan) {
  return (plan === "Basic" ? 1.20 : 1.50);
}