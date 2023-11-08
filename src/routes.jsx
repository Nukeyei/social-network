import { Route, Routes } from "react-router-dom"
import ArticleListView from "./containers/ArtcleListView"
import ArticleDetaileView from "./containers/ArticleDetaileView";

const BaseRouter = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<ArticleListView />} />
                <Route path="/:id" element={<ArticleDetaileView />} />
            </Routes>
        </div>
    )
}

export default BaseRouter;