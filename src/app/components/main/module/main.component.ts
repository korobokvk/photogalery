import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AlbumService } from './album.service'
import { UploadService } from './upload.service'

@Component({
  selector: 'main-comp',
  templateUrl: '../customisation/main.component.html',
  styleUrls: ['../customisation/css/main.component.css']
})
export class MainComponent {

  /**
   * @param { UploadService } _uploadService
   * @param { NgbModal } modalService Bootstrap service
   * @param { AlbumService } _service Service for creating albums
   */

  constructor(
    private modalService: NgbModal, 
    public _service: AlbumService,
    public _uploadService: UploadService
  ) {}

  /**
   * Call bootstrap modal to creating a new album
   * @param content template component for call bootstrap modal
   */
  open(content) {
    this.modalService.open(content)
  }

  /**
   * Calling album service
   * @param title album title
   * @param descriptions album description
   */
  addAlbum(title: string, descriptions: string, event) {    
    this._service.addAlbumName(title, descriptions)        
  }
 
}
