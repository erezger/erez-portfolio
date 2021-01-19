import {GetterTree} from 'vuex';
import {RootState} from '@/store/index';
import {LibraryState} from '@/store/modules/library/index';
import {LibraryItemModel} from '@/models/library-item.model';
import {GROUPED_LIST, IS_LIST_VIEW, LIBRARY_LIST} from '@/types/library.types';
import {GroupListModel} from '@/models/group-list.model';

export const getters: GetterTree<LibraryState, RootState> = {

  [LIBRARY_LIST](state): LibraryItemModel[] {
    return state.libraryItems;
  },

  [GROUPED_LIST](state): GroupListModel {
    return state.groupedList;
  },

  [IS_LIST_VIEW](state): boolean {
    return state.isListView;
  },
};
