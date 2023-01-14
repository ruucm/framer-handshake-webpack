// Generated by Framer (cec372b)
import * as React from "react"
import { addFonts, addPropertyControls, ControlType, cx, getFonts, RichText, useVariantState, withCSS } from "framer"
import { LayoutGroup, motion } from "framer-motion"
import Button from "https://framerusercontent.com/modules/BNGMh2t5DNmqq1vrkPLC/5zb4dObppCar3L7psvhe/qXgzhfFR2.js"
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"
const ButtonFonts = getFonts(Button)
const cycleOrder = ["GdTSSLOkM"]
const variantClassNames = { GdTSSLOkM: "framer-v-2dcl3" }
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {}
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]))
  return nextOverrides
}
const humanReadableVariantMap = {}
const transitions = {
  default: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], mass: 1, stiffness: 500, type: "spring" },
}
const BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
function useRandomID() {
  const ref = React.useRef(null)
  if (ref.current === null) {
    ref.current = Array(5)
      .fill(0)
      .map(() => BASE62[Math.floor(Math.random() * BASE62.length)])
      .join("")
  }
  return ref.current
}
const Component = /*#__PURE__*/ React.forwardRef(function (
  {
    id,
    style: externalStyle = {},
    className,
    width,
    height,
    layoutId,
    variant: outerVariant = "GdTSSLOkM",
    title: vAq5nDvXu = "Hello",
    ...restProps
  },
  ref
) {
  const outerVariantId = humanReadableVariantMap[outerVariant]
  const variant = outerVariantId || outerVariant
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants } =
    useVariantState({ cycleOrder, defaultVariant: "GdTSSLOkM", transitions, variant, variantClassNames })
  const layoutDependency = variants.join("-") + restProps.layoutDependency
  const defaultLayoutId = useRandomID()
  const { pointerEvents, ...style } = externalStyle
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /*#__PURE__*/ _jsx(motion.div, {
      "data-framer-generated": true,
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx("framer-7WxVH", classNames),
      style: {
        display: "contents",
        pointerEvents: pointerEvents !== null && pointerEvents !== void 0 ? pointerEvents : undefined,
      },
      children: /*#__PURE__*/ _jsxs(motion.div, {
        ...restProps,
        className: cx("framer-2dcl3", className),
        "data-framer-name": "Variant 1",
        layoutDependency: layoutDependency,
        layoutId: "GdTSSLOkM",
        ref: ref,
        style: { backgroundColor: "rgb(255, 253, 235)", ...style },
        transition: transition,
        children: [
          /*#__PURE__*/ _jsx(RichText, {
            __fromCanvasComponent: true,
            children: /*#__PURE__*/ _jsx(React.Fragment, {
              children: /*#__PURE__*/ _jsx(motion.p, { children: "Hello" }),
            }),
            className: "framer-5qotb8",
            layoutDependency: layoutDependency,
            layoutId: "RQ5FdCCMn",
            style: {
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              "--framer-paragraph-spacing": "0px",
            },
            text: vAq5nDvXu,
            transition: transition,
            verticalAlignment: "top",
            withExternalLayout: true,
          }),
          /*#__PURE__*/ _jsx(motion.div, {
            className: "framer-1uljwvb-container",
            layoutDependency: layoutDependency,
            layoutId: "q9lnllojt-container",
            transition: transition,
            children: /*#__PURE__*/ _jsx(Button, {
              height: "100%",
              id: "q9lnllojt",
              layoutId: "q9lnllojt",
              title: "Button",
              width: "100%",
            }),
          }),
        ],
      }),
    }),
  })
})
const css = [
  '.framer-7WxVH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-7WxVH * { box-sizing: border-box; }",
  ".framer-7WxVH .framer-b7ijdm { display: block; }",
  ".framer-7WxVH .framer-2dcl3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 16px 16px 16px; position: relative; width: min-content; }",
  ".framer-7WxVH .framer-5qotb8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  ".framer-7WxVH .framer-1uljwvb-container { flex: none; height: auto; position: relative; width: auto; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7WxVH .framer-2dcl3 { gap: 0px; } .framer-7WxVH .framer-2dcl3 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-7WxVH .framer-2dcl3 > :first-child { margin-top: 0px; } .framer-7WxVH .framer-2dcl3 > :last-child { margin-bottom: 0px; } }",
]
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 130.5
 * @framerIntrinsicWidth 102
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","auto"]}}}
 * @framerVariables {"vAq5nDvXu":"title"}
 */ const FramerWr9Xt9HWr = withCSS(Component, css)
export default FramerWr9Xt9HWr
FramerWr9Xt9HWr.displayName = "Card"
FramerWr9Xt9HWr.defaultProps = { height: 130.5, width: 102 }
addPropertyControls(FramerWr9Xt9HWr, {
  vAq5nDvXu: { defaultValue: "Hello", displayTextArea: false, title: "Title", type: ControlType.String },
})
addFonts(FramerWr9Xt9HWr, [...ButtonFonts])
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerWr9Xt9HWr",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]}}}',
        framerIntrinsicWidth: "102",
        framerVariables: '{"vAq5nDvXu":"title"}',
        framerIntrinsicHeight: "130.5",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
}
//# sourceMappingURL=./Wr9Xt9HWr.map
