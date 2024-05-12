import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import passport from 'passport';
const JWT_SECRET = 'your_jwt_secret';
class AuthController {
    async signup(req, res) {
        const { username, password, name, type, age } = req.body;
        if (!username || !password) {
            return res.status(400).send({ message: 'Username and password required.' });
        }
        try {
            const userExists = await User.findOne({ where: { username } });
            if (userExists) {
                return res.status(409).send({ message: 'User already exists.' });
            }
            const user = await User.create({ username, password, name, type, age});
            res.status(201).send({ id: user.id, username: user.username });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    async login(req, res) {
        passport.authenticate('local', { session: false }, (err, user, info) => {
            if (err || !user) {
                console.log(err, user, info)
                return res.status(400).send(info);
            }
            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
            return res.status(200).send({ token });
        })(req, res);
    }
    async logout(req, res) {
        // Note: JWT does not have a server-side logout mechanism in stateless mode.
        // To "logout", the client should discard the token. This function is a placeholder.
        res.status(200).send({ message: 'Logged out successfully' });
    }
}
const authController = new AuthController();
export default authController;
