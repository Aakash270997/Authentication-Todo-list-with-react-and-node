class PUBLIC_Data{

    static port = process.env.PORT || 4000
    static mongo_url = process.env.MONGO_URL || `mongodb://127.0.0.1:27017/Todo-list-dashborad`
    // static jwt_auth = process.env.JWT_AUTH || "#%^$^%&^#^%@^%%$(%*^$%$)"
}

module.exports = {
    PUBLIC_Data
}