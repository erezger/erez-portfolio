<template>
  <div class="list-view-container">
    <library-item v-if="list && list.length"
                  v-for="(item, idx) in list" :key="idx"
                  :library-item="item"
                  @on-library-item-clicked="()=> $emit('on-library-item-clicked', item)"
                  @update-item-title="()=> $emit('update-item-title')"
    >
    </library-item>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import LibraryItem from '@/components/library-item.vue';

@Component({})
export default class ListView extends Vue {

  @Prop(Array) public list!: LibraryItem[];
}
</script>
