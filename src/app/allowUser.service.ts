import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AllowService } from "./allowService.service";

@Injectable()
export class AllowUser implements CanActivate{
    constructor(private userAllow:AllowService,
        private router:Router,
        private route:ActivatedRoute){}

    canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):
    Observable<boolean>| Promise<boolean>| boolean{
     return this.userAllow.userAllowed()
     .then((hostName:boolean)=>{
         if(hostName){
            //  this.router.navigate(['/order'],{relativeTo:this.route})

             return true;
             
         }
         else
         {
             this.router.navigate(['/home'],{relativeTo:this.route});
             window.alert('your not allowed to enter this section');

         }
     })


     
    }
}
