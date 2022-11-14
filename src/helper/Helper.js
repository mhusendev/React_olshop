import Cookies from 'universal-cookie';
const cookies = new Cookies();
const checkCookie = () => {
   if(cookies.get('secure-molada')) {
    return true
   }
   else {
    return false
   }
// cookies.set('myCat', 'Pacman', { path: '/' });
// console.log(cookies.get('secure-molada'));
  
}

const getInfo = () => {
   let data = ''
   if(cookies.get('secure-molada')) {
       let base64ToString = Buffer.from(cookies.get('secure-molada'), "base64").toString();
      let stringtojson = JSON.parse(base64ToString);
      data = stringtojson.passport.user
   
      }

   return data;

}

export { checkCookie, getInfo }