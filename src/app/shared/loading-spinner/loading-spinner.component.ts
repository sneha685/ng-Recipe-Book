import { Component } from '@angular/core';
 

@Component(
    {
       selector: 'loadingSpinner',
       template: `<h1>Loading...</h1>`,
       styles:[`h1{
        ustify-content:center ;
        margin-top: 25%; 
        margin-left: 25%;
         margin-right: 25%;
    color: #4e38dd ;
  
       }`]
 
    }
)

export class loadingSinnerComponent{}