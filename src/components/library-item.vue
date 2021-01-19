<template>
  <div class="movie_card" :class="{'no-image': noImage}">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" :src="libraryItem.poster" :alt="libraryItem.title" @error="imageLoadError"/>
        <h3>{{ libraryItem.title }}</h3>
        <h4>{{ libraryItem.year | getYear }}</h4>
      </div>
    </div>
    <div class="blur_back" :style="'--background: url(' + libraryItem.poster +')'"></div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {LibraryItemModel} from '@/models/library-item.model';

@Component({})
export default class LibraryItem extends Vue {
  @Prop() public libraryItem!: LibraryItemModel;

  public noImage: boolean = false;

  public imageLoadError(event): void {
    this.noImage = true;
  }

}
</script>
