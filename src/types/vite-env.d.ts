/// <reference types="vite/client" />

import { DialogApi, MessageApi } from 'naive-ui'

declare global {
  interface Window {
    $message: MessageApi
    $dialog: DialogApi
  }
}
