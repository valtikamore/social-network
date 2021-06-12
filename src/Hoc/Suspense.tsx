import React from 'react'
import { Preloader } from '../components/common/Preloader/Preloader'



export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: any) => {
        let {...restProps} = props
        return (
            <React.Suspense fallback={<Preloader/>}>
                <WrappedComponent {...restProps as WCP}/>
            </React.Suspense>
        )
    }
}
