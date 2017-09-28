import { Injectable } from '@angular/core'

@Injectable()
export class AlbumService {
/**
 * Array of albums
 */
album:any[] = [];

/**
 * Add parametrs, state of album
 * @param title album title
 * @param description album description
 */
addAlbumName(title: string, description?: string) {
    
    if(title && description) {
        console.log(this.album)
        return this.addAlbum({
            titles: title,
            descriptions: description,
            show: false,
            delete: false
        })
    } else {
            return this.addAlbum({
            title: title,
            show: false,
            delete: false
        })    
    }  
}

/**
 * Creating a new album
 * @param params album pams: title, description and state
 */
addAlbum(params) {
    this.album.push(params)
    
    }
}
