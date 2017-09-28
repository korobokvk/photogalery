import { Injectable } from '@angular/core'

@Injectable()
export class UploadService {


/**
 * Catch images from upload component and render it
 * @param event Event from input file loader
 */
readUrl(event, arr) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();      
      reader.onload = (event:any) => {                 
        arr.push({get: `url(${event.target.result})`,
                        display: false,
                        base64: event.target.result});
      }      
      reader.readAsDataURL(event.target.files[0]);
    }
  }


}
