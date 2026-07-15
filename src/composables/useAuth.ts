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



async function resetPassword(email: string, senha: string) {
 const db = getDB();

 const resultado = await db.query(
   `
   SELECT id
   FROM usuarios
   WHERE email = ?
   `,
   [email]
 );

 if (!resultado.values || resultado.values.length === 0) {
   return false;
 }

 await db.run(
   `
   UPDATE usuarios
   SET senha = ?
   WHERE email = ?
   `,
   [senha, email]
 );

 return true;
}

function logout(){
 localStorage.removeItem("user");
}

function getCurrentUser() {
 const item = localStorage.getItem("user")
 if (!item) {
   return null
 }

 try {
   return JSON.parse(item)
 } catch {
   return null
 }
}

function getCurrentUserId(): number | null {
 const user = getCurrentUser()
 return user?.id ?? null
}

return {
 register,
 login,
 resetPassword,
 logout,
 getCurrentUser,
 getCurrentUserId
};


}