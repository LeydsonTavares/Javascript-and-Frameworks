module.exports = {


    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'admin',
            password: '',
            database: 'node_mysql',
            port: '3306'
        },
        pool: {
            min: 2,
            max: 10
        }
    },

    production: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'admin',
            password: '',
            database: 'node_mysql',
            port: '3306'
        },
        pool: {
            min: 2,
            max: 10
        }
    }

};
