/*
 * @Author: fzf404
 * @Date: 2022-05-25 23:18:50
 * @LastEditors: fzf404 nmdfzf404@163.com
 * @LastEditTime: 2022-09-18 18:28:07
 * @Description: main 入口
 */

import { app, BrowserWindow, protocol } from 'electron'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { autoUpdater } from 'electron-updater'

import { appEvent } from '#/event'
import { initTray } from './tray'
import { autoWindow, createWindow } from './window'

// 调试模式
const isDebug = process.env.NODE_ENV === 'development'

// 注册协议
protocol.registerSchemesAsPrivileged([{ scheme: 'monit', privileges: { secure: true, standard: true } }])

// 准备就绪
app.on('ready', async () => {
  // 应用事件监听
  appEvent()

  // 初始化系统托盘
  // TODO 托盘退出
  initTray()

  // 自动打开窗口
  autoWindow()

  // 自动检查更新
  if (!isDebug)
    autoUpdater.checkForUpdatesAndNotify({
      title: 'Monit - update',
      body: '已下载新版本，将会在软件关闭后自动更新。',
    })
})

// 调试模式下安装 vue-devtools
app.on('ready', () => {
  if (isDebug) {
    try {
      installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
})

// mac 激活窗口
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow('welcome')
  }
})

// 调试模式下退出
if (isDebug) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
