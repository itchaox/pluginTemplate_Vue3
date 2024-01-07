/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-26 14:01
 * @LastAuthor : itchaox
 * @LastTime   : 2024-01-07 18:48
 * @desc       :
 */

import { defineConfig, presetUno, presetAttributify } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  // ...UnoCSS选项
  presets: [
    // 该预设尝试提供流行的功能优先框架（包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等）的共同超集
    presetUno(),

    // 使用属性化模式，你可以将工具类分成属性
    presetAttributify(),
  ],

  transformers: [
    // 为 UnoCSS 启用 Windi CSS 的 变体组特性
    transformerVariantGroup(),
  ],

  rules: [
    // 您的自定义规则
  ],
});
