import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient
    ) {  }

    getItems(): Observable<Item[]> {
      const uri = decodeURIComponent(`https://sneakerx-api.azurewebsites.net/api/Server/allItems`
        // ${Constants.locationAPIUrl}/api/items?apikey=${Constants.apiKey}`
      );
      return this.http.get<Item[]>(uri)
    }

}
