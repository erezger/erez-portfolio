import Vue from 'vue';
import Vuex, {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import {RootState} from '@/store';
import {LibraryItemModel} from '@/models/library-item.model';
import {GroupListModel} from '@/models/group-list.model';

Vue.use(Vuex);

export interface LibraryState {
  libraryItems: LibraryItemModel[];
  filteredLibraryList: LibraryItemModel[];
  groupedList: GroupListModel;
  isListView: boolean;
  sortType: string;
}

// message state model init
export const initialState = (): LibraryState => {
  return {
    libraryItems: [],
    filteredLibraryList: [],
    groupedList: {} as GroupListModel,
    isListView: false,
    sortType: 'ASC',
  };
};

export const library: Module<LibraryState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
