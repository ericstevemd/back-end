
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model producto
 * 
 */
export type producto = $Result.DefaultSelection<Prisma.$productoPayload>
/**
 * Model factura
 * 
 */
export type factura = $Result.DefaultSelection<Prisma.$facturaPayload>
/**
 * Model detalleFactura
 * 
 */
export type detalleFactura = $Result.DefaultSelection<Prisma.$detalleFacturaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.productoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.facturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleFactura`: Exposes CRUD operations for the **detalleFactura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleFacturas
    * const detalleFacturas = await prisma.detalleFactura.findMany()
    * ```
    */
  get detalleFactura(): Prisma.detalleFacturaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cliente: 'cliente',
    producto: 'producto',
    factura: 'factura',
    detalleFactura: 'detalleFactura'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "producto" | "factura" | "detalleFactura"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      producto: {
        payload: Prisma.$productoPayload<ExtArgs>
        fields: Prisma.productoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          findFirst: {
            args: Prisma.productoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          findMany: {
            args: Prisma.productoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>[]
          }
          create: {
            args: Prisma.productoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          createMany: {
            args: Prisma.productoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>[]
          }
          delete: {
            args: Prisma.productoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          update: {
            args: Prisma.productoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          deleteMany: {
            args: Prisma.productoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>[]
          }
          upsert: {
            args: Prisma.productoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.productoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.productoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      factura: {
        payload: Prisma.$facturaPayload<ExtArgs>
        fields: Prisma.facturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>
          }
          findFirst: {
            args: Prisma.facturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>
          }
          findMany: {
            args: Prisma.facturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>[]
          }
          create: {
            args: Prisma.facturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>
          }
          createMany: {
            args: Prisma.facturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.facturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>[]
          }
          delete: {
            args: Prisma.facturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>
          }
          update: {
            args: Prisma.facturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>
          }
          deleteMany: {
            args: Prisma.facturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.facturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.facturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>[]
          }
          upsert: {
            args: Prisma.facturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.facturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.facturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
          }
        }
      }
      detalleFactura: {
        payload: Prisma.$detalleFacturaPayload<ExtArgs>
        fields: Prisma.detalleFacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalleFacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalleFacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>
          }
          findFirst: {
            args: Prisma.detalleFacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalleFacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>
          }
          findMany: {
            args: Prisma.detalleFacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>[]
          }
          create: {
            args: Prisma.detalleFacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>
          }
          createMany: {
            args: Prisma.detalleFacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detalleFacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>[]
          }
          delete: {
            args: Prisma.detalleFacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>
          }
          update: {
            args: Prisma.detalleFacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>
          }
          deleteMany: {
            args: Prisma.detalleFacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalleFacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detalleFacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>[]
          }
          upsert: {
            args: Prisma.detalleFacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleFacturaPayload>
          }
          aggregate: {
            args: Prisma.DetalleFacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleFactura>
          }
          groupBy: {
            args: Prisma.detalleFacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleFacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalleFacturaCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleFacturaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: clienteOmit
    producto?: productoOmit
    factura?: facturaOmit
    detalleFactura?: detalleFacturaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    Facturas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Facturas?: boolean | ClienteCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facturaWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    detalles: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | ProductoCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleFacturaWhereInput
  }


  /**
   * Count Type FacturaCountOutputType
   */

  export type FacturaCountOutputType = {
    detalles: number
  }

  export type FacturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | FacturaCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCountOutputType
     */
    select?: FacturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleFacturaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    Ruc: string | null
    correo: string | null
    telefono: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    Ruc: string | null
    correo: string | null
    telefono: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    Ruc: number
    correo: number
    telefono: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    Ruc?: true
    correo?: true
    telefono?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    Ruc?: true
    correo?: true
    telefono?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    Ruc?: true
    correo?: true
    telefono?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombre: string
    Ruc: string
    correo: string
    telefono: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    Ruc?: boolean
    correo?: boolean
    telefono?: boolean
    Facturas?: boolean | cliente$FacturasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    Ruc?: boolean
    correo?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    Ruc?: boolean
    correo?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    Ruc?: boolean
    correo?: boolean
    telefono?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "Ruc" | "correo" | "telefono", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Facturas?: boolean | cliente$FacturasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      Facturas: Prisma.$facturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      Ruc: string
      correo: string
      telefono: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Facturas<T extends cliente$FacturasArgs<ExtArgs> = {}>(args?: Subset<T, cliente$FacturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly id: FieldRef<"cliente", 'Int'>
    readonly nombre: FieldRef<"cliente", 'String'>
    readonly Ruc: FieldRef<"cliente", 'String'>
    readonly correo: FieldRef<"cliente", 'String'>
    readonly telefono: FieldRef<"cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente updateManyAndReturn
   */
  export type clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.Facturas
   */
  export type cliente$FacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    where?: facturaWhereInput
    orderBy?: facturaOrderByWithRelationInput | facturaOrderByWithRelationInput[]
    cursor?: facturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    stock: number | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    stock: number | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    stock: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    stock?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    stock?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    stock?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which producto to aggregate.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type productoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productoWhereInput
    orderBy?: productoOrderByWithAggregationInput | productoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: productoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    precio: number
    stock: number
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends productoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type productoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
    detalles?: boolean | producto$detallesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type productoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
  }, ExtArgs["result"]["producto"]>

  export type productoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
  }, ExtArgs["result"]["producto"]>

  export type productoSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
  }

  export type productoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio" | "stock", ExtArgs["result"]["producto"]>
  export type productoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | producto$detallesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "producto"
    objects: {
      detalles: Prisma.$detalleFacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      stock: number
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type productoGetPayload<S extends boolean | null | undefined | productoDefaultArgs> = $Result.GetResult<Prisma.$productoPayload, S>

  type productoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface productoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['producto'], meta: { name: 'producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {productoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productoFindUniqueArgs>(args: SelectSubset<T, productoFindUniqueArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productoFindUniqueOrThrowArgs>(args: SelectSubset<T, productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productoFindFirstArgs>(args?: SelectSubset<T, productoFindFirstArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productoFindFirstOrThrowArgs>(args?: SelectSubset<T, productoFindFirstOrThrowArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productoFindManyArgs>(args?: SelectSubset<T, productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {productoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends productoCreateArgs>(args: SelectSubset<T, productoCreateArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productoCreateManyArgs>(args?: SelectSubset<T, productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {productoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productoCreateManyAndReturnArgs>(args?: SelectSubset<T, productoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {productoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends productoDeleteArgs>(args: SelectSubset<T, productoDeleteArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {productoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productoUpdateArgs>(args: SelectSubset<T, productoUpdateArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productoDeleteManyArgs>(args?: SelectSubset<T, productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productoUpdateManyArgs>(args: SelectSubset<T, productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {productoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productoUpdateManyAndReturnArgs>(args: SelectSubset<T, productoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {productoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends productoUpsertArgs>(args: SelectSubset<T, productoUpsertArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productoCountArgs>(
      args?: Subset<T, productoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productoGroupByArgs['orderBy'] }
        : { orderBy?: productoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the producto model
   */
  readonly fields: productoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalles<T extends producto$detallesArgs<ExtArgs> = {}>(args?: Subset<T, producto$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the producto model
   */
  interface productoFieldRefs {
    readonly id: FieldRef<"producto", 'Int'>
    readonly nombre: FieldRef<"producto", 'String'>
    readonly precio: FieldRef<"producto", 'Float'>
    readonly stock: FieldRef<"producto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * producto findUnique
   */
  export type productoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findUniqueOrThrow
   */
  export type productoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findFirst
   */
  export type productoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto findFirstOrThrow
   */
  export type productoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto findMany
   */
  export type productoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto create
   */
  export type productoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The data needed to create a producto.
     */
    data: XOR<productoCreateInput, productoUncheckedCreateInput>
  }

  /**
   * producto createMany
   */
  export type productoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productoCreateManyInput | productoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * producto createManyAndReturn
   */
  export type productoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * The data used to create many productos.
     */
    data: productoCreateManyInput | productoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * producto update
   */
  export type productoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The data needed to update a producto.
     */
    data: XOR<productoUpdateInput, productoUncheckedUpdateInput>
    /**
     * Choose, which producto to update.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto updateMany
   */
  export type productoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productoUpdateManyMutationInput, productoUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * producto updateManyAndReturn
   */
  export type productoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * The data used to update productos.
     */
    data: XOR<productoUpdateManyMutationInput, productoUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * producto upsert
   */
  export type productoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The filter to search for the producto to update in case it exists.
     */
    where: productoWhereUniqueInput
    /**
     * In case the producto found by the `where` argument doesn't exist, create a new producto with this data.
     */
    create: XOR<productoCreateInput, productoUncheckedCreateInput>
    /**
     * In case the producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productoUpdateInput, productoUncheckedUpdateInput>
  }

  /**
   * producto delete
   */
  export type productoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter which producto to delete.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto deleteMany
   */
  export type productoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * producto.detalles
   */
  export type producto$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    where?: detalleFacturaWhereInput
    orderBy?: detalleFacturaOrderByWithRelationInput | detalleFacturaOrderByWithRelationInput[]
    cursor?: detalleFacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * producto without action
   */
  export type productoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
  }


  /**
   * Model factura
   */

  export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  export type FacturaAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    total: number | null
  }

  export type FacturaSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    total: number | null
  }

  export type FacturaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    clienteId: number | null
    total: number | null
  }

  export type FacturaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    clienteId: number | null
    total: number | null
  }

  export type FacturaCountAggregateOutputType = {
    id: number
    fecha: number
    clienteId: number
    total: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    id?: true
    clienteId?: true
    total?: true
  }

  export type FacturaSumAggregateInputType = {
    id?: true
    clienteId?: true
    total?: true
  }

  export type FacturaMinAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    total?: true
  }

  export type FacturaMaxAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    total?: true
  }

  export type FacturaCountAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    total?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which factura to aggregate.
     */
    where?: facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facturas to fetch.
     */
    orderBy?: facturaOrderByWithRelationInput | facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facturas
    **/
    _count?: true | FacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaMaxAggregateInputType
  }

  export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura[P]>
      : GetScalarType<T[P], AggregateFactura[P]>
  }




  export type facturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facturaWhereInput
    orderBy?: facturaOrderByWithAggregationInput | facturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: facturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCountAggregateInputType | true
    _avg?: FacturaAvgAggregateInputType
    _sum?: FacturaSumAggregateInputType
    _min?: FacturaMinAggregateInputType
    _max?: FacturaMaxAggregateInputType
  }

  export type FacturaGroupByOutputType = {
    id: number
    fecha: Date
    clienteId: number
    total: number
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends facturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaGroupByOutputType[P]>
        }
      >
    >


  export type facturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    clienteId?: boolean
    total?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    detalles?: boolean | factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type facturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    clienteId?: boolean
    total?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type facturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    clienteId?: boolean
    total?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type facturaSelectScalar = {
    id?: boolean
    fecha?: boolean
    clienteId?: boolean
    total?: boolean
  }

  export type facturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "clienteId" | "total", ExtArgs["result"]["factura"]>
  export type facturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    detalles?: boolean | factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type facturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type facturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }

  export type $facturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "factura"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs>
      detalles: Prisma.$detalleFacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      clienteId: number
      total: number
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type facturaGetPayload<S extends boolean | null | undefined | facturaDefaultArgs> = $Result.GetResult<Prisma.$facturaPayload, S>

  type facturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<facturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface facturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['factura'], meta: { name: 'factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {facturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facturaFindUniqueArgs>(args: SelectSubset<T, facturaFindUniqueArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facturaFindUniqueOrThrowArgs>(args: SelectSubset<T, facturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facturaFindFirstArgs>(args?: SelectSubset<T, facturaFindFirstArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facturaFindFirstOrThrowArgs>(args?: SelectSubset<T, facturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.factura.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.factura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaWithIdOnly = await prisma.factura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends facturaFindManyArgs>(args?: SelectSubset<T, facturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura.
     * @param {facturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends facturaCreateArgs>(args: SelectSubset<T, facturaCreateArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {facturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends facturaCreateManyArgs>(args?: SelectSubset<T, facturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {facturaCreateManyAndReturnArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends facturaCreateManyAndReturnArgs>(args?: SelectSubset<T, facturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factura.
     * @param {facturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends facturaDeleteArgs>(args: SelectSubset<T, facturaDeleteArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura.
     * @param {facturaUpdateArgs} args - Arguments to update one Factura.
     * @example
     * // Update one Factura
     * const factura = await prisma.factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends facturaUpdateArgs>(args: SelectSubset<T, facturaUpdateArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {facturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends facturaDeleteManyArgs>(args?: SelectSubset<T, facturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends facturaUpdateManyArgs>(args: SelectSubset<T, facturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {facturaUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends facturaUpdateManyAndReturnArgs>(args: SelectSubset<T, facturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factura.
     * @param {facturaUpsertArgs} args - Arguments to update or create a Factura.
     * @example
     * // Update or create a Factura
     * const factura = await prisma.factura.upsert({
     *   create: {
     *     // ... data to create a Factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura we want to update
     *   }
     * })
     */
    upsert<T extends facturaUpsertArgs>(args: SelectSubset<T, facturaUpsertArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends facturaCountArgs>(
      args?: Subset<T, facturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacturaAggregateArgs>(args: Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>

    /**
     * Group by Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facturaGroupByArgs['orderBy'] }
        : { orderBy?: facturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the factura model
   */
  readonly fields: facturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends factura$detallesArgs<ExtArgs> = {}>(args?: Subset<T, factura$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the factura model
   */
  interface facturaFieldRefs {
    readonly id: FieldRef<"factura", 'Int'>
    readonly fecha: FieldRef<"factura", 'DateTime'>
    readonly clienteId: FieldRef<"factura", 'Int'>
    readonly total: FieldRef<"factura", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * factura findUnique
   */
  export type facturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * Filter, which factura to fetch.
     */
    where: facturaWhereUniqueInput
  }

  /**
   * factura findUniqueOrThrow
   */
  export type facturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * Filter, which factura to fetch.
     */
    where: facturaWhereUniqueInput
  }

  /**
   * factura findFirst
   */
  export type facturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * Filter, which factura to fetch.
     */
    where?: facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facturas to fetch.
     */
    orderBy?: facturaOrderByWithRelationInput | facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facturas.
     */
    cursor?: facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * factura findFirstOrThrow
   */
  export type facturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * Filter, which factura to fetch.
     */
    where?: facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facturas to fetch.
     */
    orderBy?: facturaOrderByWithRelationInput | facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facturas.
     */
    cursor?: facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * factura findMany
   */
  export type facturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * Filter, which facturas to fetch.
     */
    where?: facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facturas to fetch.
     */
    orderBy?: facturaOrderByWithRelationInput | facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facturas.
     */
    cursor?: facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facturas.
     */
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * factura create
   */
  export type facturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * The data needed to create a factura.
     */
    data: XOR<facturaCreateInput, facturaUncheckedCreateInput>
  }

  /**
   * factura createMany
   */
  export type facturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facturas.
     */
    data: facturaCreateManyInput | facturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * factura createManyAndReturn
   */
  export type facturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * The data used to create many facturas.
     */
    data: facturaCreateManyInput | facturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * factura update
   */
  export type facturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * The data needed to update a factura.
     */
    data: XOR<facturaUpdateInput, facturaUncheckedUpdateInput>
    /**
     * Choose, which factura to update.
     */
    where: facturaWhereUniqueInput
  }

  /**
   * factura updateMany
   */
  export type facturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facturas.
     */
    data: XOR<facturaUpdateManyMutationInput, facturaUncheckedUpdateManyInput>
    /**
     * Filter which facturas to update
     */
    where?: facturaWhereInput
    /**
     * Limit how many facturas to update.
     */
    limit?: number
  }

  /**
   * factura updateManyAndReturn
   */
  export type facturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * The data used to update facturas.
     */
    data: XOR<facturaUpdateManyMutationInput, facturaUncheckedUpdateManyInput>
    /**
     * Filter which facturas to update
     */
    where?: facturaWhereInput
    /**
     * Limit how many facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * factura upsert
   */
  export type facturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * The filter to search for the factura to update in case it exists.
     */
    where: facturaWhereUniqueInput
    /**
     * In case the factura found by the `where` argument doesn't exist, create a new factura with this data.
     */
    create: XOR<facturaCreateInput, facturaUncheckedCreateInput>
    /**
     * In case the factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facturaUpdateInput, facturaUncheckedUpdateInput>
  }

  /**
   * factura delete
   */
  export type facturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
    /**
     * Filter which factura to delete.
     */
    where: facturaWhereUniqueInput
  }

  /**
   * factura deleteMany
   */
  export type facturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facturas to delete
     */
    where?: facturaWhereInput
    /**
     * Limit how many facturas to delete.
     */
    limit?: number
  }

  /**
   * factura.detalles
   */
  export type factura$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    where?: detalleFacturaWhereInput
    orderBy?: detalleFacturaOrderByWithRelationInput | detalleFacturaOrderByWithRelationInput[]
    cursor?: detalleFacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * factura without action
   */
  export type facturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factura
     */
    select?: facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factura
     */
    omit?: facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facturaInclude<ExtArgs> | null
  }


  /**
   * Model detalleFactura
   */

  export type AggregateDetalleFactura = {
    _count: DetalleFacturaCountAggregateOutputType | null
    _avg: DetalleFacturaAvgAggregateOutputType | null
    _sum: DetalleFacturaSumAggregateOutputType | null
    _min: DetalleFacturaMinAggregateOutputType | null
    _max: DetalleFacturaMaxAggregateOutputType | null
  }

  export type DetalleFacturaAvgAggregateOutputType = {
    id: number | null
    facturaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: number | null
    subtotal: number | null
  }

  export type DetalleFacturaSumAggregateOutputType = {
    id: number | null
    facturaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: number | null
    subtotal: number | null
  }

  export type DetalleFacturaMinAggregateOutputType = {
    id: number | null
    facturaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: number | null
    subtotal: number | null
  }

  export type DetalleFacturaMaxAggregateOutputType = {
    id: number | null
    facturaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: number | null
    subtotal: number | null
  }

  export type DetalleFacturaCountAggregateOutputType = {
    id: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
    _all: number
  }


  export type DetalleFacturaAvgAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
  }

  export type DetalleFacturaSumAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
  }

  export type DetalleFacturaMinAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
  }

  export type DetalleFacturaMaxAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
  }

  export type DetalleFacturaCountAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    subtotal?: true
    _all?: true
  }

  export type DetalleFacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalleFactura to aggregate.
     */
    where?: detalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleFacturas to fetch.
     */
    orderBy?: detalleFacturaOrderByWithRelationInput | detalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalleFacturas
    **/
    _count?: true | DetalleFacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleFacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleFacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleFacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleFacturaMaxAggregateInputType
  }

  export type GetDetalleFacturaAggregateType<T extends DetalleFacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleFactura[P]>
      : GetScalarType<T[P], AggregateDetalleFactura[P]>
  }




  export type detalleFacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleFacturaWhereInput
    orderBy?: detalleFacturaOrderByWithAggregationInput | detalleFacturaOrderByWithAggregationInput[]
    by: DetalleFacturaScalarFieldEnum[] | DetalleFacturaScalarFieldEnum
    having?: detalleFacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleFacturaCountAggregateInputType | true
    _avg?: DetalleFacturaAvgAggregateInputType
    _sum?: DetalleFacturaSumAggregateInputType
    _min?: DetalleFacturaMinAggregateInputType
    _max?: DetalleFacturaMaxAggregateInputType
  }

  export type DetalleFacturaGroupByOutputType = {
    id: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
    _count: DetalleFacturaCountAggregateOutputType | null
    _avg: DetalleFacturaAvgAggregateOutputType | null
    _sum: DetalleFacturaSumAggregateOutputType | null
    _min: DetalleFacturaMinAggregateOutputType | null
    _max: DetalleFacturaMaxAggregateOutputType | null
  }

  type GetDetalleFacturaGroupByPayload<T extends detalleFacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleFacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleFacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleFacturaGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleFacturaGroupByOutputType[P]>
        }
      >
    >


  export type detalleFacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
    factura?: boolean | facturaDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type detalleFacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
    factura?: boolean | facturaDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type detalleFacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
    factura?: boolean | facturaDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type detalleFacturaSelectScalar = {
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
  }

  export type detalleFacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facturaId" | "productoId" | "cantidad" | "precioUnitario" | "subtotal", ExtArgs["result"]["detalleFactura"]>
  export type detalleFacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | facturaDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }
  export type detalleFacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | facturaDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }
  export type detalleFacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | facturaDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }

  export type $detalleFacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalleFactura"
    objects: {
      factura: Prisma.$facturaPayload<ExtArgs>
      producto: Prisma.$productoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facturaId: number
      productoId: number
      cantidad: number
      precioUnitario: number
      subtotal: number
    }, ExtArgs["result"]["detalleFactura"]>
    composites: {}
  }

  type detalleFacturaGetPayload<S extends boolean | null | undefined | detalleFacturaDefaultArgs> = $Result.GetResult<Prisma.$detalleFacturaPayload, S>

  type detalleFacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalleFacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleFacturaCountAggregateInputType | true
    }

  export interface detalleFacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalleFactura'], meta: { name: 'detalleFactura' } }
    /**
     * Find zero or one DetalleFactura that matches the filter.
     * @param {detalleFacturaFindUniqueArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalleFacturaFindUniqueArgs>(args: SelectSubset<T, detalleFacturaFindUniqueArgs<ExtArgs>>): Prisma__detalleFacturaClient<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleFactura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalleFacturaFindUniqueOrThrowArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalleFacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, detalleFacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalleFacturaClient<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleFactura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleFacturaFindFirstArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalleFacturaFindFirstArgs>(args?: SelectSubset<T, detalleFacturaFindFirstArgs<ExtArgs>>): Prisma__detalleFacturaClient<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleFactura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleFacturaFindFirstOrThrowArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalleFacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, detalleFacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalleFacturaClient<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleFacturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleFacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleFacturas
     * const detalleFacturas = await prisma.detalleFactura.findMany()
     * 
     * // Get first 10 DetalleFacturas
     * const detalleFacturas = await prisma.detalleFactura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleFacturaWithIdOnly = await prisma.detalleFactura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detalleFacturaFindManyArgs>(args?: SelectSubset<T, detalleFacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleFactura.
     * @param {detalleFacturaCreateArgs} args - Arguments to create a DetalleFactura.
     * @example
     * // Create one DetalleFactura
     * const DetalleFactura = await prisma.detalleFactura.create({
     *   data: {
     *     // ... data to create a DetalleFactura
     *   }
     * })
     * 
     */
    create<T extends detalleFacturaCreateArgs>(args: SelectSubset<T, detalleFacturaCreateArgs<ExtArgs>>): Prisma__detalleFacturaClient<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleFacturas.
     * @param {detalleFacturaCreateManyArgs} args - Arguments to create many DetalleFacturas.
     * @example
     * // Create many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalleFacturaCreateManyArgs>(args?: SelectSubset<T, detalleFacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalleFacturas and returns the data saved in the database.
     * @param {detalleFacturaCreateManyAndReturnArgs} args - Arguments to create many DetalleFacturas.
     * @example
     * // Create many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetalleFacturas and only return the `id`
     * const detalleFacturaWithIdOnly = await prisma.detalleFactura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detalleFacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, detalleFacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalleFactura.
     * @param {detalleFacturaDeleteArgs} args - Arguments to delete one DetalleFactura.
     * @example
     * // Delete one DetalleFactura
     * const DetalleFactura = await prisma.detalleFactura.delete({
     *   where: {
     *     // ... filter to delete one DetalleFactura
     *   }
     * })
     * 
     */
    delete<T extends detalleFacturaDeleteArgs>(args: SelectSubset<T, detalleFacturaDeleteArgs<ExtArgs>>): Prisma__detalleFacturaClient<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleFactura.
     * @param {detalleFacturaUpdateArgs} args - Arguments to update one DetalleFactura.
     * @example
     * // Update one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalleFacturaUpdateArgs>(args: SelectSubset<T, detalleFacturaUpdateArgs<ExtArgs>>): Prisma__detalleFacturaClient<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleFacturas.
     * @param {detalleFacturaDeleteManyArgs} args - Arguments to filter DetalleFacturas to delete.
     * @example
     * // Delete a few DetalleFacturas
     * const { count } = await prisma.detalleFactura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalleFacturaDeleteManyArgs>(args?: SelectSubset<T, detalleFacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleFacturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleFacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalleFacturaUpdateManyArgs>(args: SelectSubset<T, detalleFacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleFacturas and returns the data updated in the database.
     * @param {detalleFacturaUpdateManyAndReturnArgs} args - Arguments to update many DetalleFacturas.
     * @example
     * // Update many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetalleFacturas and only return the `id`
     * const detalleFacturaWithIdOnly = await prisma.detalleFactura.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends detalleFacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, detalleFacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalleFactura.
     * @param {detalleFacturaUpsertArgs} args - Arguments to update or create a DetalleFactura.
     * @example
     * // Update or create a DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.upsert({
     *   create: {
     *     // ... data to create a DetalleFactura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleFactura we want to update
     *   }
     * })
     */
    upsert<T extends detalleFacturaUpsertArgs>(args: SelectSubset<T, detalleFacturaUpsertArgs<ExtArgs>>): Prisma__detalleFacturaClient<$Result.GetResult<Prisma.$detalleFacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleFacturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleFacturaCountArgs} args - Arguments to filter DetalleFacturas to count.
     * @example
     * // Count the number of DetalleFacturas
     * const count = await prisma.detalleFactura.count({
     *   where: {
     *     // ... the filter for the DetalleFacturas we want to count
     *   }
     * })
    **/
    count<T extends detalleFacturaCountArgs>(
      args?: Subset<T, detalleFacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleFacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleFactura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleFacturaAggregateArgs>(args: Subset<T, DetalleFacturaAggregateArgs>): Prisma.PrismaPromise<GetDetalleFacturaAggregateType<T>>

    /**
     * Group by DetalleFactura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleFacturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalleFacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalleFacturaGroupByArgs['orderBy'] }
        : { orderBy?: detalleFacturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalleFacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalleFactura model
   */
  readonly fields: detalleFacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalleFactura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalleFacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends facturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, facturaDefaultArgs<ExtArgs>>): Prisma__facturaClient<$Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends productoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productoDefaultArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalleFactura model
   */
  interface detalleFacturaFieldRefs {
    readonly id: FieldRef<"detalleFactura", 'Int'>
    readonly facturaId: FieldRef<"detalleFactura", 'Int'>
    readonly productoId: FieldRef<"detalleFactura", 'Int'>
    readonly cantidad: FieldRef<"detalleFactura", 'Int'>
    readonly precioUnitario: FieldRef<"detalleFactura", 'Float'>
    readonly subtotal: FieldRef<"detalleFactura", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * detalleFactura findUnique
   */
  export type detalleFacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which detalleFactura to fetch.
     */
    where: detalleFacturaWhereUniqueInput
  }

  /**
   * detalleFactura findUniqueOrThrow
   */
  export type detalleFacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which detalleFactura to fetch.
     */
    where: detalleFacturaWhereUniqueInput
  }

  /**
   * detalleFactura findFirst
   */
  export type detalleFacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which detalleFactura to fetch.
     */
    where?: detalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleFacturas to fetch.
     */
    orderBy?: detalleFacturaOrderByWithRelationInput | detalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalleFacturas.
     */
    cursor?: detalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * detalleFactura findFirstOrThrow
   */
  export type detalleFacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which detalleFactura to fetch.
     */
    where?: detalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleFacturas to fetch.
     */
    orderBy?: detalleFacturaOrderByWithRelationInput | detalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalleFacturas.
     */
    cursor?: detalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * detalleFactura findMany
   */
  export type detalleFacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which detalleFacturas to fetch.
     */
    where?: detalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleFacturas to fetch.
     */
    orderBy?: detalleFacturaOrderByWithRelationInput | detalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalleFacturas.
     */
    cursor?: detalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleFacturas.
     */
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * detalleFactura create
   */
  export type detalleFacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a detalleFactura.
     */
    data: XOR<detalleFacturaCreateInput, detalleFacturaUncheckedCreateInput>
  }

  /**
   * detalleFactura createMany
   */
  export type detalleFacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalleFacturas.
     */
    data: detalleFacturaCreateManyInput | detalleFacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalleFactura createManyAndReturn
   */
  export type detalleFacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * The data used to create many detalleFacturas.
     */
    data: detalleFacturaCreateManyInput | detalleFacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalleFactura update
   */
  export type detalleFacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a detalleFactura.
     */
    data: XOR<detalleFacturaUpdateInput, detalleFacturaUncheckedUpdateInput>
    /**
     * Choose, which detalleFactura to update.
     */
    where: detalleFacturaWhereUniqueInput
  }

  /**
   * detalleFactura updateMany
   */
  export type detalleFacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalleFacturas.
     */
    data: XOR<detalleFacturaUpdateManyMutationInput, detalleFacturaUncheckedUpdateManyInput>
    /**
     * Filter which detalleFacturas to update
     */
    where?: detalleFacturaWhereInput
    /**
     * Limit how many detalleFacturas to update.
     */
    limit?: number
  }

  /**
   * detalleFactura updateManyAndReturn
   */
  export type detalleFacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * The data used to update detalleFacturas.
     */
    data: XOR<detalleFacturaUpdateManyMutationInput, detalleFacturaUncheckedUpdateManyInput>
    /**
     * Filter which detalleFacturas to update
     */
    where?: detalleFacturaWhereInput
    /**
     * Limit how many detalleFacturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalleFactura upsert
   */
  export type detalleFacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the detalleFactura to update in case it exists.
     */
    where: detalleFacturaWhereUniqueInput
    /**
     * In case the detalleFactura found by the `where` argument doesn't exist, create a new detalleFactura with this data.
     */
    create: XOR<detalleFacturaCreateInput, detalleFacturaUncheckedCreateInput>
    /**
     * In case the detalleFactura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalleFacturaUpdateInput, detalleFacturaUncheckedUpdateInput>
  }

  /**
   * detalleFactura delete
   */
  export type detalleFacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
    /**
     * Filter which detalleFactura to delete.
     */
    where: detalleFacturaWhereUniqueInput
  }

  /**
   * detalleFactura deleteMany
   */
  export type detalleFacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalleFacturas to delete
     */
    where?: detalleFacturaWhereInput
    /**
     * Limit how many detalleFacturas to delete.
     */
    limit?: number
  }

  /**
   * detalleFactura without action
   */
  export type detalleFacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleFactura
     */
    select?: detalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleFactura
     */
    omit?: detalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleFacturaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    Ruc: 'Ruc',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    stock: 'stock'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    clienteId: 'clienteId',
    total: 'total'
  };

  export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum]


  export const DetalleFacturaScalarFieldEnum: {
    id: 'id',
    facturaId: 'facturaId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    subtotal: 'subtotal'
  };

  export type DetalleFacturaScalarFieldEnum = (typeof DetalleFacturaScalarFieldEnum)[keyof typeof DetalleFacturaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    id?: IntFilter<"cliente"> | number
    nombre?: StringFilter<"cliente"> | string
    Ruc?: StringFilter<"cliente"> | string
    correo?: StringFilter<"cliente"> | string
    telefono?: StringFilter<"cliente"> | string
    Facturas?: FacturaListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    Ruc?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    Facturas?: facturaOrderByRelationAggregateInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nombre?: StringFilter<"cliente"> | string
    Ruc?: StringFilter<"cliente"> | string
    telefono?: StringFilter<"cliente"> | string
    Facturas?: FacturaListRelationFilter
  }, "id" | "correo">

  export type clienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    Ruc?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    _count?: clienteCountOrderByAggregateInput
    _avg?: clienteAvgOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
    _sum?: clienteSumOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cliente"> | number
    nombre?: StringWithAggregatesFilter<"cliente"> | string
    Ruc?: StringWithAggregatesFilter<"cliente"> | string
    correo?: StringWithAggregatesFilter<"cliente"> | string
    telefono?: StringWithAggregatesFilter<"cliente"> | string
  }

  export type productoWhereInput = {
    AND?: productoWhereInput | productoWhereInput[]
    OR?: productoWhereInput[]
    NOT?: productoWhereInput | productoWhereInput[]
    id?: IntFilter<"producto"> | number
    nombre?: StringFilter<"producto"> | string
    precio?: FloatFilter<"producto"> | number
    stock?: IntFilter<"producto"> | number
    detalles?: DetalleFacturaListRelationFilter
  }

  export type productoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    detalles?: detalleFacturaOrderByRelationAggregateInput
  }

  export type productoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productoWhereInput | productoWhereInput[]
    OR?: productoWhereInput[]
    NOT?: productoWhereInput | productoWhereInput[]
    nombre?: StringFilter<"producto"> | string
    precio?: FloatFilter<"producto"> | number
    stock?: IntFilter<"producto"> | number
    detalles?: DetalleFacturaListRelationFilter
  }, "id">

  export type productoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    _count?: productoCountOrderByAggregateInput
    _avg?: productoAvgOrderByAggregateInput
    _max?: productoMaxOrderByAggregateInput
    _min?: productoMinOrderByAggregateInput
    _sum?: productoSumOrderByAggregateInput
  }

  export type productoScalarWhereWithAggregatesInput = {
    AND?: productoScalarWhereWithAggregatesInput | productoScalarWhereWithAggregatesInput[]
    OR?: productoScalarWhereWithAggregatesInput[]
    NOT?: productoScalarWhereWithAggregatesInput | productoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"producto"> | number
    nombre?: StringWithAggregatesFilter<"producto"> | string
    precio?: FloatWithAggregatesFilter<"producto"> | number
    stock?: IntWithAggregatesFilter<"producto"> | number
  }

  export type facturaWhereInput = {
    AND?: facturaWhereInput | facturaWhereInput[]
    OR?: facturaWhereInput[]
    NOT?: facturaWhereInput | facturaWhereInput[]
    id?: IntFilter<"factura"> | number
    fecha?: DateTimeFilter<"factura"> | Date | string
    clienteId?: IntFilter<"factura"> | number
    total?: FloatFilter<"factura"> | number
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    detalles?: DetalleFacturaListRelationFilter
  }

  export type facturaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    total?: SortOrder
    cliente?: clienteOrderByWithRelationInput
    detalles?: detalleFacturaOrderByRelationAggregateInput
  }

  export type facturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: facturaWhereInput | facturaWhereInput[]
    OR?: facturaWhereInput[]
    NOT?: facturaWhereInput | facturaWhereInput[]
    fecha?: DateTimeFilter<"factura"> | Date | string
    clienteId?: IntFilter<"factura"> | number
    total?: FloatFilter<"factura"> | number
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    detalles?: DetalleFacturaListRelationFilter
  }, "id">

  export type facturaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    total?: SortOrder
    _count?: facturaCountOrderByAggregateInput
    _avg?: facturaAvgOrderByAggregateInput
    _max?: facturaMaxOrderByAggregateInput
    _min?: facturaMinOrderByAggregateInput
    _sum?: facturaSumOrderByAggregateInput
  }

  export type facturaScalarWhereWithAggregatesInput = {
    AND?: facturaScalarWhereWithAggregatesInput | facturaScalarWhereWithAggregatesInput[]
    OR?: facturaScalarWhereWithAggregatesInput[]
    NOT?: facturaScalarWhereWithAggregatesInput | facturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"factura"> | number
    fecha?: DateTimeWithAggregatesFilter<"factura"> | Date | string
    clienteId?: IntWithAggregatesFilter<"factura"> | number
    total?: FloatWithAggregatesFilter<"factura"> | number
  }

  export type detalleFacturaWhereInput = {
    AND?: detalleFacturaWhereInput | detalleFacturaWhereInput[]
    OR?: detalleFacturaWhereInput[]
    NOT?: detalleFacturaWhereInput | detalleFacturaWhereInput[]
    id?: IntFilter<"detalleFactura"> | number
    facturaId?: IntFilter<"detalleFactura"> | number
    productoId?: IntFilter<"detalleFactura"> | number
    cantidad?: IntFilter<"detalleFactura"> | number
    precioUnitario?: FloatFilter<"detalleFactura"> | number
    subtotal?: FloatFilter<"detalleFactura"> | number
    factura?: XOR<FacturaScalarRelationFilter, facturaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, productoWhereInput>
  }

  export type detalleFacturaOrderByWithRelationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    factura?: facturaOrderByWithRelationInput
    producto?: productoOrderByWithRelationInput
  }

  export type detalleFacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detalleFacturaWhereInput | detalleFacturaWhereInput[]
    OR?: detalleFacturaWhereInput[]
    NOT?: detalleFacturaWhereInput | detalleFacturaWhereInput[]
    facturaId?: IntFilter<"detalleFactura"> | number
    productoId?: IntFilter<"detalleFactura"> | number
    cantidad?: IntFilter<"detalleFactura"> | number
    precioUnitario?: FloatFilter<"detalleFactura"> | number
    subtotal?: FloatFilter<"detalleFactura"> | number
    factura?: XOR<FacturaScalarRelationFilter, facturaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, productoWhereInput>
  }, "id">

  export type detalleFacturaOrderByWithAggregationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    _count?: detalleFacturaCountOrderByAggregateInput
    _avg?: detalleFacturaAvgOrderByAggregateInput
    _max?: detalleFacturaMaxOrderByAggregateInput
    _min?: detalleFacturaMinOrderByAggregateInput
    _sum?: detalleFacturaSumOrderByAggregateInput
  }

  export type detalleFacturaScalarWhereWithAggregatesInput = {
    AND?: detalleFacturaScalarWhereWithAggregatesInput | detalleFacturaScalarWhereWithAggregatesInput[]
    OR?: detalleFacturaScalarWhereWithAggregatesInput[]
    NOT?: detalleFacturaScalarWhereWithAggregatesInput | detalleFacturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detalleFactura"> | number
    facturaId?: IntWithAggregatesFilter<"detalleFactura"> | number
    productoId?: IntWithAggregatesFilter<"detalleFactura"> | number
    cantidad?: IntWithAggregatesFilter<"detalleFactura"> | number
    precioUnitario?: FloatWithAggregatesFilter<"detalleFactura"> | number
    subtotal?: FloatWithAggregatesFilter<"detalleFactura"> | number
  }

  export type clienteCreateInput = {
    nombre: string
    Ruc: string
    correo: string
    telefono: string
    Facturas?: facturaCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateInput = {
    id?: number
    nombre: string
    Ruc: string
    correo: string
    telefono: string
    Facturas?: facturaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    Ruc?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Facturas?: facturaUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    Ruc?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    Facturas?: facturaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateManyInput = {
    id?: number
    nombre: string
    Ruc: string
    correo: string
    telefono: string
  }

  export type clienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    Ruc?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type clienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    Ruc?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type productoCreateInput = {
    nombre: string
    precio: number
    stock: number
    detalles?: detalleFacturaCreateNestedManyWithoutProductoInput
  }

  export type productoUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    detalles?: detalleFacturaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    detalles?: detalleFacturaUpdateManyWithoutProductoNestedInput
  }

  export type productoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    detalles?: detalleFacturaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productoCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
  }

  export type productoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type productoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type facturaCreateInput = {
    fecha?: Date | string
    total: number
    cliente: clienteCreateNestedOneWithoutFacturasInput
    detalles?: detalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type facturaUncheckedCreateInput = {
    id?: number
    fecha?: Date | string
    clienteId: number
    total: number
    detalles?: detalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type facturaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    cliente?: clienteUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: detalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type facturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    detalles?: detalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type facturaCreateManyInput = {
    id?: number
    fecha?: Date | string
    clienteId: number
    total: number
  }

  export type facturaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type facturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type detalleFacturaCreateInput = {
    cantidad: number
    precioUnitario: number
    subtotal: number
    factura: facturaCreateNestedOneWithoutDetallesInput
    producto: productoCreateNestedOneWithoutDetallesInput
  }

  export type detalleFacturaUncheckedCreateInput = {
    id?: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type detalleFacturaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    factura?: facturaUpdateOneRequiredWithoutDetallesNestedInput
    producto?: productoUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type detalleFacturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type detalleFacturaCreateManyInput = {
    id?: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type detalleFacturaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type detalleFacturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FacturaListRelationFilter = {
    every?: facturaWhereInput
    some?: facturaWhereInput
    none?: facturaWhereInput
  }

  export type facturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    Ruc?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type clienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    Ruc?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    Ruc?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type clienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DetalleFacturaListRelationFilter = {
    every?: detalleFacturaWhereInput
    some?: detalleFacturaWhereInput
    none?: detalleFacturaWhereInput
  }

  export type detalleFacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type productoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type productoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type productoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type productoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClienteScalarRelationFilter = {
    is?: clienteWhereInput
    isNot?: clienteWhereInput
  }

  export type facturaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    total?: SortOrder
  }

  export type facturaAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    total?: SortOrder
  }

  export type facturaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    total?: SortOrder
  }

  export type facturaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    total?: SortOrder
  }

  export type facturaSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FacturaScalarRelationFilter = {
    is?: facturaWhereInput
    isNot?: facturaWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: productoWhereInput
    isNot?: productoWhereInput
  }

  export type detalleFacturaCountOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalleFacturaAvgOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalleFacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalleFacturaMinOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalleFacturaSumOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type facturaCreateNestedManyWithoutClienteInput = {
    create?: XOR<facturaCreateWithoutClienteInput, facturaUncheckedCreateWithoutClienteInput> | facturaCreateWithoutClienteInput[] | facturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: facturaCreateOrConnectWithoutClienteInput | facturaCreateOrConnectWithoutClienteInput[]
    createMany?: facturaCreateManyClienteInputEnvelope
    connect?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
  }

  export type facturaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<facturaCreateWithoutClienteInput, facturaUncheckedCreateWithoutClienteInput> | facturaCreateWithoutClienteInput[] | facturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: facturaCreateOrConnectWithoutClienteInput | facturaCreateOrConnectWithoutClienteInput[]
    createMany?: facturaCreateManyClienteInputEnvelope
    connect?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type facturaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<facturaCreateWithoutClienteInput, facturaUncheckedCreateWithoutClienteInput> | facturaCreateWithoutClienteInput[] | facturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: facturaCreateOrConnectWithoutClienteInput | facturaCreateOrConnectWithoutClienteInput[]
    upsert?: facturaUpsertWithWhereUniqueWithoutClienteInput | facturaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: facturaCreateManyClienteInputEnvelope
    set?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
    disconnect?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
    delete?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
    connect?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
    update?: facturaUpdateWithWhereUniqueWithoutClienteInput | facturaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: facturaUpdateManyWithWhereWithoutClienteInput | facturaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: facturaScalarWhereInput | facturaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type facturaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<facturaCreateWithoutClienteInput, facturaUncheckedCreateWithoutClienteInput> | facturaCreateWithoutClienteInput[] | facturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: facturaCreateOrConnectWithoutClienteInput | facturaCreateOrConnectWithoutClienteInput[]
    upsert?: facturaUpsertWithWhereUniqueWithoutClienteInput | facturaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: facturaCreateManyClienteInputEnvelope
    set?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
    disconnect?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
    delete?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
    connect?: facturaWhereUniqueInput | facturaWhereUniqueInput[]
    update?: facturaUpdateWithWhereUniqueWithoutClienteInput | facturaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: facturaUpdateManyWithWhereWithoutClienteInput | facturaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: facturaScalarWhereInput | facturaScalarWhereInput[]
  }

  export type detalleFacturaCreateNestedManyWithoutProductoInput = {
    create?: XOR<detalleFacturaCreateWithoutProductoInput, detalleFacturaUncheckedCreateWithoutProductoInput> | detalleFacturaCreateWithoutProductoInput[] | detalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: detalleFacturaCreateOrConnectWithoutProductoInput | detalleFacturaCreateOrConnectWithoutProductoInput[]
    createMany?: detalleFacturaCreateManyProductoInputEnvelope
    connect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
  }

  export type detalleFacturaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<detalleFacturaCreateWithoutProductoInput, detalleFacturaUncheckedCreateWithoutProductoInput> | detalleFacturaCreateWithoutProductoInput[] | detalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: detalleFacturaCreateOrConnectWithoutProductoInput | detalleFacturaCreateOrConnectWithoutProductoInput[]
    createMany?: detalleFacturaCreateManyProductoInputEnvelope
    connect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type detalleFacturaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<detalleFacturaCreateWithoutProductoInput, detalleFacturaUncheckedCreateWithoutProductoInput> | detalleFacturaCreateWithoutProductoInput[] | detalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: detalleFacturaCreateOrConnectWithoutProductoInput | detalleFacturaCreateOrConnectWithoutProductoInput[]
    upsert?: detalleFacturaUpsertWithWhereUniqueWithoutProductoInput | detalleFacturaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: detalleFacturaCreateManyProductoInputEnvelope
    set?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    disconnect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    delete?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    connect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    update?: detalleFacturaUpdateWithWhereUniqueWithoutProductoInput | detalleFacturaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: detalleFacturaUpdateManyWithWhereWithoutProductoInput | detalleFacturaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: detalleFacturaScalarWhereInput | detalleFacturaScalarWhereInput[]
  }

  export type detalleFacturaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<detalleFacturaCreateWithoutProductoInput, detalleFacturaUncheckedCreateWithoutProductoInput> | detalleFacturaCreateWithoutProductoInput[] | detalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: detalleFacturaCreateOrConnectWithoutProductoInput | detalleFacturaCreateOrConnectWithoutProductoInput[]
    upsert?: detalleFacturaUpsertWithWhereUniqueWithoutProductoInput | detalleFacturaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: detalleFacturaCreateManyProductoInputEnvelope
    set?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    disconnect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    delete?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    connect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    update?: detalleFacturaUpdateWithWhereUniqueWithoutProductoInput | detalleFacturaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: detalleFacturaUpdateManyWithWhereWithoutProductoInput | detalleFacturaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: detalleFacturaScalarWhereInput | detalleFacturaScalarWhereInput[]
  }

  export type clienteCreateNestedOneWithoutFacturasInput = {
    create?: XOR<clienteCreateWithoutFacturasInput, clienteUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: clienteCreateOrConnectWithoutFacturasInput
    connect?: clienteWhereUniqueInput
  }

  export type detalleFacturaCreateNestedManyWithoutFacturaInput = {
    create?: XOR<detalleFacturaCreateWithoutFacturaInput, detalleFacturaUncheckedCreateWithoutFacturaInput> | detalleFacturaCreateWithoutFacturaInput[] | detalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: detalleFacturaCreateOrConnectWithoutFacturaInput | detalleFacturaCreateOrConnectWithoutFacturaInput[]
    createMany?: detalleFacturaCreateManyFacturaInputEnvelope
    connect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
  }

  export type detalleFacturaUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<detalleFacturaCreateWithoutFacturaInput, detalleFacturaUncheckedCreateWithoutFacturaInput> | detalleFacturaCreateWithoutFacturaInput[] | detalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: detalleFacturaCreateOrConnectWithoutFacturaInput | detalleFacturaCreateOrConnectWithoutFacturaInput[]
    createMany?: detalleFacturaCreateManyFacturaInputEnvelope
    connect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type clienteUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: XOR<clienteCreateWithoutFacturasInput, clienteUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: clienteCreateOrConnectWithoutFacturasInput
    upsert?: clienteUpsertWithoutFacturasInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutFacturasInput, clienteUpdateWithoutFacturasInput>, clienteUncheckedUpdateWithoutFacturasInput>
  }

  export type detalleFacturaUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<detalleFacturaCreateWithoutFacturaInput, detalleFacturaUncheckedCreateWithoutFacturaInput> | detalleFacturaCreateWithoutFacturaInput[] | detalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: detalleFacturaCreateOrConnectWithoutFacturaInput | detalleFacturaCreateOrConnectWithoutFacturaInput[]
    upsert?: detalleFacturaUpsertWithWhereUniqueWithoutFacturaInput | detalleFacturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: detalleFacturaCreateManyFacturaInputEnvelope
    set?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    disconnect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    delete?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    connect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    update?: detalleFacturaUpdateWithWhereUniqueWithoutFacturaInput | detalleFacturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: detalleFacturaUpdateManyWithWhereWithoutFacturaInput | detalleFacturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: detalleFacturaScalarWhereInput | detalleFacturaScalarWhereInput[]
  }

  export type detalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<detalleFacturaCreateWithoutFacturaInput, detalleFacturaUncheckedCreateWithoutFacturaInput> | detalleFacturaCreateWithoutFacturaInput[] | detalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: detalleFacturaCreateOrConnectWithoutFacturaInput | detalleFacturaCreateOrConnectWithoutFacturaInput[]
    upsert?: detalleFacturaUpsertWithWhereUniqueWithoutFacturaInput | detalleFacturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: detalleFacturaCreateManyFacturaInputEnvelope
    set?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    disconnect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    delete?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    connect?: detalleFacturaWhereUniqueInput | detalleFacturaWhereUniqueInput[]
    update?: detalleFacturaUpdateWithWhereUniqueWithoutFacturaInput | detalleFacturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: detalleFacturaUpdateManyWithWhereWithoutFacturaInput | detalleFacturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: detalleFacturaScalarWhereInput | detalleFacturaScalarWhereInput[]
  }

  export type facturaCreateNestedOneWithoutDetallesInput = {
    create?: XOR<facturaCreateWithoutDetallesInput, facturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: facturaCreateOrConnectWithoutDetallesInput
    connect?: facturaWhereUniqueInput
  }

  export type productoCreateNestedOneWithoutDetallesInput = {
    create?: XOR<productoCreateWithoutDetallesInput, productoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: productoCreateOrConnectWithoutDetallesInput
    connect?: productoWhereUniqueInput
  }

  export type facturaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<facturaCreateWithoutDetallesInput, facturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: facturaCreateOrConnectWithoutDetallesInput
    upsert?: facturaUpsertWithoutDetallesInput
    connect?: facturaWhereUniqueInput
    update?: XOR<XOR<facturaUpdateToOneWithWhereWithoutDetallesInput, facturaUpdateWithoutDetallesInput>, facturaUncheckedUpdateWithoutDetallesInput>
  }

  export type productoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<productoCreateWithoutDetallesInput, productoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: productoCreateOrConnectWithoutDetallesInput
    upsert?: productoUpsertWithoutDetallesInput
    connect?: productoWhereUniqueInput
    update?: XOR<XOR<productoUpdateToOneWithWhereWithoutDetallesInput, productoUpdateWithoutDetallesInput>, productoUncheckedUpdateWithoutDetallesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type facturaCreateWithoutClienteInput = {
    fecha?: Date | string
    total: number
    detalles?: detalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type facturaUncheckedCreateWithoutClienteInput = {
    id?: number
    fecha?: Date | string
    total: number
    detalles?: detalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type facturaCreateOrConnectWithoutClienteInput = {
    where: facturaWhereUniqueInput
    create: XOR<facturaCreateWithoutClienteInput, facturaUncheckedCreateWithoutClienteInput>
  }

  export type facturaCreateManyClienteInputEnvelope = {
    data: facturaCreateManyClienteInput | facturaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type facturaUpsertWithWhereUniqueWithoutClienteInput = {
    where: facturaWhereUniqueInput
    update: XOR<facturaUpdateWithoutClienteInput, facturaUncheckedUpdateWithoutClienteInput>
    create: XOR<facturaCreateWithoutClienteInput, facturaUncheckedCreateWithoutClienteInput>
  }

  export type facturaUpdateWithWhereUniqueWithoutClienteInput = {
    where: facturaWhereUniqueInput
    data: XOR<facturaUpdateWithoutClienteInput, facturaUncheckedUpdateWithoutClienteInput>
  }

  export type facturaUpdateManyWithWhereWithoutClienteInput = {
    where: facturaScalarWhereInput
    data: XOR<facturaUpdateManyMutationInput, facturaUncheckedUpdateManyWithoutClienteInput>
  }

  export type facturaScalarWhereInput = {
    AND?: facturaScalarWhereInput | facturaScalarWhereInput[]
    OR?: facturaScalarWhereInput[]
    NOT?: facturaScalarWhereInput | facturaScalarWhereInput[]
    id?: IntFilter<"factura"> | number
    fecha?: DateTimeFilter<"factura"> | Date | string
    clienteId?: IntFilter<"factura"> | number
    total?: FloatFilter<"factura"> | number
  }

  export type detalleFacturaCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: number
    subtotal: number
    factura: facturaCreateNestedOneWithoutDetallesInput
  }

  export type detalleFacturaUncheckedCreateWithoutProductoInput = {
    id?: number
    facturaId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type detalleFacturaCreateOrConnectWithoutProductoInput = {
    where: detalleFacturaWhereUniqueInput
    create: XOR<detalleFacturaCreateWithoutProductoInput, detalleFacturaUncheckedCreateWithoutProductoInput>
  }

  export type detalleFacturaCreateManyProductoInputEnvelope = {
    data: detalleFacturaCreateManyProductoInput | detalleFacturaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type detalleFacturaUpsertWithWhereUniqueWithoutProductoInput = {
    where: detalleFacturaWhereUniqueInput
    update: XOR<detalleFacturaUpdateWithoutProductoInput, detalleFacturaUncheckedUpdateWithoutProductoInput>
    create: XOR<detalleFacturaCreateWithoutProductoInput, detalleFacturaUncheckedCreateWithoutProductoInput>
  }

  export type detalleFacturaUpdateWithWhereUniqueWithoutProductoInput = {
    where: detalleFacturaWhereUniqueInput
    data: XOR<detalleFacturaUpdateWithoutProductoInput, detalleFacturaUncheckedUpdateWithoutProductoInput>
  }

  export type detalleFacturaUpdateManyWithWhereWithoutProductoInput = {
    where: detalleFacturaScalarWhereInput
    data: XOR<detalleFacturaUpdateManyMutationInput, detalleFacturaUncheckedUpdateManyWithoutProductoInput>
  }

  export type detalleFacturaScalarWhereInput = {
    AND?: detalleFacturaScalarWhereInput | detalleFacturaScalarWhereInput[]
    OR?: detalleFacturaScalarWhereInput[]
    NOT?: detalleFacturaScalarWhereInput | detalleFacturaScalarWhereInput[]
    id?: IntFilter<"detalleFactura"> | number
    facturaId?: IntFilter<"detalleFactura"> | number
    productoId?: IntFilter<"detalleFactura"> | number
    cantidad?: IntFilter<"detalleFactura"> | number
    precioUnitario?: FloatFilter<"detalleFactura"> | number
    subtotal?: FloatFilter<"detalleFactura"> | number
  }

  export type clienteCreateWithoutFacturasInput = {
    nombre: string
    Ruc: string
    correo: string
    telefono: string
  }

  export type clienteUncheckedCreateWithoutFacturasInput = {
    id?: number
    nombre: string
    Ruc: string
    correo: string
    telefono: string
  }

  export type clienteCreateOrConnectWithoutFacturasInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutFacturasInput, clienteUncheckedCreateWithoutFacturasInput>
  }

  export type detalleFacturaCreateWithoutFacturaInput = {
    cantidad: number
    precioUnitario: number
    subtotal: number
    producto: productoCreateNestedOneWithoutDetallesInput
  }

  export type detalleFacturaUncheckedCreateWithoutFacturaInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type detalleFacturaCreateOrConnectWithoutFacturaInput = {
    where: detalleFacturaWhereUniqueInput
    create: XOR<detalleFacturaCreateWithoutFacturaInput, detalleFacturaUncheckedCreateWithoutFacturaInput>
  }

  export type detalleFacturaCreateManyFacturaInputEnvelope = {
    data: detalleFacturaCreateManyFacturaInput | detalleFacturaCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type clienteUpsertWithoutFacturasInput = {
    update: XOR<clienteUpdateWithoutFacturasInput, clienteUncheckedUpdateWithoutFacturasInput>
    create: XOR<clienteCreateWithoutFacturasInput, clienteUncheckedCreateWithoutFacturasInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutFacturasInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutFacturasInput, clienteUncheckedUpdateWithoutFacturasInput>
  }

  export type clienteUpdateWithoutFacturasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    Ruc?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type clienteUncheckedUpdateWithoutFacturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    Ruc?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type detalleFacturaUpsertWithWhereUniqueWithoutFacturaInput = {
    where: detalleFacturaWhereUniqueInput
    update: XOR<detalleFacturaUpdateWithoutFacturaInput, detalleFacturaUncheckedUpdateWithoutFacturaInput>
    create: XOR<detalleFacturaCreateWithoutFacturaInput, detalleFacturaUncheckedCreateWithoutFacturaInput>
  }

  export type detalleFacturaUpdateWithWhereUniqueWithoutFacturaInput = {
    where: detalleFacturaWhereUniqueInput
    data: XOR<detalleFacturaUpdateWithoutFacturaInput, detalleFacturaUncheckedUpdateWithoutFacturaInput>
  }

  export type detalleFacturaUpdateManyWithWhereWithoutFacturaInput = {
    where: detalleFacturaScalarWhereInput
    data: XOR<detalleFacturaUpdateManyMutationInput, detalleFacturaUncheckedUpdateManyWithoutFacturaInput>
  }

  export type facturaCreateWithoutDetallesInput = {
    fecha?: Date | string
    total: number
    cliente: clienteCreateNestedOneWithoutFacturasInput
  }

  export type facturaUncheckedCreateWithoutDetallesInput = {
    id?: number
    fecha?: Date | string
    clienteId: number
    total: number
  }

  export type facturaCreateOrConnectWithoutDetallesInput = {
    where: facturaWhereUniqueInput
    create: XOR<facturaCreateWithoutDetallesInput, facturaUncheckedCreateWithoutDetallesInput>
  }

  export type productoCreateWithoutDetallesInput = {
    nombre: string
    precio: number
    stock: number
  }

  export type productoUncheckedCreateWithoutDetallesInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
  }

  export type productoCreateOrConnectWithoutDetallesInput = {
    where: productoWhereUniqueInput
    create: XOR<productoCreateWithoutDetallesInput, productoUncheckedCreateWithoutDetallesInput>
  }

  export type facturaUpsertWithoutDetallesInput = {
    update: XOR<facturaUpdateWithoutDetallesInput, facturaUncheckedUpdateWithoutDetallesInput>
    create: XOR<facturaCreateWithoutDetallesInput, facturaUncheckedCreateWithoutDetallesInput>
    where?: facturaWhereInput
  }

  export type facturaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: facturaWhereInput
    data: XOR<facturaUpdateWithoutDetallesInput, facturaUncheckedUpdateWithoutDetallesInput>
  }

  export type facturaUpdateWithoutDetallesInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    cliente?: clienteUpdateOneRequiredWithoutFacturasNestedInput
  }

  export type facturaUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type productoUpsertWithoutDetallesInput = {
    update: XOR<productoUpdateWithoutDetallesInput, productoUncheckedUpdateWithoutDetallesInput>
    create: XOR<productoCreateWithoutDetallesInput, productoUncheckedCreateWithoutDetallesInput>
    where?: productoWhereInput
  }

  export type productoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: productoWhereInput
    data: XOR<productoUpdateWithoutDetallesInput, productoUncheckedUpdateWithoutDetallesInput>
  }

  export type productoUpdateWithoutDetallesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type productoUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type facturaCreateManyClienteInput = {
    id?: number
    fecha?: Date | string
    total: number
  }

  export type facturaUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    detalles?: detalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type facturaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    detalles?: detalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type facturaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type detalleFacturaCreateManyProductoInput = {
    id?: number
    facturaId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type detalleFacturaUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    factura?: facturaUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type detalleFacturaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type detalleFacturaUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type detalleFacturaCreateManyFacturaInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type detalleFacturaUpdateWithoutFacturaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    producto?: productoUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type detalleFacturaUncheckedUpdateWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type detalleFacturaUncheckedUpdateManyWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}