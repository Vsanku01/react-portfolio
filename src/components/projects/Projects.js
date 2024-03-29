import './Project.css';
import React, {
  useState,
  useEffect,
  useContext,
  Suspense,
  lazy,
  useCallback,
} from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import emoji from 'react-easy-emoji';
import { Fade } from 'react-reveal';
import Button from '../../components/button/Button';
import { openSource, socialMediaLinks } from '../../portfolio';
import Loading from '../../components/loading/Loading';
import 'materialize-css/dist/css/materialize.min.css';

const Projects = () => {
  const GithubRepoCard = lazy(() =>
    import('../../components/githubRepoCard/GithubRepoCard')
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = false;

  const getRepoData = useCallback(() => {
    const client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.user.pinnedItems.edges);
      })
      .catch(function (error) {
        console.log(error);
        setrepoFunction('Error');
        console.log(
          'Because of this Error, nothing is shown in place of Projects section. Projects section not configured'
        );
      });
  }, []);

  useEffect(() => {
    getRepoData();
  }, [getRepoData]);

  function setrepoFunction(array) {
    setrepo(array);
  }

  if (!(typeof repo === 'string' || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <Fade>
          <div className='row'>
            <div className='main' id='opensource'>
              <h1 className='project-title'>
                {emoji('Open Source Projects 📖')}
              </h1>
              <div className='repo-cards-div-main'>
                {repo.map((v, i) => {
                  return (
                    <GithubRepoCard key={v.node.id} isDark={isDark} repo={v} />
                  );
                })}
              </div>
              <Button
                newTab
                text='View Projects'
                className='project-button'
                href='https://projects-app.vercel.app/'
              />
            </div>
          </div>
        </Fade>
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={renderLoader()}>
        <FailedLoading />
      </Suspense>
    );
  }
};

export default Projects;
