import mysql from 'mysql2/promise';

let mysqlconn = null;

export function mysqlconnFn() {

    if (!mysqlconn) {
        mysqlconn = mysql.createConnection({ 
            host: '127.0.0.1',
            user: 'root',
            password: '12345',
            database: 'mariadb'
        });
    }

    return mysqlconn;
}