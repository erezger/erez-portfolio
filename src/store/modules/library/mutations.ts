import {MutationTree} from 'vuex';
import {LibraryState} from '@/store/modules/library/index';
import {SET_GROUPED_LIST, SET_IS_LIST_VIEW, SET_LIBRARY_LIST} from '@/types/library.types';
import {LibraryItemModel} from '@/models/library-item.model';
import {GroupListModel} from '@/models/group-list.model';

export const mutations: MutationTree<LibraryState> = {

  [SET_LIBRARY_LIST]: (state, libraryItems: LibraryItemModel[]) => {
    state.libraryItems = libraryItems;
  },

  [SET_GROUPED_LIST]: (state, groupedList: GroupListModel) => {
    state.groupedList = groupedList;
  },

  [SET_IS_LIST_VIEW]: (state, isListView: boolean) => {
    state.isListView = isListView;
  },
};
