import {Container as RadixThemesContainer,Flex as RadixThemesFlex,Heading as RadixThemesHeading,ScrollArea as RadixThemesScrollArea,Separator as RadixThemesSeparator,Text as RadixThemesText} from "@radix-ui/themes"
import {Button_button_4781643606e2677aef40fdaece05c364_02aff3cb,Debounceinput_debounceinput_b29171dbfb7fc8cea9a012bbce0cedbf_02aff3cb,Foreach_comp_73010e855be71d089c89f715d242f8b2_02aff3cb} from "$/app_components/ai_assistant/ai_assistant"
import {Fragment,useEffect} from "react"
import {jsx} from "@emotion/react"





export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px", ["centerContent"] : true }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["maxWidth"] : "800px", ["padding"] : "6" }),direction:"column",gap:"4"},jsx(RadixThemesHeading,{css:({ ["marginBottom"] : "2" }),size:"7"},"\u26a1 Local AI Assistant"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" })},"Pure Python \u2022 Zero JS \u2022 100% Offline LLM"),jsx(RadixThemesSeparator,{size:"4"},),jsx(RadixThemesScrollArea,{css:({ ["height"] : "60vh", ["width"] : "100%", ["padding"] : "4" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},jsx(Foreach_comp_73010e855be71d089c89f715d242f8b2_02aff3cb,{},))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "4" }),direction:"row",gap:"3"},jsx(Debounceinput_debounceinput_b29171dbfb7fc8cea9a012bbce0cedbf_02aff3cb,{},),jsx(Button_button_4781643606e2677aef40fdaece05c364_02aff3cb,{},"Send")))),jsx("title",{},"AiAssistant | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}