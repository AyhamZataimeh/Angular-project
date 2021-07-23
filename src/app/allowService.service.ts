

export class AllowService {
    loggedIn=false;
 
    hostName(hostName){
        if(hostName==='admin'){
            this.loggedIn=true
        }
        else {
            this.loggedIn=false;
        }
      
        const promis=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.loggedIn);
            },0)
        })
        return promis;

    }
    userAllowed(){
        const promis=new Promise((resolve,reject)=>{

            setTimeout(()=>{
                resolve(this.loggedIn)
            },0)
        })
        return promis;
    }
  


}