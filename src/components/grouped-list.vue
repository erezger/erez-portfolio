<template>
  <div class="grouped-list-container">
    <div class="group_card">
      <div class="group_name" v-for="(item, name) of list" :key="name">
        <h4><span> {{ name }} ({{ item }}) </span></h4>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {GroupListModel} from '@/models/group-list.model';

@Component({})
export default class GroupedList extends Vue {

  @Prop() public list!: GroupListModel;
}
</script>
