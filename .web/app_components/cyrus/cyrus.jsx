
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue} from "$/utils/state"
import {ColorModeContext,StateContexts,addEvents} from "$/utils/context"
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Code as RadixThemesCode,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import rehypeRaw from "rehype-raw"
import rehypeUnwrapImages from "rehype-unwrap-images"
import {Link as ReactRouterLink} from "react-router"
import {PrismAsyncLight as SyntaxHighlighter} from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import {jsx} from "@emotion/react"
import DebounceInput from "react-debounce-input"




        function ComponentMap_d8b2dcef1196f2645c614da09ad39de0 () {
            const { resolvedColorMode } = useContext(ColorModeContext)



            return (
                ({ ["h1"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h1",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"6",...props},children))), ["h2"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h2",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"5",...props},children))), ["h3"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h3",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"4",...props},children))), ["h4"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h4",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"3",...props},children))), ["h5"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h5",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"2",...props},children))), ["h6"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h6",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"1",...props},children))), ["p"] : (({node, children, ...props}) => (jsx(RadixThemesText,{as:"p",css:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),...props},children))), ["ul"] : (({node, children, ...props}) => (jsx("ul",{css:({ ["listStyleType"] : "disc", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" }),...props},children))), ["ol"] : (({node, children, ...props}) => (jsx("ol",{css:({ ["listStyleType"] : "decimal", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" }),...props},children))), ["li"] : (({node, children, ...props}) => (jsx("li",{css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),...props},children))), ["a"] : (({node, children, ...props}) => (jsx(RadixThemesLink,{css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),href:"#",...props},children))), ["code"] : (({node, children, ...props}) => (jsx(RadixThemesCode,{...props},children))), ["pre"] : (({node, ...rest}) => { const {node: childNode, className, children: components, ...props} = rest.children.props; const children = String(Array.isArray(components) ? components.join('\n') : components).replace(/\n$/, ''); const match = (className || '').match(/language-(?<lang>.*)/); let _language = match ? match[1] : ''; ;             return jsx(SyntaxHighlighter,{children:children,css:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),language:_language,style:((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? oneLight : oneDark),wrapLongLines:true,...props},);         }) })
            )
        }
        




export const Foreach_comp_b0e4ec459c6da7f3de892b97b774e5a2_7243f7c2 = memo(({children}) => {
    const reflex___state____state__cyrus___state____state = useContext(StateContexts.reflex___state____state__cyrus___state____state)



    return(
        Array.prototype.map.call(reflex___state____state__cyrus___state____state.chat_history_rx_state_ ?? [],((qa_rx_state_,index_d33e82b81d14313be7f234629705be14)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",key:index_d33e82b81d14313be7f234629705be14,gap:"3"},jsx(RadixThemesBox,{css:({ ["padding"] : "12px 16px", ["backgroundColor"] : "var(--accent-3)", ["borderRadius"] : "12px", ["alignSelf"] : "flex-end", ["maxWidth"] : "80%" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "var(--gray-12)" }),weight:"bold"},qa_rx_state_?.["question"])),jsx(RadixThemesBox,{css:({ ["padding"] : "12px 16px", ["backgroundColor"] : "var(--gray-3)", ["borderRadius"] : "12px", ["alignSelf"] : "flex-start", ["maxWidth"] : "85%" })},jsx("div",{},jsx(ReactMarkdown,{components:ComponentMap_d8b2dcef1196f2645c614da09ad39de0(),rehypePlugins:[rehypeKatex, rehypeRaw, rehypeUnwrapImages],remarkPlugins:[remarkMath, remarkGfm]},qa_rx_state_?.["answer"])))))))
    )
});

export const Debounceinput_debounceinput_2da9bb8cf9b1b319f2459befb6af7656_7243f7c2 = memo(({children}) => {
    const on_change_d96345f58499683dba1931f21485b115 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.cyrus___state____state.set_question", ({ ["question"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const on_key_down_9f2e96b9898b723c75725d1daaebbc44 = useCallback(((_e) => (addEvents([((_e?.["key"]?.valueOf?.() === "Enter"?.valueOf?.()) ? (ReflexEvent("reflex___state____state.cyrus___state____state.process_question", ({  }), ({  }))) : null)], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__cyrus___state____state = useContext(StateContexts.reflex___state____state__cyrus___state____state)



    return(
        jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_d96345f58499683dba1931f21485b115,onKeyDown:on_key_down_9f2e96b9898b723c75725d1daaebbc44,placeholder:"Ask your local model anything...",size:"3",value:(isNotNullOrUndefined(reflex___state____state__cyrus___state____state.question_rx_state_) ? reflex___state____state__cyrus___state____state.question_rx_state_ : "")},)
    )
});

export const Button_button_fd699665c37dc092e51992df08b59a0b_7243f7c2 = memo(({children}) => {
    const on_click_796ec72527e25ffba53678b5f2ba8ca5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.cyrus___state____state.process_question", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__cyrus___state____state = useContext(StateContexts.reflex___state____state__cyrus___state____state)



    return(
        jsx(RadixThemesButton,{loading:reflex___state____state__cyrus___state____state.is_processing_rx_state_,onClick:on_click_796ec72527e25ffba53678b5f2ba8ca5,size:"3"},children)
    )
});
