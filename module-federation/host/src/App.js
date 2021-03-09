import React from 'react';
// import NewList from './newList'
const RemoteNewList = React.lazy(() => import('remote/NewList'))


const App = () => (
    <div>
        <h1>本地组件NewList</h1>
        <React.Suspense fallback="Loading NewList">
            <RemoteNewList></RemoteNewList>
        </React.Suspense>
    </div>
)

export default App