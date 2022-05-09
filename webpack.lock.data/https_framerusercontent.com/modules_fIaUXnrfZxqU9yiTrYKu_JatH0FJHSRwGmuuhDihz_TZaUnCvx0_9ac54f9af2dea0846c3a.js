import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (535c240)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,SVG,Text,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"V04GCGitD":{"hover":true},"jGXji_JfB":{"hover":true}};const cycleOrder=["V04GCGitD","jGXji_JfB"];const variantClassNames={"V04GCGitD":"framer-v-gxd8uc","jGXji_JfB":"framer-v-3qxhk5"};const humanReadableVariantMap={"Inactive":"V04GCGitD","Active":"jGXji_JfB"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style:externalStyle={},className,width,height,layoutId,variant:outerVariant="V04GCGitD",text:S816k00jb="Item name",click:DnolRWpRR,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"V04GCGitD",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapgxd8uc=activeVariantCallback(async(...args)=>{if(DnolRWpRR){const res=await DnolRWpRR(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({"jGXji_JfB":{"V04GCGitD":{"data-framer-name":"Active"},"b7sReXJqg":{"fill":"#4DAAA9"}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-UjkEX",classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:"auto"},children:/*#__PURE__*/ _jsx(Stack,{...restProps,layoutId:"V04GCGitD",className:cx("framer-gxd8uc",className),style:{"backgroundColor":"transparent","borderBottomLeftRadius":0,"borderBottomRightRadius":0,"borderTopRightRadius":0,"borderTopLeftRadius":0,...style},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"8px 8px 8px 8px"},center:false,"data-highlight":true,"data-framer-name":"Inactive",onTap:onTapgxd8uc,variants:{"V04GCGitD-hover":{"backgroundColor":"rgba(77, 77, 77, 0.05)","borderBottomLeftRadius":10,"borderBottomRightRadius":10,"borderTopRightRadius":10,"borderTopLeftRadius":10},"jGXji_JfB-hover":{"backgroundColor":"rgba(77, 77, 77, 0.05)"}},transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("V04GCGitD"),children:/*#__PURE__*/ _jsxs(Stack,{layoutId:"LWKA4bXd2",className:"framer-cmv71m",style:{},background:null,direction:"horizontal",distribution:"start",alignment:"center",gap:8,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("LWKA4bXd2"),children:[/*#__PURE__*/ _jsx(SVG,{style:{},withExternalLayout:true,intrinsicHeight:24,intrinsicWidth:24,layoutId:"b7sReXJqg",className:"framer-i6nevz",fill:"#656976","data-framer-name":"graphic",svg:"<svg width=\"24\" height=\"24\" stroke-width=\"1.5\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 9.5 12 4l9 5.5M19 13v6.4a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V13\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("b7sReXJqg")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Poppins\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-d2e53614-ba81-4ca6-ac05-fa9f299af51f, rgb(101, 105, 118))","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"left"},withExternalLayout:true,verticalAlignment:"center",__fromCanvasComponent:true,alignment:"left",fonts:["GF;Poppins-regular"],layoutId:"AnOg0OMtE",className:"framer-18tghmn",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='font-size: 0'><span style=''>Item name</span><br></span></span>",text:S816k00jb,variants:{"jGXji_JfB":{"--framer-text-color":"var(--token-732727b4-4388-4f67-96f1-a4d9eb9afc08, rgb(4, 6, 7))"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("AnOg0OMtE")})]})})})}));});const css=[".framer-UjkEX [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-UjkEX * { box-sizing: border-box; }",".framer-UjkEX .framer-gxd8uc { position: relative; cursor: pointer; overflow: hidden; width: 172px; height: min-content; }",".framer-UjkEX .framer-cmv71m { position: relative; overflow: visible; width: 124px; height: 24px; flex: none; }",".framer-UjkEX .framer-i6nevz { position: relative; width: 20px; height: var(--framer-aspect-ratio-supported, 20px); flex: none; aspect-ratio: 1 / 1; }",".framer-UjkEX .framer-18tghmn { position: relative; width: auto; height: auto; flex: none; white-space: pre; }",".framer-UjkEX.framer-v-gxd8uc .framer-gxd8uc, .framer-UjkEX.framer-v-3qxhk5 .framer-gxd8uc { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 40
 * @framerIntrinsicWidth 172
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "auto"]}, "jGXji_JfB": {"layout": ["fixed", "auto"]}, "psl_JBLFe": {"layout": ["fixed", "auto"]}, "ruxyz7hBd": {"layout": ["fixed", "auto"]}}}
 * @framerVariables {"S816k00jb": "text", "DnolRWpRR": "click"}
 */ const FramerTZaUnCvx0=withCSS(Component,css);export default FramerTZaUnCvx0;FramerTZaUnCvx0.displayName="PR / Side Menu Item";FramerTZaUnCvx0.defaultProps={"width":172,"height":40};addPropertyControls(FramerTZaUnCvx0,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["V04GCGitD","jGXji_JfB"],"optionTitles":["Inactive","Active"]},"S816k00jb":{"type":ControlType.String,"title":"Text","defaultValue":"Item name","displayTextArea":false},"DnolRWpRR":{"type":ControlType.EventHandler,"title":"Click"}});addFonts(FramerTZaUnCvx0,[{"url":"https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf","family":"Poppins","style":"normal","weight":"400","moduleAsset":{"url":"https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf","localModuleIdentifier":"local-module:canvasComponent/TZaUnCvx0:default"}}]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerTZaUnCvx0","slots":[],"annotations":{"framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"auto\"]}, \"jGXji_JfB\": {\"layout\": [\"fixed\", \"auto\"]}, \"psl_JBLFe\": {\"layout\": [\"fixed\", \"auto\"]}, \"ruxyz7hBd\": {\"layout\": [\"fixed\", \"auto\"]}}}","framerIntrinsicHeight":"40","framerVariables":"{\"S816k00jb\": \"text\", \"DnolRWpRR\": \"click\"}","framerIntrinsicWidth":"172"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./TZaUnCvx0.map