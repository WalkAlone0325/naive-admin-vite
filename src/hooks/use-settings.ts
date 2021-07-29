import { computed } from 'vue'
import { useStore } from '@/store'

export function useSettings() {
  const store = useStore()

  const navMode = computed(() => store.state.settings.navMode)

  const navTheme = computed(() => store.state.settings.navTheme)

  const headerSetting = computed(() => store.state.settings.headerSetting)

  const multiTabsSetting = computed(() => store.state.settings.multiTabsSetting)

  const menuSetting = computed(() => store.state.settings.menuSetting)

  const crumbsSetting = computed(() => store.state.settings.crumbsSetting)

  const showFooter = computed(() => store.state.settings.showFooter)

  const permissionMode = computed(() => store.state.settings.permissionMode)

  return {
    navMode,
    navTheme,
    headerSetting,
    multiTabsSetting,
    menuSetting,
    crumbsSetting,
    showFooter,
    permissionMode,
  }
}
