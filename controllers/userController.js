// controllers/userController.js
class UserController {
    getUserInfo(req, res) {
        // Ensure the user is authenticated
        if (!req.user) {
            return res.status(401).json({ message: 'No user authenticated' });
        }
        res.status(200).json({ user: req.user });
    }
}

const userController = new UserController();
export default userController;
