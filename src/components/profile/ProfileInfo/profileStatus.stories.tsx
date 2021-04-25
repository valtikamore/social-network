import {Meta, Story} from "@storybook/react";
import {EditableSpanPropsType, ProfileStatus} from "./profileStatus";

export default {
    title: '$Social-Network/Header$',
    component: ProfileStatus
} as Meta


const Template: Story<EditableSpanPropsType> = (args) => < ProfileStatus{...args}/>

const baseArgs = {
    status:'Yo'
}
export const EditableSpanExample = Template.bind({})
EditableSpanExample.args = {
    ...baseArgs,
}
