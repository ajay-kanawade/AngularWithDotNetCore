import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-property-card',
       //templateUrl : 'app.property.component.html',
       template:'',
       templateUrl: 'Property-Card.component.html',

        styleUrls : ['Property-Card.component.css']
    })
export class PropertyCardComponent
{
    Property: any =
    {
        "Id":1,
         "Type": "House",
         "Price" : 2500000,
    }

}