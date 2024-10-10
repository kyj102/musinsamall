import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' //앱이라는 루트폴더 밑에 있는 요소들을 페이지라우팅시키기 위해 BrowserRouter로 감싸준다

createRoot(document.getElementById('root')).render(
    <>
    <App />
    </>
)