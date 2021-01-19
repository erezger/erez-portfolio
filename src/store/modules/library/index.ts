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
  groupedList: GroupListModel;
  isListView: boolean;
}

// message state model init
export const initialState = (): LibraryState => {
  return {
    libraryItems: [],
    groupedList: {} as GroupListModel,
    isListView: false,
  };
};

export const library: Module<LibraryState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
