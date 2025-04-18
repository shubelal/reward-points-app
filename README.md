# Author
Shubelal Kumar

# Reward Points App

A React application that calculates reward points based on customer transactions.

# Reward Points App

This React application calculates and displays customer reward points based on purchase transactions over a 3-month period.

## 💡 Features

- Calculates reward points using business rules:
  - No points for purchases ≤ $50
  - 1 point for every $1 between $51–$100
  - 2 points for every $1 above $100

- Displays 3 tables:
  - **Monthly Rewards**
  - **Total Rewards**
  - **Transactions**
- Asynchronous data simulation
- Pure functions for all calculations
- Dynamic aggregation by month and year
- Responsive UI and loading states
- Jest unit tests included
- No Redux or TypeScript
- ESLint setup included

## 🔍 Notes
- Data is dynamically sorted by date
- Localized month/year formatting
- Decimal precision is handled
- No console logs in production
- Uses PropTypes for validation

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```
### Compiles and minifies for production
```
npm run build
```
### Compiles and Test
```
npm start
```


