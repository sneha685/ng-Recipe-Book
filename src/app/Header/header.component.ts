import{Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

 @Component({
     selector:'app-header',
     templateUrl:'./header.component.html',
     styleUrls: ['./header.component.css'],
 })

 export class headerComponent implements OnInit,OnDestroy{
     private userSub :Subscription;
     isAuthenticated=false;
        constructor(private dataStorageService:DataStorageService,
    private activatedRoute: ActivatedRoute,
    private authService :AuthService){}
 
ngOnInit(){
   this.userSub= this.authService.user.subscribe(user=>{
this.isAuthenticated=!!user;
 
   })
}
   saveData(){
       this.dataStorageService.storeRecipes()
   }
 
   fetchData(){
       return this.dataStorageService.fetchRecipes().subscribe()
   }
logOut(){
    this.authService.logOut();
}

ngOnDestroy(){
    this.userSub.unsubscribe();
}
   
 }