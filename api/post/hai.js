const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
});

module.exports = {
    category: 'post',
    path: true,
    post: true,
    paramsFile: { message: 'halo" },
    async run(req, res) {
        return "hello"
    }
};
