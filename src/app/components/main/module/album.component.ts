import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';


@Component({
  selector: 'album-comp',
  templateUrl: '../customisation/album.component.html',
  styleUrls: ['../customisation/css/album.component.css']
})
export class AlbumComponent {  
 
  /**   
   * @param { AlbumService } _service Service for creating albums
   */

  constructor(
    private _service: AlbumService,
    
  ) {}

  /**
   * Array of albums
   */
  albums: any[] = this._service.album;
   
}
