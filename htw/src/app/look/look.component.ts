import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  showFormAddLook : boolean = true;
  look = <any>{};
  principalArticles = <any>{};
  moreArticles = <any>{};

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

  addNewArticle(type){
    this.principalArticles.type = type;
    console.info(this.principalArticles);    
  }

  toogleShowFormAddLook(){
    if(this.showFormAddLook){
      this.showFormAddLook = false;
    }else{
      this.showFormAddLook = true;
    }
  }

}
