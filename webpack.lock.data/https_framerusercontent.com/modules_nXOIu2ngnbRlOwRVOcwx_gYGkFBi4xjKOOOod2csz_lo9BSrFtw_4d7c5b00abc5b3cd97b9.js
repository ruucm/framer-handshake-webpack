import{jsx as _jsx}from"react/jsx-runtime";// Generated by Framer (8100f06)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"bErM74qtc":{"hover":true},"eD3bPtLXC":{"hover":true}};const cycleOrder=["bErM74qtc","eD3bPtLXC"];const variantClassNames={"bErM74qtc":"framer-v-19nyfb3","eD3bPtLXC":"framer-v-1xz9ptc"};const humanReadableVariantMap={"primary":"bErM74qtc","secondary":"eD3bPtLXC"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="bErM74qtc",title:WG7jVuOYh="Button",tap:V90wB3nYM,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"bErM74qtc",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap19nyfb3=activeVariantCallback(async(...args)=>{if(V90wB3nYM){const res=await V90wB3nYM(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({"eD3bPtLXC":{"bErM74qtc":{"data-framer-name":"secondary"},"H3SN4jr7L":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Button</span><br></span></span>","fonts":["GF;Rubik-regular"]}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-S7T7y",classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:"auto"},children:/*#__PURE__*/ _jsx(Stack,{...restProps,layoutId:"bErM74qtc",className:cx("framer-19nyfb3",className),style:{"borderBottomLeftRadius":4,"borderBottomRightRadius":4,"borderTopRightRadius":4,"borderTopLeftRadius":4,"backgroundColor":"rgb(77, 170, 169)",...style},direction:"horizontal",distribution:"start",alignment:"center",gap:0,wrap:false,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"12px 16px 12px 16px"},center:false,"data-highlight":true,"data-framer-name":"primary",onTap:onTap19nyfb3,variants:{"bErM74qtc-hover":{"backgroundColor":"rgb(62, 142, 139)"},"eD3bPtLXC":{"backgroundColor":"rgb(248, 249, 250)"},"eD3bPtLXC-hover":{"backgroundColor":"rgb(241, 242, 243)"}},transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("bErM74qtc"),children:/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Rubik\", serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Rubik-500"],layoutId:"H3SN4jr7L",className:"framer-pkc0ny",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Button</span><br></span></span>",text:WG7jVuOYh,variants:{"eD3bPtLXC":{"--framer-text-color":"rgb(51, 65, 82)","--framer-font-family":"\"Rubik\", serif","--framer-font-style":"normal","--framer-font-weight":400}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("H3SN4jr7L")})})})}));});const css=[".framer-S7T7y [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-S7T7y * { box-sizing: border-box; }",".framer-S7T7y .framer-19nyfb3 { position: relative; cursor: pointer; width: min-content; height: min-content; }",".framer-S7T7y .framer-pkc0ny { position: relative; width: auto; height: auto; flex: none; white-space: pre; }",".framer-S7T7y.framer-v-19nyfb3 .framer-19nyfb3, .framer-S7T7y.framer-v-1xz9ptc .framer-19nyfb3 { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 41
 * @framerIntrinsicWidth 79
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["auto", "auto"]}, "s1SqiRnrB": {"layout": ["auto", "auto"]}, "eD3bPtLXC": {"layout": ["auto", "auto"]}, "k1RNA4RiK": {"layout": ["auto", "auto"]}}}
 * @framerVariables {"WG7jVuOYh": "title", "V90wB3nYM": "tap"}
 */ const Framerlo9BSrFtw=withCSS(Component,css);export default Framerlo9BSrFtw;Framerlo9BSrFtw.displayName="Payroller Old Button";Framerlo9BSrFtw.defaultProps={"width":79,"height":41};addPropertyControls(Framerlo9BSrFtw,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["bErM74qtc","eD3bPtLXC"],"optionTitles":["primary","secondary"]},"WG7jVuOYh":{"type":ControlType.String,"title":"Title","defaultValue":"Button","displayTextArea":false},"V90wB3nYM":{"type":ControlType.EventHandler,"title":"Tap"}});addFonts(Framerlo9BSrFtw,[{"url":"https://fonts.gstatic.com/s/rubik/v20/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-NYi1UE80V4bVkA.ttf","family":"Rubik","style":"normal","weight":"500","moduleAsset":{"url":"https://fonts.gstatic.com/s/rubik/v20/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-NYi1UE80V4bVkA.ttf","localModuleIdentifier":"local-module:canvasComponent/lo9BSrFtw:default"}}]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Framerlo9BSrFtw","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicHeight":"41","framerIntrinsicWidth":"79","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"auto\", \"auto\"]}, \"s1SqiRnrB\": {\"layout\": [\"auto\", \"auto\"]}, \"eD3bPtLXC\": {\"layout\": [\"auto\", \"auto\"]}, \"k1RNA4RiK\": {\"layout\": [\"auto\", \"auto\"]}}}","framerVariables":"{\"WG7jVuOYh\": \"title\", \"V90wB3nYM\": \"tap\"}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./lo9BSrFtw.map