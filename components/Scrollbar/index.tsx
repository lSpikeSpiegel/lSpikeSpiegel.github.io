import { useState, useRef } from 'react'

interface Props {
  options?: {
    thumbColor: string
    thumbSize: number
    /**
     * 内部有点击事件时，延时更新滚动条的时间，0为不执行，单位毫秒
     * - 使用场景：内部有子节点尺寸变动撑开包裹器的滚动尺寸时，并且带有动画的情况，这时设置的延迟就为动画持续时间
     */
    clickUpdateDelay: number
  }
  children: JSX.Element
}

interface ThumbStyle {
  width?: string
  height?: string
  left?: string
  bottom?: string
  transform?: string
  borderRadius?: string
  backgroundColor: string
}

export default function Scrollbar({
  options = {
    thumbColor: '"rgba(147, 147, 153, 0.45)"',
    thumbSize: 8,
    clickUpdateDelay: 0,
  },
  children = <></>,
}: Props) {
  // 滚动条的厚度
  const scrollbarSize = (() => {
    if (typeof window === 'object') {
      // Check if document is finally loaded
      const el = document.createElement('div')
      el.style.width = '100px'
      el.style.height = '100px'
      el.style.overflow = 'scroll'
      document.body.appendChild(el)
      const width = el.offsetWidth - el.clientWidth
      el.remove()
      return width
    }
  })()

  const [wrapStyle, setWrapStyle] = useState<{
    width?: string
    height?: string
  }>({})

  const [thumbStyle, setThumbStyle] = useState<{
    x: ThumbStyle
    y: ThumbStyle
  }>({
    x: {
      backgroundColor: options.thumbColor,
    },
    y: {
      backgroundColor: options.thumbColor,
    },
  })
  const [showThumb, setShowThumb] = useState(false)

  const el = useRef<HTMLDivElement>(null)
  const wrap = useRef(null)
  const thumbY = useRef(null)
  const thumbX = useRef(null)

  /**
   * 更新包裹容器样式
   * - ！！！注意：如果是动态设置组件父容器的边框时，需要手动执行该方法，
   * 原因是父容器的边框会影响当前设置的包围盒宽度，导致滚动条的高度有所变化，也就是跟`css`中设置
   * `box-sizing: border-box;`的原理一样
   */

  // function updateWrapStyle() {
  //   const parent = el.current!.parentNode as HTMLElement
  //   parent.style.overflow = 'hidden' // 这里一定要将父元素设置超出隐藏，不然弹性盒子布局时会撑开宽高
  //   const css = getComputedStyle(parent)
  //   // console.log("父元素边框尺寸 >>", css.borderLeftWidth, css.borderRightWidth, css.borderTopWidth, css.borderBottomWidth);
  //   wrapStyle.width = `calc(100% + ${scrollbarSize}px + ${css.borderLeftWidth} + ${css.borderRightWidth})`
  //   wrapStyle.height = `calc(100% + ${scrollbarSize}px + ${css.borderTopWidth} + ${css.borderBottomWidth})`
  // }

  const onEnter = () => {
    const dom = el.current
    console.log(dom)
  }
  const onLeave = () => {}

  return (
    <>
      <div
        ref={el}
        className="w-full h-full overflow-hidden relative"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div ref={wrap} className="overflow-scroll" style={wrapStyle}>
          {children}
        </div>
        <button
          ref={thumbY}
          className={`absolute z-10 outline-none border-none ${
            showThumb ? 'block' : 'hidden'
          }`}
          title="按住拖动y轴滚动条"
          style={thumbStyle.y}
        ></button>
        <button
          ref={thumbX}
          className={`absolute z-10 outline-none border-none ${
            showThumb ? 'block' : 'hidden'
          }`}
          title="按住拖动x轴滚动条"
          style={thumbStyle.x}
        ></button>
      </div>
    </>
  )
}
