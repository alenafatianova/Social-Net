import React from 'react'

type wrappedComponentProps = {

}

export const WithSuspense = (WrappedComponent: React.ComponentType) => {
    return (props: wrappedComponentProps) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <WrappedComponent {...props}/>
        </React.Suspense>
        
    }
}
