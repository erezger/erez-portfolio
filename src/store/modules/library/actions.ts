import {RootState} from '@/store/index';
import {ActionContext, ActionTree} from 'vuex';
import {LibraryState} from '@/store/modules/library/index';
import LibraryService from '@/globals/library.service';
import {GET_LIBRARY_LIST, SET_GROUPED_LIST, SET_LIBRARY_LIST} from '@/types/library.types';

const libraryService = new LibraryService();

export const actions: ActionTree<LibraryState, RootState> = {

  [GET_LIBRARY_LIST]: (
    {commit}: ActionContext<LibraryState, RootState>,
  ) => {
    libraryService.getLibraryItems()
      .subscribe(
        (data) => {
          commit(SET_LIBRARY_LIST, data.results);
          const groupedList = {};
          data.results.forEach((item) => {
            groupedList[item.type] = (groupedList[item.type] || 0) + 1;
          })
          commit(SET_GROUPED_LIST, groupedList);
        },
      );
  },
};
