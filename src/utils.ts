import { client } from "../database/db"
client.connect();


export const createUserTable = async() => {
    const query = `
         CREATE TABLE users (
            id int primary key,
            email varchar,
            firstName varchar,
            lastName varchar,
            age int
        );
    `;

    try {
        const res = await client.query(query);
        console.log("Table has been create successfully");
    }
    catch (err) {
        console.error(err);
    }
}


export const listTables = async () => {
    const query = `
    SELECT table_name 
    FROM infromation_schema.tables
    WHERE table_schema = 'public'
    ORDER BY table_name:`

    try {
        const res = await client.query(query);
        console.log("Table has been create successfully");
    } catch (err) {
        console.error(err);
    } 
}