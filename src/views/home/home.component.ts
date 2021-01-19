import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter, Mutation} from 'vuex-class';
import {StoreNamespace} from '@/globals/StoreNamespaceGlobal';
import {GET_LIBRARY_LIST, GROUPED_LIST, IS_LIST_VIEW, SET_IS_LIST_VIEW} from '@/types/library.types';
import {GroupListModel} from '@/models/group-list.model';

@Component({})
export default class HomeComponent extends Vue {

  @Action(GET_LIBRARY_LIST, StoreNamespace.LIBRARY) public getLibraryList: () => void;

  @Mutation(SET_IS_LIST_VIEW, StoreNamespace.LIBRARY) public setIsListView: (data: boolean) => void;

  @Getter(GROUPED_LIST, StoreNamespace.LIBRARY) public groupedList!: GroupListModel;
  @Getter(IS_LIST_VIEW, StoreNamespace.LIBRARY) public isListView!: boolean;

  public mounted(): void {
    this.getLibraryList();
  }

  public changeView(): void {
    this.setIsListView(!this.isListView);
  }
}
