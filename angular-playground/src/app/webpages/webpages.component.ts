import { Component, OnInit } from '@angular/core';
import { Webpage } from '../webpage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-webpages',
  templateUrl: './webpages.component.html',
  styleUrls: ['./webpages.component.css']
})
export class WebpagesComponent implements OnInit {

  webpageProperty: Webpage = {
    id: 1,
    name: 'Homepage'
  };

  constructor() { }

  ngOnInit() {
  }

}
