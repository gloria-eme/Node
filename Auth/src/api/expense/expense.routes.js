const ExpenseRoutes = require('express').Router()

const {isAuth} = require("../../middlewares/auth.middleware.js")
//nos traemos la función que verifica la autenticación con el token

const { getExpenses, getExpense, postExpense, deleteExpense, editExpense } = require('./expense.controller')

//la ruta aparece sólo después de la autenticación
ExpenseRoutes.get("/", getExpenses);
ExpenseRoutes.get("/:id", getExpense);
ExpenseRoutes.post("/", [isAuth], postExpense);
ExpenseRoutes.delete("/:id", [isAuth], deleteExpense);
ExpenseRoutes.put("/", [isAuth], editExpense)

module.exports = ExpenseRoutes