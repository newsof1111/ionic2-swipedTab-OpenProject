import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;

  public selected = 0;
  public indicator = null;
  public mySlideOptions = {};

  ngAfterViewInit() 
  {
    this.indicator = document.getElementById("indicator");
    if (this.platform.is('windows')) 
    {
      this.indicator.style.opacity = '0';
    }
  }

  constructor(public navCtrl: NavController, public platform: Platform) 
  {
    this.platform = platform;
  }

  select(index) 
  {
    this.selected = index;
    if (index === 1)
      this.indicator.style.webkitTransform = 'translate3d(100%,0,0)';
    if (index === 0)
      this.indicator.style.webkitTransform = 'translate3d(0%,0,0)';
    this.slider.slideTo(index, 500);
  }

  onSlideChanged($event) 
  {
    if (((($event.touches.startX - $event.touches.currentX) <= 100) || (($event.touches.startX - $event.touches.currentX) > 0)) && (this.slider.isBeginning() || this.slider.isEnd())) 
    {
      //console.log("interdit Direction");
    }
    else 
    {
      //console.log("OK Direction");
      this.indicator.style.webkitTransform = 'translate3d(' + (-($event.translate) / 4) + 'px,0,0)';
    }

  }

  panEvent(e) 
  {
    let currentIndex = this.slider.getActiveIndex();
    if (currentIndex === 1) 
    {
      this.selected = 1;
      this.indicator.style.webkitTransform = 'translate3d(100%,0,0)';
    }
    if (currentIndex === 0) 
    {
      this.selected = 0;
      this.indicator.style.webkitTransform = 'translate3d(0%,0,0)';
    }
  }



}
