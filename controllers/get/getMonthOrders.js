let date = {
    "date": 123,
    "date2": "testDate"
}
export const getMonthOrders = (req, res) => {
    res.status(200).json(date)
}