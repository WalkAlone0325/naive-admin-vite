import { computed } from 'vue'
import { useStore } from '@/store'

export function useDesignSettings() {
  const store = useStore()

  return {
    isDarkTheme: computed(() => store.state.designSettings.isDarkTheme),
    appTheme: computed(() => store.state.designSettings.appTheme),
    appThemeList: computed(() => store.state.designSettings.appThemeList),
  }
}
