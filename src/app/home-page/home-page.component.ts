import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
	homePreviewHead1:string;
	homePreviewHead2:string;
	homePreviewHead3:string;
	homePreviewText1:string;
	homePreviewText2:string;
	homePreviewText3:string;
	homePreviewPic1:string;
	homePreviewPic2:string;
	homePreviewPic3:string;



  constructor() { 
  	this.homePreviewHead1 = "Vorschau";
  	this.homePreviewHead2 = this.homePreviewHead1;
  	this.homePreviewHead3 = this.homePreviewHead1;
  	this.homePreviewPic1 = "https://www.best-of-winter.com/images/easyblog_articles/234/b2ap3_large_TVB-Groarltal.jpg";
  	this.homePreviewPic2 = "https://www.best-of-winter.com/images/easyblog_articles/158/b2ap3_large_wintertraum-stille-nacht-SalzburgerLand-Tourismus-Stille-Nacht-Kapelle-Oberndorf.jpg";
  	this.homePreviewPic3 = "https://www.best-of-winter.com/images/grossarltal/Salzburger-Bergadvent_7_Aigenkapelle_12.jpg";
  	this.homePreviewText1 = "Sechs Alpenregionen abseits vom „Höher-Schneller-Weiter' Köln, Oktober 2019 – Lust auf ein Bad im Schnee? Ein Winterpicknick mit Aussicht? Einen genussvollen Abstieg über 500 Höhenmeter? Die Kooperation „Best of Winter' veranstaltet vom 23. bis 26. Januar eine „SlowSnow Olympiade' in sechs Alpenregi..."
  	this.homePreviewText2 = "Es gleicht einem Wunder, wie ein kleines Gedicht und eine einfache Melodie sich zu einem Lied verbinden, das seine Reise um...";
  	this.homePreviewText3 = "Hier würde sogar das Christkind Urlaub machen – so  stimmungsvoll und urgemütlich präsentiert sich der „Salzburger Bergadvent“ im Großarltal 2018 im..."
  }

  ngOnInit() {
  }

}
