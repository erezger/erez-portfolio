import {MutationTree} from 'vuex';
import {LibraryState} from '@/store/modules/library/index';
import {
  FILTER_LIBRARY_LIST,
  SEARCH_ON_LIBRARY_LIST,
  SET_FILTERED_LIBRARY_LIST,
  SET_GROUPED_LIST,
  SET_IS_LIST_VIEW,
  SET_LIBRARY_LIST,
  SET_SORT_TYPE,
} from '@/types/library.types';
import {LibraryItemModel} from '@/models/library-item.model';
import {GroupListModel} from '@/models/group-list.model';
import {FilterObjModel} from '@/models/filter-obj.model';

export const mutations: MutationTree<LibraryState> = {

  [SET_LIBRARY_LIST]: (state, libraryItems: LibraryItemModel[]) => {
    state.libraryItems = libraryItems;
  },

  [SET_FILTERED_LIBRARY_LIST]: (state, filteredLibraryList: LibraryItemModel[]) => {
    state.filteredLibraryList = filteredLibraryList;
  },

  [SET_GROUPED_LIST]: (state, groupedList: GroupListModel) => {
    state.groupedList = groupedList;
  },

  [SET_IS_LIST_VIEW]: (state, isListView: boolean) => {
    state.isListView = isListView;
  },

  [SET_SORT_TYPE]: (state, sortType: string) => {
    state.sortType = sortType;
  },

  [FILTER_LIBRARY_LIST]: (state, filterObj: FilterObjModel) => {
    const list = state.libraryItems;
    state.filteredLibraryList = list.filter((item) => {
      return item[filterObj.type].indexOf(filterObj.value) !== -1
    });
  },

  [SEARCH_ON_LIBRARY_LIST]: (state, word: string) => {
    const list = state.libraryItems;
    state.filteredLibraryList = list.filter((item) => item.title.toLowerCase().indexOf(word.toLowerCase()) !== -1
      || item.year.toLowerCase().indexOf(word.toLowerCase()) !== -1);
  },
};
