const jwt = require('jsonwebtoken');
const { Domain, User } = require('../models');

exports.createToken = async (req, res) => {
    const { clientSecret } = req.body;
    try {
        const domain = await Domain.findOne({
            where: { clientSecret },
            include: {
                model: User,
                attribute: ['nick', 'id'],
            },
        });
        if (!domain) {
            return res.status(401).json({
                code: 401,
                message: '등록되지 않은 도메인이니까 도메인 등록 먼저해라',
            });
        }
        const token = jwt.sign({
            id: domain.User.id,
            nick: domain.User.nick,
        }, process.env.JWT_SECRET, {
            expiresIn: '1m',
            issuer: 'younju_nodebird',
        });
        return res.json({
            code: 200,
            message: '토큰이 발급되었다ㅏㅏ',
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러났다ㅏㅏ',
        });
    }
};


exports.tokenTest = (req, res) => {
    res.json(res.locals.decoded);
};