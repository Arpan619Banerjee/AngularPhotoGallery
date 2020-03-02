import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../../services/album-service.service';
import { AlbumModel } from '../../models/albumModel';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: AlbumModel[];
  constructor(private albumsService: AlbumServiceService, private router: Router) { }

  getAlbums(): void {
    this.albumsService.getAlbums().subscribe(
      (albums) => this.albums = albums
    );
  }

  ngOnInit() {

    this.getAlbums();
  }

  showPhoto(albumId) {

    this.router.navigate(['/photo', albumId]);
  }

}
