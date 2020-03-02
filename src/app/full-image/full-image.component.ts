import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css']
})
export class FullImageComponent implements OnInit {
  imageUrl: string;
  constructor(private route: ActivatedRoute) {
    this.imageUrl = this.route.snapshot.params['imageurl'];
   }

  ngOnInit() {
  }

}
