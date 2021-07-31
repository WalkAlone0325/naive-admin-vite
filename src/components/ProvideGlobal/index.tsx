import { defineComponent, nextTick, onMounted } from 'vue'
import {
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  NLoadingBarProvider,
} from 'naive-ui'

export default defineComponent({
  name: 'ProvideGlobal',
  setup(_, { slots }) {
    return () => (
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <NLoadingBarProvider>{slots.default!()}</NLoadingBarProvider>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    )
  },
})
