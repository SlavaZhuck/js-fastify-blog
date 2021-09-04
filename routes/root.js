// @ts-check

export default async (fastify) => {
  fastify.get('/', async () => {
    // const article = fastify.db.models.Article.build({
    //   name: 'some name',
    //   content: 'lala-lala',
    // });
    // await article.save();
    // console.log(article);
    const articles = await fastify.db.models.Article.findAll();
    console.log(articles);
    console.log(fastify.t('appName'));
    return 'Hello, World! ';
    // return fastify.t('appName');
  });
};
