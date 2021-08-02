export interface ISettings {
  // 导航模式：左侧菜单 | 顶部菜单
  navMode?: 'vertical' | 'horizontal'
  // 导航风格： dark 暗色侧边 | light 白色侧边 | header-dark 暗色顶栏
  navTheme?: 'dark' | 'light' | 'header-dark'
  // 顶部
  headerSetting?: {
    // 背景色
    bgColor?: string
    // 固定顶部
    fixed?: boolean
    // 显示重载按钮
    isReload?: boolean
  }
  // 页脚
  showFooter?: boolean
  // 多标签
  multiTabsSetting?: {
    // 背景色 #fff
    bgColor?: string
    // 是否显示 true
    show?: boolean
    // 固定多标签 true
    fixed?: boolean
  }
  // 菜单
  menuSetting?: {
    // 最小宽度 64
    minMenuWidth?: number
    // 菜单宽度 200
    menuWidth?: number
    // 固定菜单 true
    fixed?: boolean
    // 是否显示侧边栏折叠样式
    isShowTrigger: boolean
  }
  // 面包屑
  crumbsSetting?: {
    // 是否显示 true
    show?: boolean
    // 是否显示图标 false
    showIcon?: boolean
  }
  //菜单权限模式 ROLE 前端固定角色  BACK 动态获取
  permissionMode?: 'ROLE'

  // 配置栏
  active: boolean
}

export default {
  navMode: 'horizontal',
  navTheme: 'header-dark',
  headerSetting: {
    bgColor: '#fff',
    fixed: false,
    isReload: true,
  },
  showFooter: true,
  multiTabsSetting: {
    bgColor: '#fff',
    show: true,
    fixed: true,
  },
  menuSetting: {
    minMenuWidth: 64,
    menuWidth: 240,
    fixed: true,
    isShowTrigger: true,
  },
  crumbsSetting: {
    show: true,
    showIcon: true,
  },
  permissionMode: 'ROLE',
} as ISettings
