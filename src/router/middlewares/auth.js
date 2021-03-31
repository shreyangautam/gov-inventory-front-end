export default function auth ({ next, store }){
    if(!store.state.token){
        return next({
           name: 'Login'
        })
    }
   
    return next()
   }