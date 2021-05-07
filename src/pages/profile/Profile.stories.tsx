import {Meta, Story} from "@storybook/react";
import Profile, {ProfilePropsType} from "./Profile";
import {ReduxStoreProviderDecorator} from "../../AppProviderFecorator";

export default {
    title: 'Social-Network/ProfilePage',
    component: Profile,
    decorators: [ReduxStoreProviderDecorator]
} as Meta


const Template: Story<ProfilePropsType> = (args) => <Profile {...args}/>

const baseArgs = {
    profile: {
        aboutMe: 'Iam super serious engineer',
        contacts: {
            facebook: 'ssss',
            website: 'ssss',
            vk: 'ssss',
            twitter: 'ssss',
            instagram: 'ssss',
            youtube: 'ssss',
            github: 'ssss',
            mainLink: 'ssss'
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'ssss',
        fullName: 'ssss',
        userId: 2,
        photos: {
            small: 'ssss',
            large: 'ssss',
        }
    }
}
export const ProfilePageWithUser = Template.bind({})
ProfilePageWithUser.args = {
    ...baseArgs,
}
export const ProfilePageWithoutUserExample = Template.bind({})
ProfilePageWithoutUserExample.args = {
    ...baseArgs,
    profile: null
}
