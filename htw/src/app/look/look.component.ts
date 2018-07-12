import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  showFormAddLook : boolean = true;
  look = <any>{};
  principalArticle = <any>{};
  moreArticle = <any>{};

  selectedPrincipalArticleImg: File;
  selectedMoreArticleImg: File;

  constructor(private globals: Globals) { }

  ngOnInit() {
    this.look.principalArticles = [];
    this.look.moreArticles = [];
    this.principalArticle.articleType = 'PRINCIPAL';
    this.principalArticle.currency = '€';
    this.moreArticle.articleType = 'SECONDARY';
    this.moreArticle.currency = '€';
  }

  addNewArticle(type){
    if(type == 'PRINCIPAL'){
      this.look.principalArticles.push(this.principalArticle);
    }else if(type == 'SECONDARY'){
      this.look.moreArticles.push(this.moreArticle);
    }
    console.info(this.look);    
  }

  toogleShowFormAddLook(){
    if(this.showFormAddLook){
      this.showFormAddLook = false;
    }else{
      this.showFormAddLook = true;
    }
  }

  onFileChangedLookImg(event){
    this.look.lookImgData = event.target.files[0];
    console.log(this.look);
    alert(JSON.stringify(this.look.lookImgData))
    
  }

  onFileChangedPrincipalArticle(event){
    this.principalArticle.principalArticleImgData = event.target.files[0];
  }

  onFileChangedMoreArticle(event){
    this.moreArticle.moreArticleImgData = event.target.files[0];
  }

}
