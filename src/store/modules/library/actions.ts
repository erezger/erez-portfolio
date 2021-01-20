import {RootState} from '@/store/index';
import {ActionContext, ActionTree} from 'vuex';
import {LibraryState} from '@/store/modules/library/index';
import LibraryService from '@/globals/library.service';
import {
  GET_LIBRARY_ITEM_BY_IMDB_ID,
  GET_LIBRARY_LIST,
  SET_FILTERED_LIBRARY_LIST,
  SET_GROUPED_LIST,
  SET_LIBRARY_LIST,
  SET_SORT_TYPE,
  SORT_LIBRARY_LIST,
  UPDATE_LIBRARY_LIST_ITEM,
} from '@/types/library.types';
import {sortListByProp} from '@/helpers/sort-list.helper';
import {$httpClient} from '@/globals/http-client';
import {authErrorInterceptor} from '@/globals/error.interceptors';
import {LibraryItemModel} from '@/models/library-item.model';
import {eventsHub} from '@/main';

const SORT_PROPERTY = 'title';
const libraryService = new LibraryService();
$httpClient.addResponseInterceptor(authErrorInterceptor);

export const actions: ActionTree<LibraryState, RootState> = {

  [GET_LIBRARY_LIST]: (
    {state, commit}: ActionContext<LibraryState, RootState>,
  ) => {
    libraryService.getLibraryItems()
      .subscribe(
        (data) => {
          commit(SET_LIBRARY_LIST, data.results);
          commit(SET_FILTERED_LIBRARY_LIST, sortListByProp(data.results, SORT_PROPERTY, state.sortType));
          const groupedList = {};
          data.results.forEach((item) => {
            groupedList[item.type] = (groupedList[item.type] || 0) + 1;
          })
          commit(SET_GROUPED_LIST, groupedList);
        },
      );
  },

  [SORT_LIBRARY_LIST]: (
    {state, commit}: ActionContext<LibraryState, RootState>,
  ) => {
    const sortType = state.sortType === 'ASC' ? 'DESC' : 'ASC';
    commit(SET_SORT_TYPE, sortType);
    commit(SET_FILTERED_LIBRARY_LIST, sortListByProp(state.libraryItems, SORT_PROPERTY, sortType));
  },

  [GET_LIBRARY_ITEM_BY_IMDB_ID]: (
    {state, commit}: ActionContext<LibraryState, RootState>,
    imdbId: string,
  ) => {
    const list = state.libraryItems;
    return new Promise((resolve, reject) => {
      list.forEach((item) => {
        if (item.imdbId === imdbId) {
          return resolve(item);
        }
      });
      return reject('unable to find item');
    })
  },

  [UPDATE_LIBRARY_LIST_ITEM]: (
    {state, commit}: ActionContext<LibraryState, RootState>,
    item: LibraryItemModel,
  ) => {
    libraryService.updateLibraryListItem(item)
      .subscribe(
        () => {
          eventsHub.$notify({
            group: 'library',
            type: 'success',
            text: 'library item updated successfully',
          });
        },
        () => {
          eventsHub.$notify({
            group: 'library',
            type: 'error',
            text: 'error updating library item',
          });
        },
      );
  },
};
