import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import VuexPersistence from 'vuex-persist';
import {library} from '@/store/modules/library';

Vue.use(Vuex);

export interface RootState {
  state?: string;
}

const vuexLocal = new VuexPersistence({
  key: 'review-vuex',
  storage: window.localStorage,
  supportCircular: true,
  reducer: (state: any) => ({
    library: state.library,
  }),
});

const initialState: RootState = {};

export const store: StoreOptions<RootState> = {
  state: initialState,
  actions,
  getters,
  mutations,
  modules: {
    library,
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(
  store,
);
