import {Observable} from 'rxjs';
import {$httpClient} from '@/globals/http-client';
import {LibraryItemModel} from '@/models/library-item.model';
import {BaseResponse} from '@/models/base-response.model';

export default class LibraryService {
  private readonly baseApi: string;

  constructor() {
    this.baseApi = 'json/vue_response.json';
  }

  public getLibraryItems(): Observable<BaseResponse<LibraryItemModel>> {
    return $httpClient.get(this.baseApi);
  }

  public updateLibraryListItem(item: LibraryItemModel): Observable<boolean> {
    return $httpClient.put('update item url', item);
  }
}
