import React from 'react';
import {ArticleStore} from './ArticleStore';

const storesContext = React.createContext({
    articleStore: new ArticleStore(),
})

export const useStores = () => React.useContext(storesContext);
