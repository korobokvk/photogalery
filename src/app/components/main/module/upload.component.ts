import { Component, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UploadService } from './upload.service'

@Component({
  selector: 'upload-comp',
  templateUrl: '../customisation/upload.component.html',
  styleUrls: ['../customisation/css/upload.component.css'],
  
})
export class UploadComponent {  
  
  /**
   * Local image array
   */
  url:any[] = [];
 
  constructor(
    private service: UploadService,
    private modalService: NgbModal,
  ) {}
  
  /**
   * Call readUrl function from UploadService
   * @param event Event from input file loader
   */
  readUrl(event) {    
    this.service.readUrl(event, this.url); 
         
  }

  open(content) {
    this.modalService.open(content)
  }
  

}
