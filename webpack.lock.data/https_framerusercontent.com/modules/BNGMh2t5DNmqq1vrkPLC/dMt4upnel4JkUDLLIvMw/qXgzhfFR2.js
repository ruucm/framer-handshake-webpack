// Generated by Framer (b35efa8)
import * as React from "react";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  RichText,
  useVariantState,
  withCSS,
} from "framer";
import { LayoutGroup, motion } from "framer-motion";
import { jsx as _jsx } from "react/jsx-runtime";
const cycleOrder = ["xiGuWN4uU"];
const variantClassNames = { xiGuWN4uU: "framer-v-mxz3uw" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant])
      );
  return nextOverrides;
}
const humanReadableVariantMap = {};
const transitions = {
  default: {
    damping: 60,
    delay: 0,
    duration: 0.3,
    ease: [0.44, 0, 0.56, 1],
    mass: 1,
    stiffness: 500,
    type: "spring",
  },
};
const Component = /*#__PURE__*/ React.forwardRef(function (
  {
    id,
    style: externalStyle = {},
    className,
    width,
    height,
    layoutId,
    variant: outerVariant = "xiGuWN4uU",
    title: ATWq321bU = "Button",
    ...restProps
  },
  ref
) {
  const outerVariantId = humanReadableVariantMap[outerVariant];
  const variant = outerVariantId || outerVariant;
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState({
    cycleOrder,
    defaultVariant: "xiGuWN4uU",
    transitions,
    variant,
    variantClassNames,
  });
  const layoutDependency = variants.join("-") + restProps.layoutDependency;
  const defaultLayoutId = React.useId();
  const { pointerEvents, ...style } = externalStyle;
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
      className: cx("framer-kJ3fR", classNames),
      style: {
        display: "contents",
        pointerEvents:
          pointerEvents !== null && pointerEvents !== void 0
            ? pointerEvents
            : undefined,
      },
      children: /*#__PURE__*/ _jsx(motion.div, {
        ...restProps,
        className: cx("framer-mxz3uw", className),
        "data-framer-name": "Variant 1",
        layoutDependency: layoutDependency,
        layoutId: "xiGuWN4uU",
        ref: ref,
        style: { backgroundColor: "rgb(204, 255, 224)", ...style },
        transition: transition,
        children: /*#__PURE__*/ _jsx(RichText, {
          __fromCanvasComponent: true,
          children: /*#__PURE__*/ _jsx(React.Fragment, {
            children: /*#__PURE__*/ _jsx(motion.p, { children: "Button" }),
          }),
          className: "framer-1ltwh8a",
          layoutDependency: layoutDependency,
          layoutId: "se7XlG6sn",
          style: {
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            "--framer-paragraph-spacing": "0px",
          },
          text: ATWq321bU,
          transition: transition,
          verticalAlignment: "top",
          withExternalLayout: true,
        }),
      }),
    }),
  });
});
const css = [
  '.framer-kJ3fR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-kJ3fR * { box-sizing: border-box; }",
  ".framer-kJ3fR .framer-35ht8p { display: block; }",
  ".framer-kJ3fR .framer-mxz3uw { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: min-content; }",
  ".framer-kJ3fR .framer-1ltwh8a { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kJ3fR .framer-mxz3uw { gap: 0px; } .framer-kJ3fR .framer-mxz3uw > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-kJ3fR .framer-mxz3uw > :first-child { margin-left: 0px; } .framer-kJ3fR .framer-mxz3uw > :last-child { margin-right: 0px; } }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 39
 * @framerIntrinsicWidth 70
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","auto"]}}}
 * @framerVariables {"ATWq321bU":"title"}
 */ const FramerqXgzhfFR2 = withCSS(Component, css);
export default FramerqXgzhfFR2;
FramerqXgzhfFR2.displayName = "Button";
FramerqXgzhfFR2.defaultProps = { height: 39, width: 70 };
addPropertyControls(FramerqXgzhfFR2, {
  ATWq321bU: {
    defaultValue: "Button",
    displayTextArea: false,
    title: "Title",
    type: ControlType.String,
  },
});
addFonts(FramerqXgzhfFR2, []);
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerqXgzhfFR2",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]}}}',
        framerContractVersion: "1",
        framerVariables: '{"ATWq321bU":"title"}',
        framerIntrinsicHeight: "39",
        framerIntrinsicWidth: "70",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./qXgzhfFR2.map
