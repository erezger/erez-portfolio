<template>
  <div class="list-view-container">
    <library-item v-if="libraryList && libraryList.length"
                  v-for="(item, idx) in libraryList" :key="idx"
                  :library-item="item"
    >
    </library-item>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LibraryItem from '@/components/library-item.vue';
import {Getter} from 'vuex-class';
import {LIBRARY_LIST} from '@/types/library.types';
import {StoreNamespace} from '@/globals/StoreNamespaceGlobal';

@Component({})
export default class ListView extends Vue {

  @Getter(LIBRARY_LIST, StoreNamespace.LIBRARY) public libraryList!: LibraryItem[];
}
</script>
