import { defineComponent } from 'vue'
import { NIcon, NTooltip } from 'naive-ui'
import { GithubFilled } from '@vicons/antd'

export default defineComponent({
  name: 'GitAddress',
  setup() {
    const href = 'http://www.baidu.com'

    return () => (
      <div>
        <NTooltip placement="bottom" trigger="hover">
          {{
            default: () => <span>GitHub</span>,
            trigger: () => (
              <a
                style={{ display: 'block' }}
                href={href}
                target="_blank"
                rel="noopenner noreferrer">
                <NIcon size={26}>
                  <GithubFilled />
                </NIcon>
              </a>
            ),
          }}
        </NTooltip>
      </div>
    )
  },
})
