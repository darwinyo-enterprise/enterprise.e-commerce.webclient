import { Injectable } from '@angular/core';
import { IMenuModel } from '../models/menu/menu.model';
import { IMenuListModel } from '../models/menu/menu-list.model';
import { HttpClient } from '@angular/common/http';
import { URL_CONFIGURATION_SERVER } from '../consts/server-url.const';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
@Injectable()
export class MenuService {
  /** Base App Menu Controller */
  api_url_AppsMenuController = URL_CONFIGURATION_SERVER + 'api/appsmenu/';

  /** Specific URL */
  api_url_GetGeneralAppMenu = this.api_url_AppsMenuController + 'app-menu/';
  api_url_GetGeneralCategoryMenu = this.api_url_AppsMenuController + 'menu-category/';
  api_url_GetAppMenuByLayoutID = this.api_url_GetGeneralAppMenu + 'layout-id/';
  api_url_GetCategoryMenuByLayoutID = this.api_url_GetGeneralCategoryMenu + 'layout-id/';

  constructor(private httpClient: HttpClient) { }

  /** Get All App Menu (General) By Application ID */
  getAllGeneralMenu(appID: string, mainMenu?: boolean): Observable<IMenuModel[]> {
    let query = '';
    if (mainMenu !== undefined) {
      query = '?mainMenu=' + mainMenu;
    }
    return this.httpClient
      .get<IMenuModel[]>(this.api_url_GetGeneralAppMenu + appID + query);
  }

  /** Get All Category App Menu (General) By Application ID */
  getAllCategoryGeneralMenu(appID: string): Observable<IMenuListModel[]> {
    return this.httpClient.get<IMenuListModel[]>(this.api_url_GetGeneralCategoryMenu + appID);
  }

  /** Get All App Menu (Layout) By Layout ID */
  getAllLayoutMenu(layoutID: string): Observable<IMenuModel[]> {
    return this.httpClient.get<IMenuModel[]>(this.api_url_GetAppMenuByLayoutID + layoutID);
  }

  /** Get All Category App Menu (Layout) By Layout ID */
  getAllCategoryLayoutMenu(layoutID: string): Observable<IMenuListModel[]> {
    return this.httpClient.get<IMenuListModel[]>(this.api_url_GetCategoryMenuByLayoutID + layoutID);
  }
}
