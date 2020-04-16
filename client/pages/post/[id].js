import { useState, createRef } from 'react';
import { useRouter } from 'next/router';
import {
    Container,
    Grid,
    Header,
    Menu,
    Ref,
    Sticky,
    Image,
    Label,
    Button,
    Divider,
    Segment
} from "semantic-ui-react";
import CommentExampleThreaded from "../../app/components/examples/Comment";
import { CommonLayout } from "../../app/layouts";

const Publisher = ({ name, time, avatar }) => (
    <>
        <Label as='a' basic image>
            <img src={ avatar } />
            { name }
        </Label>
        <Label as='a' basic>
            { time }
        </Label>
    </>
);

const ImageWrap = ({ src }) => (
    <div style={{ paddingBottom: '10px' }}>
        <Image rounded src={src} centered />
    </div>
);

const TagBar = ({ tags }) => {
    return (
        <div style={{ paddingBottom: '20px' }}>
            {tags.map((v, k) => (
                <Label key={k} as='a' horizontal>
                    { v }
                </Label>
            ))}
        </div>
    )
};

const Company = ({ src, title, subTitle }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <div style={{
            paddingRight: '10px'
        }}>
            <Image rounded src={src} size='tiny' />
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div>
                <Header as={'a'}>
                    { title }
                </Header>
            </div>
            <span>
                { subTitle }
            </span>
        </div>
    </div>
);

const PublisherSegmentItem = ({ src, title, subTitle }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <div>
            <Company
                src={src}
                title={title}
                subTitle={subTitle}
            />
        </div>
        <div>
            <Button basic color='green'>
                Подписаться
            </Button>
        </div>
    </div>
);

const CompanyBanner = () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
    }}>
        <div>
            <ImageWrap src="/images/tmp/ef9651c3e10ff0f9621e263adbfe3c91.png" />
        </div>
        <PublisherSegmentItem
            src="https://habrastorage.org/getpro/habr/company/de3/eb1/713/de3eb17133e3c96998ca610c74492640.jpg"
            title="Онлайн-кинотеатр ivi"
            subTitle="Компания"
        />

        <Divider />
    </div>
);

const Post = () => {
    const [ activeItem, setActiveItem ] = useState('home');

    const contextRef = createRef();
    const router = useRouter();

    const onItemClick = (e, { name }) => {
        setActiveItem(name);
        router.push('/');
    };

    return (
        <CommonLayout>
            <Container>
                <CompanyBanner />
                <Grid>
                    <Ref innerRef={contextRef}>
                        <Grid.Row columns={2}>
                            <Grid.Column width={13}>

                                    <Publisher
                                        name='SashulyaK'
                                        time='сегодня в 13:08'
                                        avatar="https://habrastorage.org/getpro/habr/avatars/791/217/d31/791217d314e7458aef0f63497e212538.png"
                                    />
                                    <Header as='h1'>
                                        Как мы научились делить видео на сцены с помощью хитрой математики
                                    </Header>

                                    <TagBar tags={[
                                        "Разработка под Arduino",
                                        "Периферия",
                                        "DIY или Сделай сам"
                                    ]} />

                                    <p>
                                        За 10 лет существования ivi мы собрали базу из 90000 видео разной длины, размера и качества. Каждую неделю появляются сотни новых. У нас есть гигабайты метаданных, которые полезны для рекомендаций, упрощают навигацию по сервису и настройку рекламы. Но извлекать информацию непосредственно из видео мы начали только два года назад.
                                    </p>
                                    <p>
                                        В этой статье я расскажу, как мы разбираем фильмы на структурные элементы и зачем нам это нужно. В конце есть ссылка на репозиторий Github с кодом алгоритмов и примерами.
                                    </p>

                                    <ImageWrap
                                        src="/images/tmp/k4psugpjprxnpen_xkfykzemrqg.png"
                                    />

                                    <p>
                                        На монтаже кадры нарезают на группы, которые по задумке режиссёра меняют местами и склеивают обратно. Последовательность кадров от одной монтажной склейки до другой в английском языке называют термином shot. К сожалению, русская терминология неудачная, потому что в ней такие группы тоже называются кадрами. Чтобы не запутаться, давайте использовать английский термин. Только введём русскоязычный вариант:
                                    </p>

                                    <ImageWrap src="https://habrastorage.org/webt/3d/ri/5k/3dri5kfs4v30-sjr5_erajncrda.png" />
                                    <p>
                                        За 10 лет существования ivi мы собрали базу из 90000 видео разной длины, размера и качества. Каждую неделю появляются сотни новых. У нас есть гигабайты метаданных, которые полезны для рекомендаций, упрощают навигацию по сервису и настройку рекламы. Но извлекать информацию непосредственно из видео мы начали только два года назад.
                                    </p>

                                    <Tags />
                                    <PublisherSegment />

                                    <CommentExampleThreaded />

                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Sticky context={contextRef} offset={30}>
                                    <Menu pointing secondary vertical fluid>
                                        <Menu.Item
                                            name='TODO'
                                            active
                                        />
                                        <Menu.Item
                                            name='TODO'
                                        />
                                        <Menu.Item
                                            name='TODO'
                                        />
                                    </Menu>
                                </Sticky>
                            </Grid.Column>
                        </Grid.Row>
                    </Ref>
                </Grid>
            </Container>
        </CommonLayout>
    )
};

const Link = ({ href, title }) => (
    <a href={href} style={{
        paddingRight: '15px'
    }}>
        { title }
    </a>
);

const PublisherSegment = () => (
    <Segment>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px'
        }}>
            <PublisherSegmentItem
                src="https://habrastorage.org/getpro/habr/avatars/791/217/d31/791217d314e7458aef0f63497e212538.png"
                title="Александр Коншин"
                subTitle="Computer Vision Engineer"
            />
            <div style={{ paddingBottom: '10px' }} />
            <PublisherSegmentItem
                src="https://habrastorage.org/getpro/habr/company/de3/eb1/713/de3eb17133e3c96998ca610c74492640.jpg"
                title="Онлайн-кинотеатр ivi"
                subTitle="Компания"
            />

            <Divider />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Link href="/" title="Сайт" />
                <Link href="/" title="Facebook" />
                <Link href="/" title="ВКонтакте" />
            </div>
        </div>
    </Segment>
)

const Tags = () => (
    <div>
        <Label pointing as='a' tag>
            Алгоритмы
        </Label>
        <Label pointing as='a' tag>
            python
        </Label>
        <Label pointing as='a' tag>
            video scene detection
        </Label>
        <Label pointing as='a' tag>
            video processing
        </Label>
        <Label pointing as='a' tag>
            обработка видео
        </Label>
        <Label pointing as='a' tag>
            computer vision
        </Label>
        <Label pointing as='a' tag>
            компьютерное зрение
        </Label>
        <Label pointing as='a' tag>
            динамическое программирование
        </Label>
        <Label pointing as='a' tag>
            питон
        </Label>
        <Label pointing as='a' tag>
            video analysis
        </Label>
        <Label pointing as='a' tag>
            анализ видео
        </Label>
    </div>
)

export default Post;
