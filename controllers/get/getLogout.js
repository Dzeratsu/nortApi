let logout = {
    status: true,
    message: 'You are exit',
    token: ''
}
export const getLogout = async (req, res) => {
    res.status(200).json(logout)
}