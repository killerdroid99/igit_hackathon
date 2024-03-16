import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
import { ClientError } from "graphql-request";
import useSWR, {
  SWRConfiguration as SWRConfigInterface,
  Key as SWRKeyInterface,
} from "swr";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type AllPostsResponseData = {
  __typename?: "AllPostsResponseData";
  data?: Maybe<Array<Maybe<Post>>>;
  msg?: Maybe<Scalars["String"]["output"]>;
};

export type AuthResponseData = {
  __typename?: "AuthResponseData";
  fields?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  msg?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Author = {
  __typename?: "Author";
  name?: Maybe<Scalars["String"]["output"]>;
};

export type CreatePostResponseData = {
  __typename?: "CreatePostResponseData";
  data?: Maybe<Post>;
  msg?: Maybe<Scalars["String"]["output"]>;
};

export type MeResponseData = {
  __typename?: "MeResponseData";
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  msg?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  CreatePost?: Maybe<CreatePostResponseData>;
  DeletePost?: Maybe<CreatePostResponseData>;
  LoginUser?: Maybe<AuthResponseData>;
  LogoutUser?: Maybe<AuthResponseData>;
  RegisterUser?: Maybe<AuthResponseData>;
  UpdatePost?: Maybe<CreatePostResponseData>;
};

export type MutationCreatePostArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MutationDeletePostArgs = {
  postId: Scalars["String"]["input"];
};

export type MutationLoginUserArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRegisterUserArgs = {
  email: Scalars["String"]["input"];
  loginDirectly: Scalars["Boolean"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationUpdatePostArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  postId: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type Post = {
  __typename?: "Post";
  author?: Maybe<Author>;
  authorId?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type PostByIdResponseData = {
  __typename?: "PostByIdResponseData";
  data?: Maybe<Post>;
  msg?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  AllPosts?: Maybe<AllPostsResponseData>;
  Me?: Maybe<MeResponseData>;
  PostById?: Maybe<PostByIdResponseData>;
};

export type QueryPostByIdArgs = {
  postId: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type LoginUserMutationMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginUserMutationMutation = {
  __typename?: "Mutation";
  LoginUser?: {
    __typename?: "AuthResponseData";
    msg?: string | null;
    fields?: Array<string | null> | null;
    success?: boolean | null;
  } | null;
};

export type LogoutUserMutationMutationVariables = Exact<{
  [key: string]: never;
}>;

export type LogoutUserMutationMutation = {
  __typename?: "Mutation";
  LogoutUser?: {
    __typename?: "AuthResponseData";
    msg?: string | null;
    fields?: Array<string | null> | null;
    success?: boolean | null;
  } | null;
};

export type MeQueryQueryVariables = Exact<{ [key: string]: never }>;

export type MeQueryQuery = {
  __typename?: "Query";
  Me?: {
    __typename?: "MeResponseData";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    msg?: string | null;
  } | null;
};

export type RegisterUserMutationMutationVariables = Exact<{
  name: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  loginDirectly: Scalars["Boolean"]["input"];
}>;

export type RegisterUserMutationMutation = {
  __typename?: "Mutation";
  RegisterUser?: {
    __typename?: "AuthResponseData";
    msg?: string | null;
    fields?: Array<string | null> | null;
    success?: boolean | null;
  } | null;
};

export type AllPostsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsQueryQuery = {
  __typename?: "Query";
  AllPosts?: {
    __typename?: "AllPostsResponseData";
    msg?: string | null;
    data?: Array<{
      __typename?: "Post";
      id?: string | null;
      title?: string | null;
      description?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      authorId?: string | null;
      author?: { __typename?: "Author"; name?: string | null } | null;
    } | null> | null;
  } | null;
};

export type CreatePostMutationMutationVariables = Exact<{
  title: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CreatePostMutationMutation = {
  __typename?: "Mutation";
  CreatePost?: {
    __typename?: "CreatePostResponseData";
    msg?: string | null;
    data?: {
      __typename?: "Post";
      id?: string | null;
      title?: string | null;
      description?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      authorId?: string | null;
      author?: { __typename?: "Author"; name?: string | null } | null;
    } | null;
  } | null;
};

export type DeletePostMutationMutationVariables = Exact<{
  postId: Scalars["String"]["input"];
}>;

export type DeletePostMutationMutation = {
  __typename?: "Mutation";
  DeletePost?: {
    __typename?: "CreatePostResponseData";
    msg?: string | null;
    data?: {
      __typename?: "Post";
      id?: string | null;
      title?: string | null;
      description?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      authorId?: string | null;
      author?: { __typename?: "Author"; name?: string | null } | null;
    } | null;
  } | null;
};

export type PostByIdQueryQueryVariables = Exact<{
  postId: Scalars["String"]["input"];
}>;

export type PostByIdQueryQuery = {
  __typename?: "Query";
  PostById?: {
    __typename?: "PostByIdResponseData";
    msg?: string | null;
    data?: {
      __typename?: "Post";
      id?: string | null;
      title?: string | null;
      description?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      authorId?: string | null;
      author?: { __typename?: "Author"; name?: string | null } | null;
    } | null;
  } | null;
};

export type UpdatePostMutationMutationVariables = Exact<{
  postId: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdatePostMutationMutation = {
  __typename?: "Mutation";
  UpdatePost?: {
    __typename?: "CreatePostResponseData";
    msg?: string | null;
    data?: {
      __typename?: "Post";
      id?: string | null;
      title?: string | null;
      description?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      authorId?: string | null;
      author?: { __typename?: "Author"; name?: string | null } | null;
    } | null;
  } | null;
};

export const LoginUserMutationDocument = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    LoginUser(email: $email, password: $password) {
      msg
      fields
      success
    }
  }
`;
export const LogoutUserMutationDocument = gql`
  mutation LogoutUserMutation {
    LogoutUser {
      msg
      fields
      success
    }
  }
`;
export const MeQueryDocument = gql`
  query MeQuery {
    Me {
      id
      name
      email
      msg
    }
  }
`;
export const RegisterUserMutationDocument = gql`
  mutation RegisterUserMutation(
    $name: String!
    $email: String!
    $password: String!
    $loginDirectly: Boolean!
  ) {
    RegisterUser(
      name: $name
      email: $email
      password: $password
      loginDirectly: $loginDirectly
    ) {
      msg
      fields
      success
    }
  }
`;
export const AllPostsQueryDocument = gql`
  query AllPostsQuery {
    AllPosts {
      data {
        id
        title
        description
        createdAt
        updatedAt
        authorId
        author {
          name
        }
      }
      msg
    }
  }
`;
export const CreatePostMutationDocument = gql`
  mutation CreatePostMutation($title: String!, $description: String) {
    CreatePost(title: $title, description: $description) {
      data {
        id
        title
        description
        createdAt
        updatedAt
        authorId
        author {
          name
        }
      }
      msg
    }
  }
`;
export const DeletePostMutationDocument = gql`
  mutation DeletePostMutation($postId: String!) {
    DeletePost(postId: $postId) {
      data {
        id
        title
        description
        createdAt
        updatedAt
        authorId
        author {
          name
        }
      }
      msg
    }
  }
`;
export const PostByIdQueryDocument = gql`
  query PostByIdQuery($postId: String!) {
    PostById(postId: $postId) {
      data {
        id
        title
        description
        createdAt
        updatedAt
        authorId
        author {
          name
        }
      }
      msg
    }
  }
`;
export const UpdatePostMutationDocument = gql`
  mutation UpdatePostMutation(
    $postId: String!
    $title: String!
    $description: String
  ) {
    UpdatePost(postId: $postId, title: $title, description: $description) {
      data {
        id
        title
        description
        createdAt
        updatedAt
        authorId
        author {
          name
        }
      }
      msg
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    LoginUserMutation(
      variables: LoginUserMutationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<LoginUserMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginUserMutationMutation>(
            LoginUserMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "LoginUserMutation",
        "mutation",
        variables
      );
    },
    LogoutUserMutation(
      variables?: LogoutUserMutationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<LogoutUserMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LogoutUserMutationMutation>(
            LogoutUserMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "LogoutUserMutation",
        "mutation",
        variables
      );
    },
    MeQuery(
      variables?: MeQueryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<MeQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MeQueryQuery>(MeQueryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "MeQuery",
        "query",
        variables
      );
    },
    RegisterUserMutation(
      variables: RegisterUserMutationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<RegisterUserMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RegisterUserMutationMutation>(
            RegisterUserMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "RegisterUserMutation",
        "mutation",
        variables
      );
    },
    AllPostsQuery(
      variables?: AllPostsQueryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<AllPostsQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AllPostsQueryQuery>(AllPostsQueryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "AllPostsQuery",
        "query",
        variables
      );
    },
    CreatePostMutation(
      variables: CreatePostMutationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CreatePostMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreatePostMutationMutation>(
            CreatePostMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CreatePostMutation",
        "mutation",
        variables
      );
    },
    DeletePostMutation(
      variables: DeletePostMutationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<DeletePostMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeletePostMutationMutation>(
            DeletePostMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "DeletePostMutation",
        "mutation",
        variables
      );
    },
    PostByIdQuery(
      variables: PostByIdQueryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<PostByIdQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PostByIdQueryQuery>(PostByIdQueryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "PostByIdQuery",
        "query",
        variables
      );
    },
    UpdatePostMutation(
      variables: UpdatePostMutationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<UpdatePostMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdatePostMutationMutation>(
            UpdatePostMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "UpdatePostMutation",
        "mutation",
        variables
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useMeQuery(
      key: SWRKeyInterface,
      variables?: MeQueryQueryVariables,
      config?: SWRConfigInterface<MeQueryQuery, ClientError>
    ) {
      return useSWR<MeQueryQuery, ClientError>(
        key,
        () => sdk.MeQuery(variables),
        config
      );
    },
    useAllPostsQuery(
      key: SWRKeyInterface,
      variables?: AllPostsQueryQueryVariables,
      config?: SWRConfigInterface<AllPostsQueryQuery, ClientError>
    ) {
      return useSWR<AllPostsQueryQuery, ClientError>(
        key,
        () => sdk.AllPostsQuery(variables),
        config
      );
    },
    usePostByIdQuery(
      key: SWRKeyInterface,
      variables: PostByIdQueryQueryVariables,
      config?: SWRConfigInterface<PostByIdQueryQuery, ClientError>
    ) {
      return useSWR<PostByIdQueryQuery, ClientError>(
        key,
        () => sdk.PostByIdQuery(variables),
        config
      );
    },
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;
