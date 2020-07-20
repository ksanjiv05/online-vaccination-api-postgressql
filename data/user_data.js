const queryHelper = require("../helper/db_curd");

//module.exports.postUser = async (data) => {};

const UserTableCreate = async () => {
  const query = `CREATE TABLE IF NOT EXISTS users(
                      id SERIAL PRIMARY KEY, 
                      name VARCHAR(40) not null,
                      email VARCHAR(40) not null,
                      pass VARCHAR(40) not null,
                      varified BOOLEAN,
                      dob VARCHAR(10)
                    )`;
  return await queryHelper.executeQuery(query);
  //console.log("status is ", status);
};

const UserTableInsert = async (name, email, pass, dob) => {
  const query = `INSERT INTO public.users(
          name,email,pass,varified,dob)
          VALUES ('${name}', '${email}', '${pass}', false, '${dob}')`;
  console.log(query);
  const status = await queryHelper.executeQuery(query);
  // console.log("status is ", status);
  return status;
};
const UserTableDelete = async () => {
  const query = `DELETE FROM public.users
      WHERE email='kksanjiv0005@gmail.com';`;
  return await queryHelper.executeQuery(query);
};
const UserTableUpdate = async () => {
  const query = `UPDATE public.users
      SET name='kishan'
      WHERE email='ksanjiv0005@gmail.com';`;
  return await queryHelper.executeQuery(query);
};

const GetUsers = async () => {
  const query = `SELECT * FROM public.users
  ORDER BY id ASC`;
  return await queryHelper.readQuery(query);
};
//UserTableCreate();
//UserTableInsert();
//UserTableDelete();
//UserTableUpdate();

module.exports = {
  UserTableCreate,
  UserTableInsert,
  UserTableUpdate,
  UserTableDelete,
  GetUsers,
};
