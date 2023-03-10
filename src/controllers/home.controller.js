
class HomeController {

    getHomePage = (req, res) => {
        return res.render('homepage.ejs')
    }
}

module.exports = new HomeController();