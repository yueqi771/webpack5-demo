import React from 'react';
import NewList from './newList'


// const RemoteSlider = React.lazy(() => import('remote/Slider'))
const RemoteSlider = await import('remote/Slider')



const App = () => (
    <div>
        <h1>本地组件NewList</h1>
        < NewList />
        <React.Suspense fallback="Loading NewList">
            <RemoteSlider></RemoteSlider>
        </React.Suspense>
    </div>
)

export default App

// emp
// 版本diff， 更高的版本