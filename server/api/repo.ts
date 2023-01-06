import {Octokit} from "@octokit/core";
type repo = {
    name: string;
    nameWithOwner: string;
    description: string;
    url: string;
    owner: {
        login: string;
        avatarUrl: string;
    };
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: {
        name: string;
        color: string;
    }

}
export default defineEventHandler(async (event): Promise<repo> => {
    const body = getQuery(event)
    const config = useRuntimeConfig()
    const octokit = new Octokit({
        auth: config.githubSecret,
    });
    return await octokit.graphql(`{
      repository(owner: "${body.owner}", name: "${body.name}", followRenames: true) {
        forkCount
        description
        name
        owner {
          avatarUrl
          login
        }
        url
        stargazerCount
        nameWithOwner
        primaryLanguage {
          color
          name
        }
      }
    }`)
})