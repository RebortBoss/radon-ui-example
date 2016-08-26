<template>
  <div id="app">
    <rd-button>确定</rd-button>
    <rd-loadingbar></rd-loadingbar>
    <rd-drop-button text=操作>
      <rd-button>编辑</rd-button>
      <rd-button>审核</rd-button>
      <rd-button>删除</rd-button>
  </rd-drop-button>
  </div>
</template>

<script>
// radon
import 'radon-ui/dist/static/css/dist.css'

import {
  rdButton,
  rdDropButton
} from 'radon-ui'

export default {
  ready () {
    this.$Progress.start()
  },
  components: {
    rdButton,
    rdDropButton
  }
}
</script>
