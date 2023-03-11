import db from '../models/index';
class HomeController {

    getHomePage = async (req, res) => {
        try {
            let data = await db.User.findAll();
            console.log('data :>> ', data);
            return res.render('homepage.ejs', {
                data: JSON.stringify(data)
            })
        } catch (error) {
            console.log('error :>> ', error);
        }


    }
}

module.exports = new HomeController();