import { Injectable } from '@angular/core';


@Injectable()
export class AlbumService {

/**
 * middlevare to event
 */
cover: any = null;
/**
 * Add parametrs, state of album
 * @param title album title 
 * @param description album description
 */
addAlbumName(title: string, arr?: any, description?: string) {
    
    // It's hard to explain, but without it, the cover is buggy
    setTimeout(() => { this.cover = null },100);

    // if(title && description) {        
        return this.addAlbum({
            titles: title,
            descriptions: description,
            show: false,
            delete: false,
            cover: this.cover
        }, arr)
    // } else {
        
    //         return this.addAlbum({
    //         title: title,
    //         show: false,
    //         delete: false,
    //         cover: this.cover

    //     }, arr)    
    // }  
}

/**
 * Creating a new album
 * @param params album pams: title, description and state
 */
addAlbum(params, arr) {
    arr.push(params)
    
    }
/**
 * Get base64 for cover image
 * @param event file input event
 */
getBase(event) {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();      
        reader.onload = (event:any) => { 
            this.cover = event.target.result;
                
                         
        }      
        reader.readAsDataURL(event.target.files[0]);
      }
}
}
