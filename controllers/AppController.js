const redisUtils = require("../utils/redis");
const dbUtils = require("../utils/db");

class AppController {
  static getStatus(request, response) {
    response
      .status(200)
      .json({ redis: redisUtils.isAlive(), db: dbUtils.isAlive() });
  }

  static async getStats(request, response) {
    const usersNum = await dbUtils.nbUsers();
    const filesNum = await dbUtils.nbFiles();
    response.status(200).json({ users: usersNum, files: filesNum });
  }
}

module.exports = AppController;
