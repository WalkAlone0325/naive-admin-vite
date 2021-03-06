import { DropdownOption, NIcon, NDropdown, NAvatar, useDialog, useMessage } from 'naive-ui'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { LogoutOutlined } from '@vicons/antd'

export default defineComponent({
  name: 'DropProfile',
  props: {
    inverted: {
      type: Boolean,
    },
  },
  setup(props) {
    const router = useRouter()
    const dialog = useDialog()
    const message = useMessage()

    const optionMenus: DropdownOption[] = [
      {
        label: '个人中心',
        key: 'userinfo',
        // icon:
      },
      {
        label: '布局设置',
        key: 'layoutsetting',
      },
      {
        type: 'divider',
        key: 'divider1',
      },
      {
        label: '退出登录',
        key: 'logout',
        icon: () => (
          <NIcon>
            <LogoutOutlined />
          </NIcon>
        ),
      },
    ]

    // methods
    const logout = () => {
      dialog.warning({
        title: '退出登录',
        content: '你确定要退出登录吗？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
          //! 退出登录
        },
        onNegativeClick: () => {
          message.success('你点击了取消！')
        },
      })
    }

    const handleSelect = (key: string) => {
      console.log(key)
      switch (key) {
        case 'userinfo':
          router.push('/user/profile')
          break
        case 'layoutsetting':
          break
        case 'logout':
          logout()
        default:
          break
      }
    }

    return () => (
      <NDropdown
        inverted={props.inverted}
        trigger="hover"
        placement="bottom"
        options={optionMenus}
        onSelect={handleSelect}>
        <div>
          <NAvatar
            round
            size="medium"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
      </NDropdown>
    )
  },
})
