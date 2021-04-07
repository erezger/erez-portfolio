import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter, Mutation} from 'vuex-class';
import {StoreNamespace} from '@/globals/StoreNamespaceGlobal';
import {
  FILTER_LIBRARY_LIST,
  FILTERED_LIBRARY_LIST,
  GET_LIBRARY_LIST,
  GROUPED_LIST,
  IS_LIST_VIEW,
  LIBRARY_LIST,
  SEARCH_ON_LIBRARY_LIST,
  SET_IS_LIST_VIEW,
  SORT_LIBRARY_LIST,
  UPDATE_LIBRARY_LIST_ITEM,
} from '@/types/library.types';
import {GroupListModel} from '@/models/group-list.model';
import {LibraryItemModel} from '@/models/library-item.model';
import {FilterObjModel} from '@/models/filter-obj.model';

@Component({})
export default class PortfolioComponent extends Vue {

  @Action(GET_LIBRARY_LIST, StoreNamespace.LIBRARY) public getLibraryList: () => void;
  @Action(SORT_LIBRARY_LIST, StoreNamespace.LIBRARY) public sortLibraryList: () => void;
  @Action(UPDATE_LIBRARY_LIST_ITEM, StoreNamespace.LIBRARY) public updateLibraryListItem: (item: LibraryItemModel) => void;

  @Mutation(SET_IS_LIST_VIEW, StoreNamespace.LIBRARY) public setIsListView: (data: boolean) => void;
  @Mutation(FILTER_LIBRARY_LIST, StoreNamespace.LIBRARY) public filterLibraryList: (filterObj: FilterObjModel) => void;
  @Mutation(SEARCH_ON_LIBRARY_LIST, StoreNamespace.LIBRARY) public searchOnLibraryList: (word: string) => void;

  @Getter(LIBRARY_LIST, StoreNamespace.LIBRARY) public libraryList!: LibraryItemModel[];
  @Getter(FILTERED_LIBRARY_LIST, StoreNamespace.LIBRARY) public filteredLibraryList!: LibraryItemModel[];
  @Getter(GROUPED_LIST, StoreNamespace.LIBRARY) public groupedList!: GroupListModel;
  @Getter(IS_LIST_VIEW, StoreNamespace.LIBRARY) public isListView!: boolean;

  public searchQuery: string = '';

  public mounted(): void {
    this.getLibraryList();
  }

  public onSearch(): void {
    this.searchOnLibraryList(this.searchQuery);
  }

  public changeView(): void {
    this.setIsListView(!this.isListView);
  }

  public refreshView(): void {
    this.searchQuery = '';
    this.getLibraryList();
  }

  public clearView(): void {
    this.searchQuery = '';
  }

  public sort(): void {
    this.sortLibraryList()
  }

  public onGroupedItemClicked(name): void {
    this.filterLibraryList({type: 'type', value: name});
  }

  public onLibraryItemClicked(item: LibraryItemModel): void {
    this.$router.push({name: 'item', params: {imdbId: item.imdbId}});
  }

  public updateItemTitle(item: LibraryItemModel, newTitle: string): void {
    this.updateLibraryListItem({...item, title: newTitle})
  }
}
