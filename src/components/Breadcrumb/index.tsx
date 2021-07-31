import { useSettings } from '@/hooks/use-settings'
import { NBreadcrumb, NBreadcrumbItem, NDropdown } from 'naive-ui'
import { computed, defineComponent, Fragment } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGeneratorMenu } from './use-generator-menu'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const breadcrumbList = computed(() => useGeneratorMenu(route.matched))
    // console.log(breadcrumbList.value)
    const { crumbsSetting } = useSettings()

    // methods
    // 返回组件
    const retComp = (Icon: any) => <Icon style={{ marginRight: '8px' }} />

    return () => (
      <NBreadcrumb v-show={crumbsSetting.value?.show}>
        {breadcrumbList.value.map(item => (
          <NBreadcrumbItem key={item.key}>
            {item.children?.length ? (
              <NDropdown options={item.children} onSelect={key => router.push(key)}>
                {crumbsSetting.value?.showIcon && item.icon ? (
                  <span>
                    {retComp(item.icon)}
                    {item.label}
                  </span>
                ) : (
                  <span>{item.label}</span>
                )}
              </NDropdown>
            ) : (
              <span>
                {item.icon ? (
                  <Fragment>
                    {crumbsSetting.value?.showIcon ? retComp(item.icon) : ''}
                    {item.label}
                  </Fragment>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            )}
          </NBreadcrumbItem>
        ))}
      </NBreadcrumb>
    )
  },
})
