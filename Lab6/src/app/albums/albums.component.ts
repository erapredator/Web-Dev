import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../albums.service";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  deleteAlbum(albumId: number) {
    this.albumsService.deleteAlbum(albumId).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== albumId);
    });
  }

  addNewAlbum() {
    this.albumsService.createAlbum({ title: this.newAlbumTitle }).subscribe(newAlbum => {
      this.albums.push(newAlbum);
      this.newAlbumTitle = '';
      alert("New album created successfully");
    });
  }

}
