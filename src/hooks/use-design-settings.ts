import { computed } from 'vue'
import { useStore } from '@/store'

export function useDesignSettings() {
  const store = useStore()

  return {
    darkTheme: computed(() => store.state.designSettings.darkTheme),
    appTheme: computed(() => store.state.designSettings.appTheme),
    appThemeList: computed(() => store.state.designSettings.appThemeList),
  }
}
