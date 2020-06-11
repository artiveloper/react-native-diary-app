import {AsyncStorage} from 'react-native';
import {action, observable} from 'mobx';
import Reactotron from 'reactotron-react-native';

export class ArticleStore {

    @observable
    isLoading = false;

    @observable
    id = 0;

    @observable
    articles = [];

    @action
    add = (title, content) => {
        this.id = this.articles.length + 1;
        const now = new Date();
        this.articles = [{
            id: this.id,
            title: title,
            content: content,
            bookmarked: false,
            date: `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`,
        }].concat(this.articles);
        this.save();
    }

    getArticle = (id) => {
        return this.articles.find(article => {
            return article.id === id
        });
    }

    @action
    update = (id, title, content) => {
        const newArticles = [...this.articles];
        const index = newArticles.findIndex(a => {
            return a.id === id;
        });
        newArticles[index].title = title;
        newArticles[index].content = content;
        this.articles = newArticles;
        this.save();
    }

    @action
    toggle = (id) => {
        const newArticles = [...this.articles];
        const index = newArticles.findIndex(a => {
            return a.id === id;
        });
        newArticles[index].bookmarked = !newArticles[index].bookmarked;
        this.articles = newArticles;
        this.save();
    }

    save = () => {
        AsyncStorage.setItem('@diary', JSON.stringify(this.articles));
    }

    load = async () => {
        this.isLoading = true;

        const data = await AsyncStorage.getItem('@diary');
        if (data) {
            this.articles = JSON.parse(data);
            Reactotron.log('articles from load :', this.articles)
        }

        this.isLoading = false;
    }

}
