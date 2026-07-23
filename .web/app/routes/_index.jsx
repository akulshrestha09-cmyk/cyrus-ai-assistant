import {Container as RadixThemesContainer,Flex as RadixThemesFlex,Heading as RadixThemesHeading,ScrollArea as RadixThemesScrollArea,Separator as RadixThemesSeparator,Text as RadixThemesText} from "@radix-ui/themes"
import {Button_button_fd699665c37dc092e51992df08b59a0b_7243f7c2,Debounceinput_debounceinput_2da9bb8cf9b1b319f2459befb6af7656_7243f7c2,Foreach_comp_b0e4ec459c6da7f3de892b97b774e5a2_7243f7c2} from "$/app_components/cyrus/cyrus"
import {Fragment,useEffect} from "react"
import {jsx} from "@emotion/react"





export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px", ["centerContent"] : true }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["maxWidth"] : "800px", ["padding"] : "6" }),direction:"column",gap:"4"},jsx(RadixThemesHeading,{css:({ ["marginBottom"] : "2" }),size:"7"},"\u26a1 CYRUS"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" })},"Pure Python \u2022 Zero JS \u2022 100% Offline LLM"),jsx(RadixThemesSeparator,{size:"4"},),jsx(RadixThemesScrollArea,{css:({ ["height"] : "60vh", ["width"] : "100%", ["padding"] : "4" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},jsx(Foreach_comp_b0e4ec459c6da7f3de892b97b774e5a2_7243f7c2,{},))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["marginTop"] : "4" }),direction:"row",gap:"3"},jsx(Debounceinput_debounceinput_2da9bb8cf9b1b319f2459befb6af7656_7243f7c2,{},),jsx(Button_button_fd699665c37dc092e51992df08b59a0b_7243f7c2,{},"Send")))),jsx("title",{},"Cyrus | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}