const Expense = require("./expense.model");

const { setError } = require("../../helpers/error/handle.error");

const getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find().populate("users")
    return res.json({
      status: 200,
      message: "Recovered all Expenses",
      data: { expenses },
    });
  } catch (error) {
    return next(setError(500, "Fail to recover Expenses"));
  }
};

const getExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    const expensebyid = await Expense.findById(id).populate("users")
    return res.status(200).json(expensebyid);
  } catch (err) {
    return next(err);
  }
};

const postExpense = async (req, res, next) => {
  try {
    const newExpense = new Expense(req.body);
    const newExpenseInDB = await newExpense.save();

    return res.json({
      status: 201,
      message: "Created Expense",
      data: { newExpenseInDB },
    });
  } catch (error) {}
};

const deleteExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    return res.status(200).json("Expense deleted");
  } catch (err) {
    return next(err);
  }
};


// const editExpense = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const expense = new Expense(req.body)
//     expense._id = id
//     const updateExpense = await Expense.findByIdAndUpdate(
//       id, expense);
//     return res.status(200).json(updateExpense);
//   } catch (err) {
//     return next(err);
//   }
// };

const editExpense = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { expenseId } = req.body;
    const updateExpense = await Expense.findByIdAndUpdate(
      expenseId,
      {
        $push: { users: userId },
      },
      { new: true }
    );
    return res.status(200).json(updateExpense);
  } catch (err) {
    return next(err);
  }
};



module.exports = {
  getExpenses,
  getExpense,
  postExpense,
  deleteExpense,
  editExpense,
};
