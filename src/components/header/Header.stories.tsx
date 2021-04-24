import {Meta, Story} from "@storybook/react";
import Header from "./Header";
import {HeaderContainerPropsType} from "./HeaderContainer";

export default {
    title: 'Social-Network/Header',
    component: Header
} as Meta


const Template: Story<HeaderContainerPropsType> = (args) => <Header {...args}/>

const baseArgs = {
    login: 'Valentine'
}
export const HeaderLoginExample = Template.bind({})
HeaderLoginExample.args = {
    ...baseArgs,
    isAuth: true
}
export const HeaderLogOutExample = Template.bind({})
HeaderLogOutExample.args = {
    ...baseArgs,
    isAuth: false
}