import {Component, Prop, Vue} from 'vue-property-decorator';
import {Action} from 'vuex-class';
import {StoreNamespace} from '@/globals/StoreNamespaceGlobal';
import {LibraryItemModel} from '@/models/library-item.model';
import {GET_LIBRARY_ITEM_BY_IMDB_ID} from '@/types/library.types';

@Component({})
export default class ItemComponent extends Vue {

  @Action(GET_LIBRARY_ITEM_BY_IMDB_ID, StoreNamespace.LIBRARY)
  public getLibraryItemByImdbId: (imdbId: string) => Promise<LibraryItemModel>;

  @Prop(String) public imdbId!: string;

  public currentLibraryItem: LibraryItemModel = {} as LibraryItemModel;

  public mounted(): void {
    if (!this.imdbId) {
      this.goBack();
    }
    this.getLibraryItemByImdbId(this.imdbId)
      .then((item) => this.currentLibraryItem = item)
      .catch((err) => {
        this.goBack();
        this.$notify({
          group: 'frd',
          type: 'success',
          text: err,
        });
      });
  }

  public goBack(): void {
    this.$router.go(-1);
  }
}
