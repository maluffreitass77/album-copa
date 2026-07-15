import { getDB } from "../services/database";


export function useAuth(){

 async function register(nome: string, email: string, senha: string){
   const db = getDB();

   await db.run(
     `
     INSERT INTO usuarios
     (nome,email,senha)
     VALUES(?,?,?)
     `,
     [nome, email, senha]
   );
 }



async function login(email: string, senha: string){
  const db = getDB();

  const resultado = await db.query(
    `
    SELECT *
    FROM usuarios
    WHERE email=?
    AND senha=?
    `,
    [email, senha]
  );

  if (resultado.values && resultado.values.length > 0) {

localStorage.setItem(
"user",
JSON.stringify(resultado.values[0])
);


return true;

}


return false;


}



function logout(){

localStorage.removeItem("user");

}



return {
 register,
 login,
 logout
};


}