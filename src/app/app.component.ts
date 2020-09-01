import { Component, OnInit } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Title } from '@angular/platform-browser';
declare  var jQuery:  any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Titans Test Team"; 
  public showMenu = false;
  public showSearch = false;
  public showMobileSearch = false;
  
  
  ngOnInit(){
    
    
}

moreInfo(){
  this.showMenu = true;
}

showMobileSearchBar(){

  this.showMobileSearch = true;
}

showSearchBar(){

  this.showSearch = true;
}

showDropDown(){
  
  console.log('Drop down has been clicked!');
}

}
