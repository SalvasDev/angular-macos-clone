import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss']
})
export class BootComponent implements OnInit {

  progressBarValue = 0;

  constructor(private reouter: Router) { }

  ngOnInit() {

   let interval = setInterval (()=>{
    this.progressBarValue = this.progressBarValue + Math.floor(Math.random() * 10) + 40;
    if( this.progressBarValue >= 100 ) {
      this.progressBarValue = 100;
      clearInterval(interval);
      this.reouter.navigate(['/login']);
    }
   }, 1000);
  }

}
