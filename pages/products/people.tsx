import PeoplePageContent from 'views/People';
import Main from 'layouts/Main';

const People = () => {
  return (
    <div className="container">
      <Main>
        <PeoplePageContent />
      </Main>
    </div>
  );
};

People.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'peoplePage'],
});

// People.getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common', 'header', 'peoplePage'])),
//   },
// });

export default People;
