<template>
	<div class="content">
		<div class="panel">
			<div class="panel-header">
				<a <a href="#" v-link="{name: 'tab', params:{tab:tab.ename, page:1}}" v-for="tab in topicTabs" :class="tab.ename === currentTab ? 'active' : ''">{{ tab.name}}</a>
			</div>
			<c-hint v-if="hint.show"></c-hint>
		</div>
	</div>
</template>

<script>
	import cHint from '../components/hint';
	import {getTopicTabs, getCurrentTab, getTopicLists, getHint, getLoginUser} from '../vuex/getters';

	export default {
		components: {
			cHint,

		},

		vuex: {
			actions: {

			}
		}

	}
</script>