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

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'UserResponse', id: number, name: string, email: string } } };

export type RegisterUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'UserResponse', id: number, name: string, email: string } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserResponse', id: number, name: string, email: string } };

export type UserCartQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCartQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', id: number, items: Array<{ __typename?: 'CartItem', id: number, quantity: number, book: { __typename?: 'Book', id: number, title: string, coverSrc: string, author: string, year: number } }> } };

export type AddBookToCartMutationVariables = Exact<{
  bookId: Scalars['Float'];
  quantity: Scalars['Float'];
}>;


export type AddBookToCartMutation = { __typename?: 'Mutation', addBookToCart: { __typename?: 'Cart', id: number, items: Array<{ __typename?: 'CartItem', id: number, quantity: number, book: { __typename?: 'Book', id: number, title: string, coverSrc: string, author: string, year: number } }> } };


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
export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    user {
      id
      name
      email
    }
    token
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($name: String!, $email: String!, $password: String!) {
  registerUser(name: $name, email: $email, password: $password) {
    user {
      id
      name
      email
    }
    token
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserCartDocument = gql`
    query UserCart {
  cart {
    id
    items {
      id
      quantity
      book {
        id
        title
        coverSrc
        author
        year
      }
    }
  }
}
    `;

/**
 * __useUserCartQuery__
 *
 * To run a query within a React component, call `useUserCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCartQuery(baseOptions?: Apollo.QueryHookOptions<UserCartQuery, UserCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCartQuery, UserCartQueryVariables>(UserCartDocument, options);
      }
export function useUserCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCartQuery, UserCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCartQuery, UserCartQueryVariables>(UserCartDocument, options);
        }
export type UserCartQueryHookResult = ReturnType<typeof useUserCartQuery>;
export type UserCartLazyQueryHookResult = ReturnType<typeof useUserCartLazyQuery>;
export type UserCartQueryResult = Apollo.QueryResult<UserCartQuery, UserCartQueryVariables>;
export const AddBookToCartDocument = gql`
    mutation AddBookToCart($bookId: Float!, $quantity: Float!) {
  addBookToCart(bookId: $bookId, quantity: $quantity) {
    id
    items {
      id
      quantity
      book {
        id
        title
        coverSrc
        author
        year
      }
    }
  }
}
    `;
export type AddBookToCartMutationFn = Apollo.MutationFunction<AddBookToCartMutation, AddBookToCartMutationVariables>;

/**
 * __useAddBookToCartMutation__
 *
 * To run a mutation, you first call `useAddBookToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookToCartMutation, { data, loading, error }] = useAddBookToCartMutation({
 *   variables: {
 *      bookId: // value for 'bookId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useAddBookToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddBookToCartMutation, AddBookToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookToCartMutation, AddBookToCartMutationVariables>(AddBookToCartDocument, options);
      }
export type AddBookToCartMutationHookResult = ReturnType<typeof useAddBookToCartMutation>;
export type AddBookToCartMutationResult = Apollo.MutationResult<AddBookToCartMutation>;
export type AddBookToCartMutationOptions = Apollo.BaseMutationOptions<AddBookToCartMutation, AddBookToCartMutationVariables>;