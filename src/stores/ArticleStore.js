import {observable} from 'mobx';

export class ArticleStore {

    @observable
    articles = [
        {
            id: 1,
            title: '청춘의 문장들',
            content: '사이에 있는 것들, 쉽게 바뀌는 것들, 덧없이 사라지는 것들이 여전히 내 마음을 잡아끈다.',
            date: '2019년 4월 7일',
            bookmarked: true,
        },
        {
            id: 2,
            title: '문장들',
            content: '내게도 꿈이라는 것이 몇 개 있다.',
            date: '2019년 4월 7일',
        }
    ]

}
