<template>
  <table class="table table-image" :class="{'no-image': noImage}">
    <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Title</th>
      <th scope="col">Type</th>
      <th scope="col">Date</th>
      <th scope="col">ImdbId</th>
    </tr>
    </thead>
    <tbody>
    <tr v-if="list && list.length"
        v-for="(item, idx) in list" :key="idx"
        @click="()=> $emit('on-library-item-clicked', item)"
    >
      <td>
        <img :src="item.poster" :alt="item.title" @error="imageLoadError"
             class="img-fluid img-thumbnail">
      </td>
      <td>{{ item.title }}</td>
      <td>{{ item.type }}</td>
      <td>{{ item.year | DDMMYYYY }}</td>
      <td>{{ item.imdbId }}</td>
    </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import LibraryItem from '@/components/library-item.vue';

@Component({})
export default class GridView extends Vue {

  @Prop(Array) public list!: LibraryItem[];

  public imageLoadError(event): void {
    event.target.src = require('../assets/images/no-image.png');
    event.target.classList.add('no-image')
  }
}
</script>
