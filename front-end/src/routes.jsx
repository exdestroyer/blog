import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './react/containers/App'
import ArticleListBox from './react/containers/ArticleListBox'
import ArticleBox from './react/containers/ArticleBox'
import Chart from './react/containers/Chart'
import InvalidUrlBox from './react/containers/InvalidUrlBox'

import { TAG_PATH, ARTICLE_PATH, CHART_PATH, HOT_PATH } from './consts/config'

export default (
    <Route path="/" component={App} >
        <IndexRoute component={ArticleListBox} />
        <Route path={TAG_PATH + ':tagId'} component={ArticleListBox} />
        <Route path={ARTICLE_PATH + ':articleId'} component={ArticleBox} />
        <Route path={HOT_PATH} component={ArticleListBox} />
        <Route path={CHART_PATH} component={Chart}/>
        <Route path='*' component={InvalidUrlBox}/>
    </Route>
)
