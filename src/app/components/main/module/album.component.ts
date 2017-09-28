import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from './album.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'album-comp',
  templateUrl: '../customisation/album.component.html',
  styleUrls: ['../customisation/css/album.component.css']
})
export class AlbumComponent {  
  
  /**   
   * @param { AlbumService } _service Service for creating albums
   * @param { NgbModal } modalService Bootstrap service
   */

  constructor(
    private _service: AlbumService,   
    private modalService: NgbModal
    
  ) {}

  /**
   * Array of albums
   */
  albums: any[] = [];
  
  /**
   * Calling album service
   * @param title album title
   * @param descriptions album description
   */
  addAlbum(title: string, descriptions: string) {      
    this._service.addAlbumName(title, this.albums, descriptions);
          
  }

  /**
   * Call bootstrap modal to creating a new album
   * @param content template component for call bootstrap modal
   */
  open(content) {
    this.modalService.open(content)
  }
  /**
   * Define event method, to get cover image
   * @param event event file input
   */
  coverage(event) {
    this._service.getBase(event);
   
  }
 
  

}
