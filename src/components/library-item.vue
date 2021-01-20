<template>
  <div class="movie_card" :class="{'no-image': noImage, 'edit': editTitle}"
       @click="()=> $emit('on-library-item-clicked', libraryItem)">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" :src="libraryItem.poster" :alt="libraryItem.title" @error="imageLoadError"/>
        <h3 @click.stop="editTitle = true">{{ libraryItem.title }}</h3>
        <h4>{{ libraryItem.year | getYear }}</h4>
        <slot></slot>
      </div>
    </div>
    <div class="blur_back" :style="'--background: url(' + libraryItem.poster +')'"></div>
    <div class="input-group rounded my-3" v-if="editTitle" @click.stop="">
      <input type="text" class="form-control rounded" aria-label="title"
             :value="libraryItem.title" @blur="updateItemTitle"
      >
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {LibraryItemModel} from '@/models/library-item.model';

@Component({})
export default class LibraryItem extends Vue {
  @Prop() public libraryItem!: LibraryItemModel;

  public noImage: boolean = false;
  public editTitle: boolean = false;

  public imageLoadError(event): void {
    event.target.src = require('../assets/images/no-image.png')
    this.noImage = true;
  }

  public updateItemTitle(event): void {
    const newTitle = event.target.value;
    if (newTitle !== this.libraryItem.title) {
      this.$emit('update-item-title', this.libraryItem, newTitle)
    }
    this.editTitle = false;
  }
}
</script>
