import {enablePromise} from 'react-native-sqlite-storage';
import {connectDB} from './db-service';

const tableName = 'user';

enablePromise(true);

export const createTable = async () => {
  try {
    const db = await connectDB();
    await db.transaction(txn => {
      txn.executeSql(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`,
        [],
        (tx, result) => {
          if (result?.rows.length === 0) {
            txn.executeSql(`DROP TABLE IF EXISTS ${tableName}`, []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS ${tableName}(id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(30), name VARCHAR(50), email VARCHAR(50))`,
              [],
            );
          }
        },
      );
    });
  } catch (error) {
    console.log('Error while creating user table');
  }
};

export const getUser = async username => {
  try {
    const db = await connectDB();
    const result = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE username='${username}'`,
      [],
    );
    const resultItem = [];
    result.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        resultItem.push(result.rows.item(index));
      }
    });
    return resultItem;
  } catch (error) {
    console.log('Error while reteriving user======>', error);
  }
};

export const addUser = async userData => {
  try {
    const db = await connectDB();
    const results = await db.executeSql(
      `INSERT INTO ${tableName} (username, name, email) VALUES (?,?,?)`,
      [userData?.username, userData?.name, userData?.email],
    );
    let success = false;
    results.forEach(result => {
      const value = result?.rowsAffected > 0 ? true : false;
      success = value;
    });
    return success;
  } catch (error) {
    console.log('Error while adding user=====>', error);
  }
};

export const updateUser = async userData => {
  try {
    const db = await connectDB();
    const results = await db.executeSql(
      `UPDATE ${tableName} SET name=?, email=? WHERE username=?`,
      [userData?.name, userData?.email, userData?.username],
    );
    let success = false;
    results.forEach(result => {
      success = result.rowsAffected > 1 ? true : false;
    });
    return success;
  } catch (error) {
    console.log('Error while updating user', error);
  }
};

export const deleteUser = async username => {
  try {
    const db = await connectDB();
    const results = await db.executeSql(
      `DELETE FROM ${tableName} WHERE username=?`,
      [username],
    );
    let success = false;
    results?.forEach(element => {
      success = element?.rowsAffected > 0 ? true : false;
    });
    return success;
  } catch (error) {
    console.log('delele user error', error);
  }
};
