import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('init started');
  }

  ngAfterViewInit() {
    console.log('after view init started');
    const self = this;
    var s,t; s = document.createElement('script'); s.type = 'text/javascript'; s.id = 'qismo-js';
    s.src = 'https://s3-ap-southeast-1.amazonaws.com/qiscus-sdk/public/qismo/qismo-v2.js'; s.async = true;
    s.onload = s.onreadystatechange = function() { new Qismo("ysotr-aja9u91emy3ecss"); }
    t = document.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t);
  }

  ngOnDestroy() {
    console.log('destroying qismo');
    document.getElementById('qismo-js') && document.getElementById('qismo-js').remove();
    document.getElementById('qiscus-widget') && document.getElementById('qiscus-widget').remove();
    document.querySelector('.qcw-cs-container') && document.querySelector('.qcw-cs-container').remove();
    document.querySelector('.qcw-container') && document.querySelector('.qcw-container').remove();
    document.querySelector('.qismo-extra') && document.querySelector('.qismo-extra').remove();
    window.Qismo = undefined;
  }

}
