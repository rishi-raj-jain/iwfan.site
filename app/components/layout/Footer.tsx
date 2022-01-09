import { github_name, site_title, twitter_name } from '~/site.config'
import { Container } from './Container'
import { CreativeCommons, CreativeCommonsBy, Feed, Github, Twitter } from '../icons'

const LayoutFooter = () => (
  <Container tag="footer" className="grid grid-cols-3 items-center py-10 text-gray-300">
    <p className="flex items-center">
      <a
        className="mr-4 flex items-center hover:text-green text-xl"
        href={`https://twitter.com/${twitter_name}`}
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
      </a>
      <a
        className="mr-4 flex items-center hover:text-green text-xl"
        href={`https://github.com/${github_name}`}
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
      <a
        className="mr-4 flex items-center hover:text-green text-xl"
        href={`https://github.com/${github_name}`}
        target="_blank"
        rel="noreferrer"
      >
        <Feed />
      </a>
    </p>
    <p className="flex items-center justify-center">
      Built with
      <a
        className="mx-2 text-gray-200 hover:text-green u-underline"
        href="https://remix.run"
        target="_blank"
        rel="noreferrer"
      >
        Remix
      </a>
      <span>&</span>
      <a
        className="mx-2 text-gray-200 hover:text-green u-underline"
        href="https://www.notion.so/"
        target="_blank"
        rel="noreferrer"
      >
        Notion.
      </a>
      Hosted on
      <a
        className="mx-2 text-gray-200 hover:text-green u-underline"
        href="https://vercel.com/"
        target="_blank"
        rel="noreferrer"
      >
        Vercel.
      </a>
    </p>
    <p className="flex items-center justify-end">
      <a
        className="mr-2 hover:text-green"
        target="_blank"
        title="Creative Commons"
        href="https://creativecommons.org/"
        rel="noreferrer"
      >
        <CreativeCommons />
      </a>
      <a
        className="mr-2 hover:text-green"
        target="_blank"
        title="Attribution 4.0 International"
        href="https://creativecommons.org/licenses/by/4.0/"
        rel="noreferrer"
      >
        <CreativeCommonsBy />
      </a>
      &copy;&nbsp;{new Date().getUTCFullYear()} {site_title}
    </p>
  </Container>
)

export default LayoutFooter