import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: UserResponse;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  availableQuantity: Scalars['Int'];
  collection: Scalars['String'];
  coverSrc: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  slug: Scalars['String'];
  synopsis: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type Cart = {
  __typename?: 'Cart';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  items: Array<CartItem>;
  updatedAt: Scalars['DateTime'];
};

export type CartItem = {
  __typename?: 'CartItem';
  book: Book;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookToCart: Cart;
  createReserve: Reserve;
  loginUser: AuthResponse;
  registerUser: AuthResponse;
  removeBookFromCart: Cart;
};


export type MutationAddBookToCartArgs = {
  bookId: Scalars['Float'];
  quantity: Scalars['Float'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRemoveBookFromCartArgs = {
  bookId: Scalars['Float'];
};

export type PaginatedBooksResponse = {
  __typename?: 'PaginatedBooksResponse';
  items: Array<Book>;
  meta: PaginationMeta;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  currentPage: Scalars['Int'];
  itemCount: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allBooks: Array<Book>;
  cart: Cart;
  me: UserResponse;
  paginatedBooks: PaginatedBooksResponse;
  reserves: Array<Reserve>;
};


export type QueryPaginatedBooksArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  search: Scalars['String'];
};

export type Reserve = {
  __typename?: 'Reserve';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  items: Array<CartItem>;
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBooksQuery = { __typename?: 'Query', allBooks: Array<{ __typename?: 'Book', id: number, title: string, slug: string, coverSrc: string, synopsis: string, author: string, year: number, collection: string, availableQuantity: number, createdAt: any, updatedAt: any }> };


export const AllBooksDocument = gql`
    query AllBooks {
  allBooks {
    id
    title
    slug
    coverSrc
    synopsis
    author
    year
    collection
    availableQuantity
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useAllBooksQuery__
 *
 * To run a query within a React component, call `useAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, options);
      }
export function useAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, options);
        }
export type AllBooksQueryHookResult = ReturnType<typeof useAllBooksQuery>;
export type AllBooksLazyQueryHookResult = ReturnType<typeof useAllBooksLazyQuery>;
export type AllBooksQueryResult = Apollo.QueryResult<AllBooksQuery, AllBooksQueryVariables>;