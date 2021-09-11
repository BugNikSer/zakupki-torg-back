const { Client } = require('pg');

const client = new Client({
    ssl: { rejectUnauthorized: false },
    connectionString:
        'postgres://qutvtfdkoastzr:6e6526c7f4f36a1a322ca659beaa517117990fd49ce39746447c1400da36f1cc@ec2-52-209-171-51.eu-west-1.compute.amazonaws.com:5432/d1g3h8v0k7kae5',
});

const checkTables = () => {
    client
        .connect()
        .then(() => {
            client
                .query(
                    `CREATE TABLE IF NOT EXISTS auctions (
                id serial PRIMARY KEY,
                procedure VARCHAR (255) NOT NULL,
                budget real,
                customerId serial
                );`
                )
                .catch((e) => {
                    console.log('query auctions create error' + e);
                });
            client
                .query(
                    `CREATE TABLE IF NOT EXISTS customers (
                id serial PRIMARY KEY,
                title VARCHAR (255) NOT NULL,
                description VARCHAR (255) NOT NULL
                );`
                )
                .catch((e) => {
                    console.log('query customers create error' + e);
                });
            client
                .query(
                    `CREATE TABLE IF NOT EXISTS providers (
                id serial PRIMARY KEY,
                title VARCHAR (255) NOT NULL,
                description VARCHAR (255) NOT NULL
                );`
                )
                .catch((e) => {
                    console.log('query providers create error' + e);
                });
        })
        .catch((e) => {
            throw 'postgres error ' + e;
        });
};

const select = (table, filters) => {
    const reducedFilters = Object.entries(filters)
        .reduce((result, [key, value]) => {
            if (key === 'id' || key.slice(-2) === 'id') {
                result.push(`${key} = '${value}'`);
            } else {
                result.push(`${key} LIKE '${value}'`);
            }
            return result;
        }, [])
        .join(' AND ');

        console.log(`SELECT * FROM ${table}${reducedFilters === '' ? '' : ' WHERE ' + reducedFilters};`)

    return client
        .query(`SELECT * FROM ${table}${reducedFilters === '' ? '' : ' WHERE ' + reducedFilters};`)
        .then((res) => res.rows)
        .catch((e) => {
            throw `query error: ${e}`;
        });
};

const insert = (table, data) => {
    return client
        .query(
            `INSERT INTO ${table}(${Object.keys(data).join(
                ', '
            )}) VALUES ('${Object.values(data).join("', '")}') RETURNING id;`
        )
        .then(({ rows }) => {
            return rows[0];
        })
        .catch((e) => {
            throw `query error: ${e}`;
        });
};

module.exports = {
    checkTables,
    select,
    insert,
};
