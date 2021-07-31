import { MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd'
import { NIcon, NTooltip } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hamburger',
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['toggleCollapsed'],
  setup(props, { emit }) {
    return () => (
      <div style={{ cursor: 'pointer' }}>
        <NTooltip placement="bottom" trigger="hover">
          {{
            default: () => (props.collapsed ? <span>打开</span> : <span>折叠</span>),
            trigger: () => (
              // onClick={() => {
              //     console.log('object')
              //     emit('toggleCollapsed')
              //   }}
              <div>
                <NIcon size={22}>
                  {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </NIcon>
              </div>
            ),
          }}
        </NTooltip>
      </div>
    )
  },
})
