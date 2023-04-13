import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

const tableName = 'quizScore';

enablePromise(true);

function errorCB(err) {
  console.log('SQL Error: ' + err);
}

function openCB() {
  console.log('Database OPENED');
}

//Making database connection
export const connectDB = async () => {
  return await openDatabase(
    {name: 'quizzer.db', createFromLocation: 1, location: 'default'},
    openCB,
    errorCB,
  );
};

//Checking that table is existing or not otherwise creating new table
export const createTable = async () => {
  try {
    const db = await connectDB();
    await db.transaction(txn => {
      txn.executeSql(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`,
        [],
        (tx, result) => {
          console.log('item:', result?.rows.length);
          if (result?.rows?.length === 0) {
            txn.executeSql(`DROP TABLE IF EXISTS ${tableName}`, []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS ${tableName}(id INTEGER PRIMARY KEY AUTOINCREMENT, score INTEGER, date VARCHAR(30), username VARCHAR(20))`,
              [],
            );
          }
        },
      );
    });
  } catch (error) {
    console.log('Error while creating table========>', error);
  }
};

//Getting previous saved values form the local database
export const getPreviousScores = async username => {
  try {
    const db = await connectDB();
    const results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE username='${username}'`,
    );
    const scoresList = [];
    results &
      results?.forEach(result => {
        for (let i = 0; i < result.rows.length; ++i) {
          scoresList.push(result.rows.item(i));
        }
      });
    return scoresList;
  } catch (error) {
    console.log('Error while getting previous scores:', error);
  }
};

//Saving scores in the local database
export const saveScores = async scores => {
  try {
    const db = await connectDB();
    const results = await db.executeSql(
      `INSERT INTO ${tableName} (score, date, username) VALUES (?,?,?)`,
      [scores.score, scores.date, scores?.username],
    );
    let success = false;
    results &&
      results.forEach(result => {
        const value = result?.rowsAffected > 0 ? true : false;
        success = value;
      });
    return success;
  } catch (error) {
    console.log('Error while saving score', error);
  }
};

export const deleteScores = async username => {
  try {
    const db = await connectDB();
    const results = await db.executeSql(
      `DELETE FROM ${tableName} WHERE username=?`,
      [username],
    );
    let success = false;
    results?.forEach(result => {
      success = result?.rowsAffected > 0 ? true : true;
    });
    return success;
  } catch (error) {
    console.log('Error while deleting score', error);
  }
};

export const deleteTable = async () => {
  const db = await connectDB();
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
};
