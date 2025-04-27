
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
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model LegalOrganization
 * 
 */
export type LegalOrganization = $Result.DefaultSelection<Prisma.$LegalOrganizationPayload>
/**
 * Model Tribute
 * 
 */
export type Tribute = $Result.DefaultSelection<Prisma.$TributePayload>
/**
 * Model Municipality
 * 
 */
export type Municipality = $Result.DefaultSelection<Prisma.$MunicipalityPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model NumberingRange
 * 
 */
export type NumberingRange = $Result.DefaultSelection<Prisma.$NumberingRangePayload>
/**
 * Model Factura
 * 
 */
export type Factura = $Result.DefaultSelection<Prisma.$FacturaPayload>
/**
 * Model DetalleFactura
 * 
 */
export type DetalleFactura = $Result.DefaultSelection<Prisma.$DetalleFacturaPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>

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
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legalOrganization`: Exposes CRUD operations for the **LegalOrganization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegalOrganizations
    * const legalOrganizations = await prisma.legalOrganization.findMany()
    * ```
    */
  get legalOrganization(): Prisma.LegalOrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tribute`: Exposes CRUD operations for the **Tribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tributes
    * const tributes = await prisma.tribute.findMany()
    * ```
    */
  get tribute(): Prisma.TributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.municipality`: Exposes CRUD operations for the **Municipality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Municipalities
    * const municipalities = await prisma.municipality.findMany()
    * ```
    */
  get municipality(): Prisma.MunicipalityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.numberingRange`: Exposes CRUD operations for the **NumberingRange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NumberingRanges
    * const numberingRanges = await prisma.numberingRange.findMany()
    * ```
    */
  get numberingRange(): Prisma.NumberingRangeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **Factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.FacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleFactura`: Exposes CRUD operations for the **DetalleFactura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleFacturas
    * const detalleFacturas = await prisma.detalleFactura.findMany()
    * ```
    */
  get detalleFactura(): Prisma.DetalleFacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;
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
    Cliente: 'Cliente',
    LegalOrganization: 'LegalOrganization',
    Tribute: 'Tribute',
    Municipality: 'Municipality',
    Producto: 'Producto',
    NumberingRange: 'NumberingRange',
    Factura: 'Factura',
    DetalleFactura: 'DetalleFactura',
    Company: 'Company'
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
      modelProps: "cliente" | "legalOrganization" | "tribute" | "municipality" | "producto" | "numberingRange" | "factura" | "detalleFactura" | "company"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      LegalOrganization: {
        payload: Prisma.$LegalOrganizationPayload<ExtArgs>
        fields: Prisma.LegalOrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegalOrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegalOrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>
          }
          findFirst: {
            args: Prisma.LegalOrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegalOrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>
          }
          findMany: {
            args: Prisma.LegalOrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>[]
          }
          create: {
            args: Prisma.LegalOrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>
          }
          createMany: {
            args: Prisma.LegalOrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegalOrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>[]
          }
          delete: {
            args: Prisma.LegalOrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>
          }
          update: {
            args: Prisma.LegalOrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>
          }
          deleteMany: {
            args: Prisma.LegalOrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegalOrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegalOrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>[]
          }
          upsert: {
            args: Prisma.LegalOrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalOrganizationPayload>
          }
          aggregate: {
            args: Prisma.LegalOrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegalOrganization>
          }
          groupBy: {
            args: Prisma.LegalOrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegalOrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegalOrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<LegalOrganizationCountAggregateOutputType> | number
          }
        }
      }
      Tribute: {
        payload: Prisma.$TributePayload<ExtArgs>
        fields: Prisma.TributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>
          }
          findFirst: {
            args: Prisma.TributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>
          }
          findMany: {
            args: Prisma.TributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>[]
          }
          create: {
            args: Prisma.TributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>
          }
          createMany: {
            args: Prisma.TributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>[]
          }
          delete: {
            args: Prisma.TributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>
          }
          update: {
            args: Prisma.TributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>
          }
          deleteMany: {
            args: Prisma.TributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>[]
          }
          upsert: {
            args: Prisma.TributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TributePayload>
          }
          aggregate: {
            args: Prisma.TributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTribute>
          }
          groupBy: {
            args: Prisma.TributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TributeCountArgs<ExtArgs>
            result: $Utils.Optional<TributeCountAggregateOutputType> | number
          }
        }
      }
      Municipality: {
        payload: Prisma.$MunicipalityPayload<ExtArgs>
        fields: Prisma.MunicipalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          findFirst: {
            args: Prisma.MunicipalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          findMany: {
            args: Prisma.MunicipalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          create: {
            args: Prisma.MunicipalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          createMany: {
            args: Prisma.MunicipalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          delete: {
            args: Prisma.MunicipalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          update: {
            args: Prisma.MunicipalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          deleteMany: {
            args: Prisma.MunicipalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipalityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          upsert: {
            args: Prisma.MunicipalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          aggregate: {
            args: Prisma.MunicipalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipality>
          }
          groupBy: {
            args: Prisma.MunicipalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipalityCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      NumberingRange: {
        payload: Prisma.$NumberingRangePayload<ExtArgs>
        fields: Prisma.NumberingRangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NumberingRangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NumberingRangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>
          }
          findFirst: {
            args: Prisma.NumberingRangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NumberingRangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>
          }
          findMany: {
            args: Prisma.NumberingRangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>[]
          }
          create: {
            args: Prisma.NumberingRangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>
          }
          createMany: {
            args: Prisma.NumberingRangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NumberingRangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>[]
          }
          delete: {
            args: Prisma.NumberingRangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>
          }
          update: {
            args: Prisma.NumberingRangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>
          }
          deleteMany: {
            args: Prisma.NumberingRangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NumberingRangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NumberingRangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>[]
          }
          upsert: {
            args: Prisma.NumberingRangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberingRangePayload>
          }
          aggregate: {
            args: Prisma.NumberingRangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNumberingRange>
          }
          groupBy: {
            args: Prisma.NumberingRangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NumberingRangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NumberingRangeCountArgs<ExtArgs>
            result: $Utils.Optional<NumberingRangeCountAggregateOutputType> | number
          }
        }
      }
      Factura: {
        payload: Prisma.$FacturaPayload<ExtArgs>
        fields: Prisma.FacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findFirst: {
            args: Prisma.FacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findMany: {
            args: Prisma.FacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          create: {
            args: Prisma.FacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          createMany: {
            args: Prisma.FacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          delete: {
            args: Prisma.FacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          update: {
            args: Prisma.FacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.FacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
          }
        }
      }
      DetalleFactura: {
        payload: Prisma.$DetalleFacturaPayload<ExtArgs>
        fields: Prisma.DetalleFacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleFacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleFacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          findFirst: {
            args: Prisma.DetalleFacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleFacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          findMany: {
            args: Prisma.DetalleFacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>[]
          }
          create: {
            args: Prisma.DetalleFacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          createMany: {
            args: Prisma.DetalleFacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleFacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>[]
          }
          delete: {
            args: Prisma.DetalleFacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          update: {
            args: Prisma.DetalleFacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          deleteMany: {
            args: Prisma.DetalleFacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleFacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleFacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>[]
          }
          upsert: {
            args: Prisma.DetalleFacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          aggregate: {
            args: Prisma.DetalleFacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleFactura>
          }
          groupBy: {
            args: Prisma.DetalleFacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleFacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleFacturaCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleFacturaCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
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
    cliente?: ClienteOmit
    legalOrganization?: LegalOrganizationOmit
    tribute?: TributeOmit
    municipality?: MunicipalityOmit
    producto?: ProductoOmit
    numberingRange?: NumberingRangeOmit
    factura?: FacturaOmit
    detalleFactura?: DetalleFacturaOmit
    company?: CompanyOmit
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
    facturas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | ClienteCountOutputTypeCountFacturasArgs
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
    where?: FacturaWhereInput
  }


  /**
   * Count Type LegalOrganizationCountOutputType
   */

  export type LegalOrganizationCountOutputType = {
    clientes: number
  }

  export type LegalOrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | LegalOrganizationCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * LegalOrganizationCountOutputType without action
   */
  export type LegalOrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganizationCountOutputType
     */
    select?: LegalOrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LegalOrganizationCountOutputType without action
   */
  export type LegalOrganizationCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type TributeCountOutputType
   */

  export type TributeCountOutputType = {
    clientes: number
  }

  export type TributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | TributeCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * TributeCountOutputType without action
   */
  export type TributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TributeCountOutputType
     */
    select?: TributeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TributeCountOutputType without action
   */
  export type TributeCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type MunicipalityCountOutputType
   */

  export type MunicipalityCountOutputType = {
    clientes: number
  }

  export type MunicipalityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | MunicipalityCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityCountOutputType
     */
    select?: MunicipalityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    detallesFactura: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detallesFactura?: boolean | ProductoCountOutputTypeCountDetallesFacturaArgs
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
  export type ProductoCountOutputTypeCountDetallesFacturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleFacturaWhereInput
  }


  /**
   * Count Type NumberingRangeCountOutputType
   */

  export type NumberingRangeCountOutputType = {
    facturas: number
  }

  export type NumberingRangeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | NumberingRangeCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * NumberingRangeCountOutputType without action
   */
  export type NumberingRangeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRangeCountOutputType
     */
    select?: NumberingRangeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NumberingRangeCountOutputType without action
   */
  export type NumberingRangeCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
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
    where?: DetalleFacturaWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    facturas: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | CompanyCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
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
    legalOrganizationId: number | null
    tributeId: number | null
    municipalityId: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
    legalOrganizationId: number | null
    tributeId: number | null
    municipalityId: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    ruc: string | null
    dv: string | null
    graphicRepresentationName: string | null
    tradeName: string | null
    correo: string | null
    password: string | null
    telefono: string | null
    direccion: string | null
    company: string | null
    existe: boolean | null
    legalOrganizationId: number | null
    tributeId: number | null
    municipalityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    ruc: string | null
    dv: string | null
    graphicRepresentationName: string | null
    tradeName: string | null
    correo: string | null
    password: string | null
    telefono: string | null
    direccion: string | null
    company: string | null
    existe: boolean | null
    legalOrganizationId: number | null
    tributeId: number | null
    municipalityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    ruc: number
    dv: number
    graphicRepresentationName: number
    tradeName: number
    correo: number
    password: number
    telefono: number
    direccion: number
    company: number
    existe: number
    legalOrganizationId: number
    tributeId: number
    municipalityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
    legalOrganizationId?: true
    tributeId?: true
    municipalityId?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
    legalOrganizationId?: true
    tributeId?: true
    municipalityId?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    dv?: true
    graphicRepresentationName?: true
    tradeName?: true
    correo?: true
    password?: true
    telefono?: true
    direccion?: true
    company?: true
    existe?: true
    legalOrganizationId?: true
    tributeId?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    dv?: true
    graphicRepresentationName?: true
    tradeName?: true
    correo?: true
    password?: true
    telefono?: true
    direccion?: true
    company?: true
    existe?: true
    legalOrganizationId?: true
    tributeId?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    dv?: true
    graphicRepresentationName?: true
    tradeName?: true
    correo?: true
    password?: true
    telefono?: true
    direccion?: true
    company?: true
    existe?: true
    legalOrganizationId?: true
    tributeId?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
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




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
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
    ruc: string
    dv: string | null
    graphicRepresentationName: string
    tradeName: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company: string | null
    existe: boolean
    legalOrganizationId: number
    tributeId: number
    municipalityId: number
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
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


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    dv?: boolean
    graphicRepresentationName?: boolean
    tradeName?: boolean
    correo?: boolean
    password?: boolean
    telefono?: boolean
    direccion?: boolean
    company?: boolean
    existe?: boolean
    legalOrganizationId?: boolean
    tributeId?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facturas?: boolean | Cliente$facturasArgs<ExtArgs>
    legalOrganization?: boolean | LegalOrganizationDefaultArgs<ExtArgs>
    tribute?: boolean | TributeDefaultArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    dv?: boolean
    graphicRepresentationName?: boolean
    tradeName?: boolean
    correo?: boolean
    password?: boolean
    telefono?: boolean
    direccion?: boolean
    company?: boolean
    existe?: boolean
    legalOrganizationId?: boolean
    tributeId?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    legalOrganization?: boolean | LegalOrganizationDefaultArgs<ExtArgs>
    tribute?: boolean | TributeDefaultArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    dv?: boolean
    graphicRepresentationName?: boolean
    tradeName?: boolean
    correo?: boolean
    password?: boolean
    telefono?: boolean
    direccion?: boolean
    company?: boolean
    existe?: boolean
    legalOrganizationId?: boolean
    tributeId?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    legalOrganization?: boolean | LegalOrganizationDefaultArgs<ExtArgs>
    tribute?: boolean | TributeDefaultArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    dv?: boolean
    graphicRepresentationName?: boolean
    tradeName?: boolean
    correo?: boolean
    password?: boolean
    telefono?: boolean
    direccion?: boolean
    company?: boolean
    existe?: boolean
    legalOrganizationId?: boolean
    tributeId?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "ruc" | "dv" | "graphicRepresentationName" | "tradeName" | "correo" | "password" | "telefono" | "direccion" | "company" | "existe" | "legalOrganizationId" | "tributeId" | "municipalityId" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | Cliente$facturasArgs<ExtArgs>
    legalOrganization?: boolean | LegalOrganizationDefaultArgs<ExtArgs>
    tribute?: boolean | TributeDefaultArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legalOrganization?: boolean | LegalOrganizationDefaultArgs<ExtArgs>
    tribute?: boolean | TributeDefaultArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legalOrganization?: boolean | LegalOrganizationDefaultArgs<ExtArgs>
    tribute?: boolean | TributeDefaultArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
      legalOrganization: Prisma.$LegalOrganizationPayload<ExtArgs>
      tribute: Prisma.$TributePayload<ExtArgs>
      municipality: Prisma.$MunicipalityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      ruc: string
      dv: string | null
      graphicRepresentationName: string
      tradeName: string | null
      correo: string
      password: string
      telefono: string
      direccion: string
      company: string | null
      existe: boolean
      legalOrganizationId: number
      tributeId: number
      municipalityId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
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
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
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
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
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
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
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
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facturas<T extends Cliente$facturasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    legalOrganization<T extends LegalOrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegalOrganizationDefaultArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tribute<T extends TributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TributeDefaultArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    municipality<T extends MunicipalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipalityDefaultArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly ruc: FieldRef<"Cliente", 'String'>
    readonly dv: FieldRef<"Cliente", 'String'>
    readonly graphicRepresentationName: FieldRef<"Cliente", 'String'>
    readonly tradeName: FieldRef<"Cliente", 'String'>
    readonly correo: FieldRef<"Cliente", 'String'>
    readonly password: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly company: FieldRef<"Cliente", 'String'>
    readonly existe: FieldRef<"Cliente", 'Boolean'>
    readonly legalOrganizationId: FieldRef<"Cliente", 'Int'>
    readonly tributeId: FieldRef<"Cliente", 'Int'>
    readonly municipalityId: FieldRef<"Cliente", 'Int'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.facturas
   */
  export type Cliente$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model LegalOrganization
   */

  export type AggregateLegalOrganization = {
    _count: LegalOrganizationCountAggregateOutputType | null
    _avg: LegalOrganizationAvgAggregateOutputType | null
    _sum: LegalOrganizationSumAggregateOutputType | null
    _min: LegalOrganizationMinAggregateOutputType | null
    _max: LegalOrganizationMaxAggregateOutputType | null
  }

  export type LegalOrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type LegalOrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type LegalOrganizationMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type LegalOrganizationMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type LegalOrganizationCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type LegalOrganizationAvgAggregateInputType = {
    id?: true
  }

  export type LegalOrganizationSumAggregateInputType = {
    id?: true
  }

  export type LegalOrganizationMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type LegalOrganizationMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type LegalOrganizationCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type LegalOrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalOrganization to aggregate.
     */
    where?: LegalOrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalOrganizations to fetch.
     */
    orderBy?: LegalOrganizationOrderByWithRelationInput | LegalOrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegalOrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalOrganizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalOrganizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegalOrganizations
    **/
    _count?: true | LegalOrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegalOrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegalOrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegalOrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegalOrganizationMaxAggregateInputType
  }

  export type GetLegalOrganizationAggregateType<T extends LegalOrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateLegalOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegalOrganization[P]>
      : GetScalarType<T[P], AggregateLegalOrganization[P]>
  }




  export type LegalOrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalOrganizationWhereInput
    orderBy?: LegalOrganizationOrderByWithAggregationInput | LegalOrganizationOrderByWithAggregationInput[]
    by: LegalOrganizationScalarFieldEnum[] | LegalOrganizationScalarFieldEnum
    having?: LegalOrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegalOrganizationCountAggregateInputType | true
    _avg?: LegalOrganizationAvgAggregateInputType
    _sum?: LegalOrganizationSumAggregateInputType
    _min?: LegalOrganizationMinAggregateInputType
    _max?: LegalOrganizationMaxAggregateInputType
  }

  export type LegalOrganizationGroupByOutputType = {
    id: number
    code: string
    name: string
    _count: LegalOrganizationCountAggregateOutputType | null
    _avg: LegalOrganizationAvgAggregateOutputType | null
    _sum: LegalOrganizationSumAggregateOutputType | null
    _min: LegalOrganizationMinAggregateOutputType | null
    _max: LegalOrganizationMaxAggregateOutputType | null
  }

  type GetLegalOrganizationGroupByPayload<T extends LegalOrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegalOrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegalOrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegalOrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], LegalOrganizationGroupByOutputType[P]>
        }
      >
    >


  export type LegalOrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    clientes?: boolean | LegalOrganization$clientesArgs<ExtArgs>
    _count?: boolean | LegalOrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legalOrganization"]>

  export type LegalOrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["legalOrganization"]>

  export type LegalOrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["legalOrganization"]>

  export type LegalOrganizationSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type LegalOrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["legalOrganization"]>
  export type LegalOrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | LegalOrganization$clientesArgs<ExtArgs>
    _count?: boolean | LegalOrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LegalOrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LegalOrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LegalOrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegalOrganization"
    objects: {
      clientes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
    }, ExtArgs["result"]["legalOrganization"]>
    composites: {}
  }

  type LegalOrganizationGetPayload<S extends boolean | null | undefined | LegalOrganizationDefaultArgs> = $Result.GetResult<Prisma.$LegalOrganizationPayload, S>

  type LegalOrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegalOrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegalOrganizationCountAggregateInputType | true
    }

  export interface LegalOrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegalOrganization'], meta: { name: 'LegalOrganization' } }
    /**
     * Find zero or one LegalOrganization that matches the filter.
     * @param {LegalOrganizationFindUniqueArgs} args - Arguments to find a LegalOrganization
     * @example
     * // Get one LegalOrganization
     * const legalOrganization = await prisma.legalOrganization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegalOrganizationFindUniqueArgs>(args: SelectSubset<T, LegalOrganizationFindUniqueArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LegalOrganization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegalOrganizationFindUniqueOrThrowArgs} args - Arguments to find a LegalOrganization
     * @example
     * // Get one LegalOrganization
     * const legalOrganization = await prisma.legalOrganization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegalOrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, LegalOrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegalOrganization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalOrganizationFindFirstArgs} args - Arguments to find a LegalOrganization
     * @example
     * // Get one LegalOrganization
     * const legalOrganization = await prisma.legalOrganization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegalOrganizationFindFirstArgs>(args?: SelectSubset<T, LegalOrganizationFindFirstArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegalOrganization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalOrganizationFindFirstOrThrowArgs} args - Arguments to find a LegalOrganization
     * @example
     * // Get one LegalOrganization
     * const legalOrganization = await prisma.legalOrganization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegalOrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, LegalOrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LegalOrganizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalOrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegalOrganizations
     * const legalOrganizations = await prisma.legalOrganization.findMany()
     * 
     * // Get first 10 LegalOrganizations
     * const legalOrganizations = await prisma.legalOrganization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legalOrganizationWithIdOnly = await prisma.legalOrganization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegalOrganizationFindManyArgs>(args?: SelectSubset<T, LegalOrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LegalOrganization.
     * @param {LegalOrganizationCreateArgs} args - Arguments to create a LegalOrganization.
     * @example
     * // Create one LegalOrganization
     * const LegalOrganization = await prisma.legalOrganization.create({
     *   data: {
     *     // ... data to create a LegalOrganization
     *   }
     * })
     * 
     */
    create<T extends LegalOrganizationCreateArgs>(args: SelectSubset<T, LegalOrganizationCreateArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LegalOrganizations.
     * @param {LegalOrganizationCreateManyArgs} args - Arguments to create many LegalOrganizations.
     * @example
     * // Create many LegalOrganizations
     * const legalOrganization = await prisma.legalOrganization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegalOrganizationCreateManyArgs>(args?: SelectSubset<T, LegalOrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegalOrganizations and returns the data saved in the database.
     * @param {LegalOrganizationCreateManyAndReturnArgs} args - Arguments to create many LegalOrganizations.
     * @example
     * // Create many LegalOrganizations
     * const legalOrganization = await prisma.legalOrganization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegalOrganizations and only return the `id`
     * const legalOrganizationWithIdOnly = await prisma.legalOrganization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegalOrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, LegalOrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LegalOrganization.
     * @param {LegalOrganizationDeleteArgs} args - Arguments to delete one LegalOrganization.
     * @example
     * // Delete one LegalOrganization
     * const LegalOrganization = await prisma.legalOrganization.delete({
     *   where: {
     *     // ... filter to delete one LegalOrganization
     *   }
     * })
     * 
     */
    delete<T extends LegalOrganizationDeleteArgs>(args: SelectSubset<T, LegalOrganizationDeleteArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LegalOrganization.
     * @param {LegalOrganizationUpdateArgs} args - Arguments to update one LegalOrganization.
     * @example
     * // Update one LegalOrganization
     * const legalOrganization = await prisma.legalOrganization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegalOrganizationUpdateArgs>(args: SelectSubset<T, LegalOrganizationUpdateArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LegalOrganizations.
     * @param {LegalOrganizationDeleteManyArgs} args - Arguments to filter LegalOrganizations to delete.
     * @example
     * // Delete a few LegalOrganizations
     * const { count } = await prisma.legalOrganization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegalOrganizationDeleteManyArgs>(args?: SelectSubset<T, LegalOrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalOrganizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalOrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegalOrganizations
     * const legalOrganization = await prisma.legalOrganization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegalOrganizationUpdateManyArgs>(args: SelectSubset<T, LegalOrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalOrganizations and returns the data updated in the database.
     * @param {LegalOrganizationUpdateManyAndReturnArgs} args - Arguments to update many LegalOrganizations.
     * @example
     * // Update many LegalOrganizations
     * const legalOrganization = await prisma.legalOrganization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LegalOrganizations and only return the `id`
     * const legalOrganizationWithIdOnly = await prisma.legalOrganization.updateManyAndReturn({
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
    updateManyAndReturn<T extends LegalOrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, LegalOrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LegalOrganization.
     * @param {LegalOrganizationUpsertArgs} args - Arguments to update or create a LegalOrganization.
     * @example
     * // Update or create a LegalOrganization
     * const legalOrganization = await prisma.legalOrganization.upsert({
     *   create: {
     *     // ... data to create a LegalOrganization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegalOrganization we want to update
     *   }
     * })
     */
    upsert<T extends LegalOrganizationUpsertArgs>(args: SelectSubset<T, LegalOrganizationUpsertArgs<ExtArgs>>): Prisma__LegalOrganizationClient<$Result.GetResult<Prisma.$LegalOrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LegalOrganizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalOrganizationCountArgs} args - Arguments to filter LegalOrganizations to count.
     * @example
     * // Count the number of LegalOrganizations
     * const count = await prisma.legalOrganization.count({
     *   where: {
     *     // ... the filter for the LegalOrganizations we want to count
     *   }
     * })
    **/
    count<T extends LegalOrganizationCountArgs>(
      args?: Subset<T, LegalOrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegalOrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegalOrganization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalOrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegalOrganizationAggregateArgs>(args: Subset<T, LegalOrganizationAggregateArgs>): Prisma.PrismaPromise<GetLegalOrganizationAggregateType<T>>

    /**
     * Group by LegalOrganization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalOrganizationGroupByArgs} args - Group by arguments.
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
      T extends LegalOrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegalOrganizationGroupByArgs['orderBy'] }
        : { orderBy?: LegalOrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegalOrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegalOrganization model
   */
  readonly fields: LegalOrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegalOrganization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegalOrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends LegalOrganization$clientesArgs<ExtArgs> = {}>(args?: Subset<T, LegalOrganization$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LegalOrganization model
   */
  interface LegalOrganizationFieldRefs {
    readonly id: FieldRef<"LegalOrganization", 'Int'>
    readonly code: FieldRef<"LegalOrganization", 'String'>
    readonly name: FieldRef<"LegalOrganization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LegalOrganization findUnique
   */
  export type LegalOrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which LegalOrganization to fetch.
     */
    where: LegalOrganizationWhereUniqueInput
  }

  /**
   * LegalOrganization findUniqueOrThrow
   */
  export type LegalOrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which LegalOrganization to fetch.
     */
    where: LegalOrganizationWhereUniqueInput
  }

  /**
   * LegalOrganization findFirst
   */
  export type LegalOrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which LegalOrganization to fetch.
     */
    where?: LegalOrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalOrganizations to fetch.
     */
    orderBy?: LegalOrganizationOrderByWithRelationInput | LegalOrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalOrganizations.
     */
    cursor?: LegalOrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalOrganizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalOrganizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalOrganizations.
     */
    distinct?: LegalOrganizationScalarFieldEnum | LegalOrganizationScalarFieldEnum[]
  }

  /**
   * LegalOrganization findFirstOrThrow
   */
  export type LegalOrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which LegalOrganization to fetch.
     */
    where?: LegalOrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalOrganizations to fetch.
     */
    orderBy?: LegalOrganizationOrderByWithRelationInput | LegalOrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalOrganizations.
     */
    cursor?: LegalOrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalOrganizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalOrganizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalOrganizations.
     */
    distinct?: LegalOrganizationScalarFieldEnum | LegalOrganizationScalarFieldEnum[]
  }

  /**
   * LegalOrganization findMany
   */
  export type LegalOrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which LegalOrganizations to fetch.
     */
    where?: LegalOrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalOrganizations to fetch.
     */
    orderBy?: LegalOrganizationOrderByWithRelationInput | LegalOrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegalOrganizations.
     */
    cursor?: LegalOrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalOrganizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalOrganizations.
     */
    skip?: number
    distinct?: LegalOrganizationScalarFieldEnum | LegalOrganizationScalarFieldEnum[]
  }

  /**
   * LegalOrganization create
   */
  export type LegalOrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a LegalOrganization.
     */
    data: XOR<LegalOrganizationCreateInput, LegalOrganizationUncheckedCreateInput>
  }

  /**
   * LegalOrganization createMany
   */
  export type LegalOrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegalOrganizations.
     */
    data: LegalOrganizationCreateManyInput | LegalOrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegalOrganization createManyAndReturn
   */
  export type LegalOrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many LegalOrganizations.
     */
    data: LegalOrganizationCreateManyInput | LegalOrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegalOrganization update
   */
  export type LegalOrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a LegalOrganization.
     */
    data: XOR<LegalOrganizationUpdateInput, LegalOrganizationUncheckedUpdateInput>
    /**
     * Choose, which LegalOrganization to update.
     */
    where: LegalOrganizationWhereUniqueInput
  }

  /**
   * LegalOrganization updateMany
   */
  export type LegalOrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegalOrganizations.
     */
    data: XOR<LegalOrganizationUpdateManyMutationInput, LegalOrganizationUncheckedUpdateManyInput>
    /**
     * Filter which LegalOrganizations to update
     */
    where?: LegalOrganizationWhereInput
    /**
     * Limit how many LegalOrganizations to update.
     */
    limit?: number
  }

  /**
   * LegalOrganization updateManyAndReturn
   */
  export type LegalOrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * The data used to update LegalOrganizations.
     */
    data: XOR<LegalOrganizationUpdateManyMutationInput, LegalOrganizationUncheckedUpdateManyInput>
    /**
     * Filter which LegalOrganizations to update
     */
    where?: LegalOrganizationWhereInput
    /**
     * Limit how many LegalOrganizations to update.
     */
    limit?: number
  }

  /**
   * LegalOrganization upsert
   */
  export type LegalOrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the LegalOrganization to update in case it exists.
     */
    where: LegalOrganizationWhereUniqueInput
    /**
     * In case the LegalOrganization found by the `where` argument doesn't exist, create a new LegalOrganization with this data.
     */
    create: XOR<LegalOrganizationCreateInput, LegalOrganizationUncheckedCreateInput>
    /**
     * In case the LegalOrganization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegalOrganizationUpdateInput, LegalOrganizationUncheckedUpdateInput>
  }

  /**
   * LegalOrganization delete
   */
  export type LegalOrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
    /**
     * Filter which LegalOrganization to delete.
     */
    where: LegalOrganizationWhereUniqueInput
  }

  /**
   * LegalOrganization deleteMany
   */
  export type LegalOrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalOrganizations to delete
     */
    where?: LegalOrganizationWhereInput
    /**
     * Limit how many LegalOrganizations to delete.
     */
    limit?: number
  }

  /**
   * LegalOrganization.clientes
   */
  export type LegalOrganization$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * LegalOrganization without action
   */
  export type LegalOrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalOrganization
     */
    select?: LegalOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalOrganization
     */
    omit?: LegalOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalOrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Tribute
   */

  export type AggregateTribute = {
    _count: TributeCountAggregateOutputType | null
    _avg: TributeAvgAggregateOutputType | null
    _sum: TributeSumAggregateOutputType | null
    _min: TributeMinAggregateOutputType | null
    _max: TributeMaxAggregateOutputType | null
  }

  export type TributeAvgAggregateOutputType = {
    id: number | null
  }

  export type TributeSumAggregateOutputType = {
    id: number | null
  }

  export type TributeMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type TributeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type TributeCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type TributeAvgAggregateInputType = {
    id?: true
  }

  export type TributeSumAggregateInputType = {
    id?: true
  }

  export type TributeMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type TributeMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type TributeCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type TributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tribute to aggregate.
     */
    where?: TributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tributes to fetch.
     */
    orderBy?: TributeOrderByWithRelationInput | TributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tributes
    **/
    _count?: true | TributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TributeMaxAggregateInputType
  }

  export type GetTributeAggregateType<T extends TributeAggregateArgs> = {
        [P in keyof T & keyof AggregateTribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTribute[P]>
      : GetScalarType<T[P], AggregateTribute[P]>
  }




  export type TributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TributeWhereInput
    orderBy?: TributeOrderByWithAggregationInput | TributeOrderByWithAggregationInput[]
    by: TributeScalarFieldEnum[] | TributeScalarFieldEnum
    having?: TributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TributeCountAggregateInputType | true
    _avg?: TributeAvgAggregateInputType
    _sum?: TributeSumAggregateInputType
    _min?: TributeMinAggregateInputType
    _max?: TributeMaxAggregateInputType
  }

  export type TributeGroupByOutputType = {
    id: number
    code: string
    name: string
    _count: TributeCountAggregateOutputType | null
    _avg: TributeAvgAggregateOutputType | null
    _sum: TributeSumAggregateOutputType | null
    _min: TributeMinAggregateOutputType | null
    _max: TributeMaxAggregateOutputType | null
  }

  type GetTributeGroupByPayload<T extends TributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TributeGroupByOutputType[P]>
            : GetScalarType<T[P], TributeGroupByOutputType[P]>
        }
      >
    >


  export type TributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    clientes?: boolean | Tribute$clientesArgs<ExtArgs>
    _count?: boolean | TributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tribute"]>

  export type TributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["tribute"]>

  export type TributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["tribute"]>

  export type TributeSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type TributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["tribute"]>
  export type TributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | Tribute$clientesArgs<ExtArgs>
    _count?: boolean | TributeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tribute"
    objects: {
      clientes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
    }, ExtArgs["result"]["tribute"]>
    composites: {}
  }

  type TributeGetPayload<S extends boolean | null | undefined | TributeDefaultArgs> = $Result.GetResult<Prisma.$TributePayload, S>

  type TributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TributeCountAggregateInputType | true
    }

  export interface TributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tribute'], meta: { name: 'Tribute' } }
    /**
     * Find zero or one Tribute that matches the filter.
     * @param {TributeFindUniqueArgs} args - Arguments to find a Tribute
     * @example
     * // Get one Tribute
     * const tribute = await prisma.tribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TributeFindUniqueArgs>(args: SelectSubset<T, TributeFindUniqueArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TributeFindUniqueOrThrowArgs} args - Arguments to find a Tribute
     * @example
     * // Get one Tribute
     * const tribute = await prisma.tribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TributeFindUniqueOrThrowArgs>(args: SelectSubset<T, TributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TributeFindFirstArgs} args - Arguments to find a Tribute
     * @example
     * // Get one Tribute
     * const tribute = await prisma.tribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TributeFindFirstArgs>(args?: SelectSubset<T, TributeFindFirstArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TributeFindFirstOrThrowArgs} args - Arguments to find a Tribute
     * @example
     * // Get one Tribute
     * const tribute = await prisma.tribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TributeFindFirstOrThrowArgs>(args?: SelectSubset<T, TributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tributes
     * const tributes = await prisma.tribute.findMany()
     * 
     * // Get first 10 Tributes
     * const tributes = await prisma.tribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tributeWithIdOnly = await prisma.tribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TributeFindManyArgs>(args?: SelectSubset<T, TributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tribute.
     * @param {TributeCreateArgs} args - Arguments to create a Tribute.
     * @example
     * // Create one Tribute
     * const Tribute = await prisma.tribute.create({
     *   data: {
     *     // ... data to create a Tribute
     *   }
     * })
     * 
     */
    create<T extends TributeCreateArgs>(args: SelectSubset<T, TributeCreateArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tributes.
     * @param {TributeCreateManyArgs} args - Arguments to create many Tributes.
     * @example
     * // Create many Tributes
     * const tribute = await prisma.tribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TributeCreateManyArgs>(args?: SelectSubset<T, TributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tributes and returns the data saved in the database.
     * @param {TributeCreateManyAndReturnArgs} args - Arguments to create many Tributes.
     * @example
     * // Create many Tributes
     * const tribute = await prisma.tribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tributes and only return the `id`
     * const tributeWithIdOnly = await prisma.tribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TributeCreateManyAndReturnArgs>(args?: SelectSubset<T, TributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tribute.
     * @param {TributeDeleteArgs} args - Arguments to delete one Tribute.
     * @example
     * // Delete one Tribute
     * const Tribute = await prisma.tribute.delete({
     *   where: {
     *     // ... filter to delete one Tribute
     *   }
     * })
     * 
     */
    delete<T extends TributeDeleteArgs>(args: SelectSubset<T, TributeDeleteArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tribute.
     * @param {TributeUpdateArgs} args - Arguments to update one Tribute.
     * @example
     * // Update one Tribute
     * const tribute = await prisma.tribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TributeUpdateArgs>(args: SelectSubset<T, TributeUpdateArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tributes.
     * @param {TributeDeleteManyArgs} args - Arguments to filter Tributes to delete.
     * @example
     * // Delete a few Tributes
     * const { count } = await prisma.tribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TributeDeleteManyArgs>(args?: SelectSubset<T, TributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tributes
     * const tribute = await prisma.tribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TributeUpdateManyArgs>(args: SelectSubset<T, TributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tributes and returns the data updated in the database.
     * @param {TributeUpdateManyAndReturnArgs} args - Arguments to update many Tributes.
     * @example
     * // Update many Tributes
     * const tribute = await prisma.tribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tributes and only return the `id`
     * const tributeWithIdOnly = await prisma.tribute.updateManyAndReturn({
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
    updateManyAndReturn<T extends TributeUpdateManyAndReturnArgs>(args: SelectSubset<T, TributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tribute.
     * @param {TributeUpsertArgs} args - Arguments to update or create a Tribute.
     * @example
     * // Update or create a Tribute
     * const tribute = await prisma.tribute.upsert({
     *   create: {
     *     // ... data to create a Tribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tribute we want to update
     *   }
     * })
     */
    upsert<T extends TributeUpsertArgs>(args: SelectSubset<T, TributeUpsertArgs<ExtArgs>>): Prisma__TributeClient<$Result.GetResult<Prisma.$TributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TributeCountArgs} args - Arguments to filter Tributes to count.
     * @example
     * // Count the number of Tributes
     * const count = await prisma.tribute.count({
     *   where: {
     *     // ... the filter for the Tributes we want to count
     *   }
     * })
    **/
    count<T extends TributeCountArgs>(
      args?: Subset<T, TributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TributeAggregateArgs>(args: Subset<T, TributeAggregateArgs>): Prisma.PrismaPromise<GetTributeAggregateType<T>>

    /**
     * Group by Tribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TributeGroupByArgs} args - Group by arguments.
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
      T extends TributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TributeGroupByArgs['orderBy'] }
        : { orderBy?: TributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tribute model
   */
  readonly fields: TributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends Tribute$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Tribute$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tribute model
   */
  interface TributeFieldRefs {
    readonly id: FieldRef<"Tribute", 'Int'>
    readonly code: FieldRef<"Tribute", 'String'>
    readonly name: FieldRef<"Tribute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tribute findUnique
   */
  export type TributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * Filter, which Tribute to fetch.
     */
    where: TributeWhereUniqueInput
  }

  /**
   * Tribute findUniqueOrThrow
   */
  export type TributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * Filter, which Tribute to fetch.
     */
    where: TributeWhereUniqueInput
  }

  /**
   * Tribute findFirst
   */
  export type TributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * Filter, which Tribute to fetch.
     */
    where?: TributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tributes to fetch.
     */
    orderBy?: TributeOrderByWithRelationInput | TributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tributes.
     */
    cursor?: TributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tributes.
     */
    distinct?: TributeScalarFieldEnum | TributeScalarFieldEnum[]
  }

  /**
   * Tribute findFirstOrThrow
   */
  export type TributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * Filter, which Tribute to fetch.
     */
    where?: TributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tributes to fetch.
     */
    orderBy?: TributeOrderByWithRelationInput | TributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tributes.
     */
    cursor?: TributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tributes.
     */
    distinct?: TributeScalarFieldEnum | TributeScalarFieldEnum[]
  }

  /**
   * Tribute findMany
   */
  export type TributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * Filter, which Tributes to fetch.
     */
    where?: TributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tributes to fetch.
     */
    orderBy?: TributeOrderByWithRelationInput | TributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tributes.
     */
    cursor?: TributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tributes.
     */
    skip?: number
    distinct?: TributeScalarFieldEnum | TributeScalarFieldEnum[]
  }

  /**
   * Tribute create
   */
  export type TributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Tribute.
     */
    data: XOR<TributeCreateInput, TributeUncheckedCreateInput>
  }

  /**
   * Tribute createMany
   */
  export type TributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tributes.
     */
    data: TributeCreateManyInput | TributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tribute createManyAndReturn
   */
  export type TributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * The data used to create many Tributes.
     */
    data: TributeCreateManyInput | TributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tribute update
   */
  export type TributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Tribute.
     */
    data: XOR<TributeUpdateInput, TributeUncheckedUpdateInput>
    /**
     * Choose, which Tribute to update.
     */
    where: TributeWhereUniqueInput
  }

  /**
   * Tribute updateMany
   */
  export type TributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tributes.
     */
    data: XOR<TributeUpdateManyMutationInput, TributeUncheckedUpdateManyInput>
    /**
     * Filter which Tributes to update
     */
    where?: TributeWhereInput
    /**
     * Limit how many Tributes to update.
     */
    limit?: number
  }

  /**
   * Tribute updateManyAndReturn
   */
  export type TributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * The data used to update Tributes.
     */
    data: XOR<TributeUpdateManyMutationInput, TributeUncheckedUpdateManyInput>
    /**
     * Filter which Tributes to update
     */
    where?: TributeWhereInput
    /**
     * Limit how many Tributes to update.
     */
    limit?: number
  }

  /**
   * Tribute upsert
   */
  export type TributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Tribute to update in case it exists.
     */
    where: TributeWhereUniqueInput
    /**
     * In case the Tribute found by the `where` argument doesn't exist, create a new Tribute with this data.
     */
    create: XOR<TributeCreateInput, TributeUncheckedCreateInput>
    /**
     * In case the Tribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TributeUpdateInput, TributeUncheckedUpdateInput>
  }

  /**
   * Tribute delete
   */
  export type TributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
    /**
     * Filter which Tribute to delete.
     */
    where: TributeWhereUniqueInput
  }

  /**
   * Tribute deleteMany
   */
  export type TributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tributes to delete
     */
    where?: TributeWhereInput
    /**
     * Limit how many Tributes to delete.
     */
    limit?: number
  }

  /**
   * Tribute.clientes
   */
  export type Tribute$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Tribute without action
   */
  export type TributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tribute
     */
    select?: TributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tribute
     */
    omit?: TributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TributeInclude<ExtArgs> | null
  }


  /**
   * Model Municipality
   */

  export type AggregateMunicipality = {
    _count: MunicipalityCountAggregateOutputType | null
    _avg: MunicipalityAvgAggregateOutputType | null
    _sum: MunicipalitySumAggregateOutputType | null
    _min: MunicipalityMinAggregateOutputType | null
    _max: MunicipalityMaxAggregateOutputType | null
  }

  export type MunicipalityAvgAggregateOutputType = {
    id: number | null
  }

  export type MunicipalitySumAggregateOutputType = {
    id: number | null
  }

  export type MunicipalityMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type MunicipalityMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type MunicipalityCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type MunicipalityAvgAggregateInputType = {
    id?: true
  }

  export type MunicipalitySumAggregateInputType = {
    id?: true
  }

  export type MunicipalityMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type MunicipalityMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type MunicipalityCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type MunicipalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipality to aggregate.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Municipalities
    **/
    _count?: true | MunicipalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MunicipalityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MunicipalitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipalityMaxAggregateInputType
  }

  export type GetMunicipalityAggregateType<T extends MunicipalityAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipality[P]>
      : GetScalarType<T[P], AggregateMunicipality[P]>
  }




  export type MunicipalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipalityWhereInput
    orderBy?: MunicipalityOrderByWithAggregationInput | MunicipalityOrderByWithAggregationInput[]
    by: MunicipalityScalarFieldEnum[] | MunicipalityScalarFieldEnum
    having?: MunicipalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipalityCountAggregateInputType | true
    _avg?: MunicipalityAvgAggregateInputType
    _sum?: MunicipalitySumAggregateInputType
    _min?: MunicipalityMinAggregateInputType
    _max?: MunicipalityMaxAggregateInputType
  }

  export type MunicipalityGroupByOutputType = {
    id: number
    code: string
    name: string
    _count: MunicipalityCountAggregateOutputType | null
    _avg: MunicipalityAvgAggregateOutputType | null
    _sum: MunicipalitySumAggregateOutputType | null
    _min: MunicipalityMinAggregateOutputType | null
    _max: MunicipalityMaxAggregateOutputType | null
  }

  type GetMunicipalityGroupByPayload<T extends MunicipalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipalityGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipalityGroupByOutputType[P]>
        }
      >
    >


  export type MunicipalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    clientes?: boolean | Municipality$clientesArgs<ExtArgs>
    _count?: boolean | MunicipalityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type MunicipalityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["municipality"]>
  export type MunicipalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | Municipality$clientesArgs<ExtArgs>
    _count?: boolean | MunicipalityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MunicipalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MunicipalityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MunicipalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Municipality"
    objects: {
      clientes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
    }, ExtArgs["result"]["municipality"]>
    composites: {}
  }

  type MunicipalityGetPayload<S extends boolean | null | undefined | MunicipalityDefaultArgs> = $Result.GetResult<Prisma.$MunicipalityPayload, S>

  type MunicipalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipalityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipalityCountAggregateInputType | true
    }

  export interface MunicipalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Municipality'], meta: { name: 'Municipality' } }
    /**
     * Find zero or one Municipality that matches the filter.
     * @param {MunicipalityFindUniqueArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipalityFindUniqueArgs>(args: SelectSubset<T, MunicipalityFindUniqueArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Municipality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipalityFindUniqueOrThrowArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipalityFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindFirstArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipalityFindFirstArgs>(args?: SelectSubset<T, MunicipalityFindFirstArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindFirstOrThrowArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipalityFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Municipalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Municipalities
     * const municipalities = await prisma.municipality.findMany()
     * 
     * // Get first 10 Municipalities
     * const municipalities = await prisma.municipality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipalityWithIdOnly = await prisma.municipality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipalityFindManyArgs>(args?: SelectSubset<T, MunicipalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Municipality.
     * @param {MunicipalityCreateArgs} args - Arguments to create a Municipality.
     * @example
     * // Create one Municipality
     * const Municipality = await prisma.municipality.create({
     *   data: {
     *     // ... data to create a Municipality
     *   }
     * })
     * 
     */
    create<T extends MunicipalityCreateArgs>(args: SelectSubset<T, MunicipalityCreateArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Municipalities.
     * @param {MunicipalityCreateManyArgs} args - Arguments to create many Municipalities.
     * @example
     * // Create many Municipalities
     * const municipality = await prisma.municipality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipalityCreateManyArgs>(args?: SelectSubset<T, MunicipalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Municipalities and returns the data saved in the database.
     * @param {MunicipalityCreateManyAndReturnArgs} args - Arguments to create many Municipalities.
     * @example
     * // Create many Municipalities
     * const municipality = await prisma.municipality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Municipalities and only return the `id`
     * const municipalityWithIdOnly = await prisma.municipality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipalityCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Municipality.
     * @param {MunicipalityDeleteArgs} args - Arguments to delete one Municipality.
     * @example
     * // Delete one Municipality
     * const Municipality = await prisma.municipality.delete({
     *   where: {
     *     // ... filter to delete one Municipality
     *   }
     * })
     * 
     */
    delete<T extends MunicipalityDeleteArgs>(args: SelectSubset<T, MunicipalityDeleteArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Municipality.
     * @param {MunicipalityUpdateArgs} args - Arguments to update one Municipality.
     * @example
     * // Update one Municipality
     * const municipality = await prisma.municipality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipalityUpdateArgs>(args: SelectSubset<T, MunicipalityUpdateArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Municipalities.
     * @param {MunicipalityDeleteManyArgs} args - Arguments to filter Municipalities to delete.
     * @example
     * // Delete a few Municipalities
     * const { count } = await prisma.municipality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipalityDeleteManyArgs>(args?: SelectSubset<T, MunicipalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Municipalities
     * const municipality = await prisma.municipality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipalityUpdateManyArgs>(args: SelectSubset<T, MunicipalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipalities and returns the data updated in the database.
     * @param {MunicipalityUpdateManyAndReturnArgs} args - Arguments to update many Municipalities.
     * @example
     * // Update many Municipalities
     * const municipality = await prisma.municipality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Municipalities and only return the `id`
     * const municipalityWithIdOnly = await prisma.municipality.updateManyAndReturn({
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
    updateManyAndReturn<T extends MunicipalityUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipalityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Municipality.
     * @param {MunicipalityUpsertArgs} args - Arguments to update or create a Municipality.
     * @example
     * // Update or create a Municipality
     * const municipality = await prisma.municipality.upsert({
     *   create: {
     *     // ... data to create a Municipality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Municipality we want to update
     *   }
     * })
     */
    upsert<T extends MunicipalityUpsertArgs>(args: SelectSubset<T, MunicipalityUpsertArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Municipalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityCountArgs} args - Arguments to filter Municipalities to count.
     * @example
     * // Count the number of Municipalities
     * const count = await prisma.municipality.count({
     *   where: {
     *     // ... the filter for the Municipalities we want to count
     *   }
     * })
    **/
    count<T extends MunicipalityCountArgs>(
      args?: Subset<T, MunicipalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Municipality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MunicipalityAggregateArgs>(args: Subset<T, MunicipalityAggregateArgs>): Prisma.PrismaPromise<GetMunicipalityAggregateType<T>>

    /**
     * Group by Municipality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityGroupByArgs} args - Group by arguments.
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
      T extends MunicipalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipalityGroupByArgs['orderBy'] }
        : { orderBy?: MunicipalityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MunicipalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Municipality model
   */
  readonly fields: MunicipalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Municipality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends Municipality$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Municipality model
   */
  interface MunicipalityFieldRefs {
    readonly id: FieldRef<"Municipality", 'Int'>
    readonly code: FieldRef<"Municipality", 'String'>
    readonly name: FieldRef<"Municipality", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Municipality findUnique
   */
  export type MunicipalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality findUniqueOrThrow
   */
  export type MunicipalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality findFirst
   */
  export type MunicipalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipalities.
     */
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality findFirstOrThrow
   */
  export type MunicipalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipalities.
     */
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality findMany
   */
  export type MunicipalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipalities to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality create
   */
  export type MunicipalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The data needed to create a Municipality.
     */
    data: XOR<MunicipalityCreateInput, MunicipalityUncheckedCreateInput>
  }

  /**
   * Municipality createMany
   */
  export type MunicipalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Municipalities.
     */
    data: MunicipalityCreateManyInput | MunicipalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipality createManyAndReturn
   */
  export type MunicipalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * The data used to create many Municipalities.
     */
    data: MunicipalityCreateManyInput | MunicipalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipality update
   */
  export type MunicipalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The data needed to update a Municipality.
     */
    data: XOR<MunicipalityUpdateInput, MunicipalityUncheckedUpdateInput>
    /**
     * Choose, which Municipality to update.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality updateMany
   */
  export type MunicipalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Municipalities.
     */
    data: XOR<MunicipalityUpdateManyMutationInput, MunicipalityUncheckedUpdateManyInput>
    /**
     * Filter which Municipalities to update
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to update.
     */
    limit?: number
  }

  /**
   * Municipality updateManyAndReturn
   */
  export type MunicipalityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * The data used to update Municipalities.
     */
    data: XOR<MunicipalityUpdateManyMutationInput, MunicipalityUncheckedUpdateManyInput>
    /**
     * Filter which Municipalities to update
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to update.
     */
    limit?: number
  }

  /**
   * Municipality upsert
   */
  export type MunicipalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The filter to search for the Municipality to update in case it exists.
     */
    where: MunicipalityWhereUniqueInput
    /**
     * In case the Municipality found by the `where` argument doesn't exist, create a new Municipality with this data.
     */
    create: XOR<MunicipalityCreateInput, MunicipalityUncheckedCreateInput>
    /**
     * In case the Municipality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipalityUpdateInput, MunicipalityUncheckedUpdateInput>
  }

  /**
   * Municipality delete
   */
  export type MunicipalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter which Municipality to delete.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality deleteMany
   */
  export type MunicipalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipalities to delete
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to delete.
     */
    limit?: number
  }

  /**
   * Municipality.clientes
   */
  export type Municipality$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Municipality without action
   */
  export type MunicipalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
  }


  /**
   * Model Producto
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
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
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




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
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

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
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


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
    detallesFactura?: boolean | Producto$detallesFacturaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio" | "stock", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detallesFactura?: boolean | Producto$detallesFacturaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      detallesFactura: Prisma.$DetalleFacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      stock: number
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
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
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
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
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
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
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
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
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
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
     * @param {ProductoGroupByArgs} args - Group by arguments.
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
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detallesFactura<T extends Producto$detallesFacturaArgs<ExtArgs> = {}>(args?: Subset<T, Producto$detallesFacturaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Float'>
    readonly stock: FieldRef<"Producto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.detallesFactura
   */
  export type Producto$detallesFacturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    where?: DetalleFacturaWhereInput
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    cursor?: DetalleFacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model NumberingRange
   */

  export type AggregateNumberingRange = {
    _count: NumberingRangeCountAggregateOutputType | null
    _avg: NumberingRangeAvgAggregateOutputType | null
    _sum: NumberingRangeSumAggregateOutputType | null
    _min: NumberingRangeMinAggregateOutputType | null
    _max: NumberingRangeMaxAggregateOutputType | null
  }

  export type NumberingRangeAvgAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    months: number | null
  }

  export type NumberingRangeSumAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    months: number | null
  }

  export type NumberingRangeMinAggregateOutputType = {
    id: number | null
    prefix: string | null
    from: number | null
    to: number | null
    resolutionNumber: string | null
    startDate: Date | null
    endDate: Date | null
    months: number | null
  }

  export type NumberingRangeMaxAggregateOutputType = {
    id: number | null
    prefix: string | null
    from: number | null
    to: number | null
    resolutionNumber: string | null
    startDate: Date | null
    endDate: Date | null
    months: number | null
  }

  export type NumberingRangeCountAggregateOutputType = {
    id: number
    prefix: number
    from: number
    to: number
    resolutionNumber: number
    startDate: number
    endDate: number
    months: number
    _all: number
  }


  export type NumberingRangeAvgAggregateInputType = {
    id?: true
    from?: true
    to?: true
    months?: true
  }

  export type NumberingRangeSumAggregateInputType = {
    id?: true
    from?: true
    to?: true
    months?: true
  }

  export type NumberingRangeMinAggregateInputType = {
    id?: true
    prefix?: true
    from?: true
    to?: true
    resolutionNumber?: true
    startDate?: true
    endDate?: true
    months?: true
  }

  export type NumberingRangeMaxAggregateInputType = {
    id?: true
    prefix?: true
    from?: true
    to?: true
    resolutionNumber?: true
    startDate?: true
    endDate?: true
    months?: true
  }

  export type NumberingRangeCountAggregateInputType = {
    id?: true
    prefix?: true
    from?: true
    to?: true
    resolutionNumber?: true
    startDate?: true
    endDate?: true
    months?: true
    _all?: true
  }

  export type NumberingRangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberingRange to aggregate.
     */
    where?: NumberingRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberingRanges to fetch.
     */
    orderBy?: NumberingRangeOrderByWithRelationInput | NumberingRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NumberingRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberingRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberingRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NumberingRanges
    **/
    _count?: true | NumberingRangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NumberingRangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NumberingRangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NumberingRangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NumberingRangeMaxAggregateInputType
  }

  export type GetNumberingRangeAggregateType<T extends NumberingRangeAggregateArgs> = {
        [P in keyof T & keyof AggregateNumberingRange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumberingRange[P]>
      : GetScalarType<T[P], AggregateNumberingRange[P]>
  }




  export type NumberingRangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumberingRangeWhereInput
    orderBy?: NumberingRangeOrderByWithAggregationInput | NumberingRangeOrderByWithAggregationInput[]
    by: NumberingRangeScalarFieldEnum[] | NumberingRangeScalarFieldEnum
    having?: NumberingRangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NumberingRangeCountAggregateInputType | true
    _avg?: NumberingRangeAvgAggregateInputType
    _sum?: NumberingRangeSumAggregateInputType
    _min?: NumberingRangeMinAggregateInputType
    _max?: NumberingRangeMaxAggregateInputType
  }

  export type NumberingRangeGroupByOutputType = {
    id: number
    prefix: string
    from: number
    to: number
    resolutionNumber: string
    startDate: Date
    endDate: Date
    months: number
    _count: NumberingRangeCountAggregateOutputType | null
    _avg: NumberingRangeAvgAggregateOutputType | null
    _sum: NumberingRangeSumAggregateOutputType | null
    _min: NumberingRangeMinAggregateOutputType | null
    _max: NumberingRangeMaxAggregateOutputType | null
  }

  type GetNumberingRangeGroupByPayload<T extends NumberingRangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NumberingRangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NumberingRangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NumberingRangeGroupByOutputType[P]>
            : GetScalarType<T[P], NumberingRangeGroupByOutputType[P]>
        }
      >
    >


  export type NumberingRangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    from?: boolean
    to?: boolean
    resolutionNumber?: boolean
    startDate?: boolean
    endDate?: boolean
    months?: boolean
    facturas?: boolean | NumberingRange$facturasArgs<ExtArgs>
    _count?: boolean | NumberingRangeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numberingRange"]>

  export type NumberingRangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    from?: boolean
    to?: boolean
    resolutionNumber?: boolean
    startDate?: boolean
    endDate?: boolean
    months?: boolean
  }, ExtArgs["result"]["numberingRange"]>

  export type NumberingRangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    from?: boolean
    to?: boolean
    resolutionNumber?: boolean
    startDate?: boolean
    endDate?: boolean
    months?: boolean
  }, ExtArgs["result"]["numberingRange"]>

  export type NumberingRangeSelectScalar = {
    id?: boolean
    prefix?: boolean
    from?: boolean
    to?: boolean
    resolutionNumber?: boolean
    startDate?: boolean
    endDate?: boolean
    months?: boolean
  }

  export type NumberingRangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prefix" | "from" | "to" | "resolutionNumber" | "startDate" | "endDate" | "months", ExtArgs["result"]["numberingRange"]>
  export type NumberingRangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | NumberingRange$facturasArgs<ExtArgs>
    _count?: boolean | NumberingRangeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NumberingRangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NumberingRangeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NumberingRangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NumberingRange"
    objects: {
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prefix: string
      from: number
      to: number
      resolutionNumber: string
      startDate: Date
      endDate: Date
      months: number
    }, ExtArgs["result"]["numberingRange"]>
    composites: {}
  }

  type NumberingRangeGetPayload<S extends boolean | null | undefined | NumberingRangeDefaultArgs> = $Result.GetResult<Prisma.$NumberingRangePayload, S>

  type NumberingRangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NumberingRangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NumberingRangeCountAggregateInputType | true
    }

  export interface NumberingRangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NumberingRange'], meta: { name: 'NumberingRange' } }
    /**
     * Find zero or one NumberingRange that matches the filter.
     * @param {NumberingRangeFindUniqueArgs} args - Arguments to find a NumberingRange
     * @example
     * // Get one NumberingRange
     * const numberingRange = await prisma.numberingRange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NumberingRangeFindUniqueArgs>(args: SelectSubset<T, NumberingRangeFindUniqueArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NumberingRange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NumberingRangeFindUniqueOrThrowArgs} args - Arguments to find a NumberingRange
     * @example
     * // Get one NumberingRange
     * const numberingRange = await prisma.numberingRange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NumberingRangeFindUniqueOrThrowArgs>(args: SelectSubset<T, NumberingRangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NumberingRange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberingRangeFindFirstArgs} args - Arguments to find a NumberingRange
     * @example
     * // Get one NumberingRange
     * const numberingRange = await prisma.numberingRange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NumberingRangeFindFirstArgs>(args?: SelectSubset<T, NumberingRangeFindFirstArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NumberingRange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberingRangeFindFirstOrThrowArgs} args - Arguments to find a NumberingRange
     * @example
     * // Get one NumberingRange
     * const numberingRange = await prisma.numberingRange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NumberingRangeFindFirstOrThrowArgs>(args?: SelectSubset<T, NumberingRangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NumberingRanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberingRangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NumberingRanges
     * const numberingRanges = await prisma.numberingRange.findMany()
     * 
     * // Get first 10 NumberingRanges
     * const numberingRanges = await prisma.numberingRange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const numberingRangeWithIdOnly = await prisma.numberingRange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NumberingRangeFindManyArgs>(args?: SelectSubset<T, NumberingRangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NumberingRange.
     * @param {NumberingRangeCreateArgs} args - Arguments to create a NumberingRange.
     * @example
     * // Create one NumberingRange
     * const NumberingRange = await prisma.numberingRange.create({
     *   data: {
     *     // ... data to create a NumberingRange
     *   }
     * })
     * 
     */
    create<T extends NumberingRangeCreateArgs>(args: SelectSubset<T, NumberingRangeCreateArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NumberingRanges.
     * @param {NumberingRangeCreateManyArgs} args - Arguments to create many NumberingRanges.
     * @example
     * // Create many NumberingRanges
     * const numberingRange = await prisma.numberingRange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NumberingRangeCreateManyArgs>(args?: SelectSubset<T, NumberingRangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NumberingRanges and returns the data saved in the database.
     * @param {NumberingRangeCreateManyAndReturnArgs} args - Arguments to create many NumberingRanges.
     * @example
     * // Create many NumberingRanges
     * const numberingRange = await prisma.numberingRange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NumberingRanges and only return the `id`
     * const numberingRangeWithIdOnly = await prisma.numberingRange.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NumberingRangeCreateManyAndReturnArgs>(args?: SelectSubset<T, NumberingRangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NumberingRange.
     * @param {NumberingRangeDeleteArgs} args - Arguments to delete one NumberingRange.
     * @example
     * // Delete one NumberingRange
     * const NumberingRange = await prisma.numberingRange.delete({
     *   where: {
     *     // ... filter to delete one NumberingRange
     *   }
     * })
     * 
     */
    delete<T extends NumberingRangeDeleteArgs>(args: SelectSubset<T, NumberingRangeDeleteArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NumberingRange.
     * @param {NumberingRangeUpdateArgs} args - Arguments to update one NumberingRange.
     * @example
     * // Update one NumberingRange
     * const numberingRange = await prisma.numberingRange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NumberingRangeUpdateArgs>(args: SelectSubset<T, NumberingRangeUpdateArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NumberingRanges.
     * @param {NumberingRangeDeleteManyArgs} args - Arguments to filter NumberingRanges to delete.
     * @example
     * // Delete a few NumberingRanges
     * const { count } = await prisma.numberingRange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NumberingRangeDeleteManyArgs>(args?: SelectSubset<T, NumberingRangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberingRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberingRangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NumberingRanges
     * const numberingRange = await prisma.numberingRange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NumberingRangeUpdateManyArgs>(args: SelectSubset<T, NumberingRangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberingRanges and returns the data updated in the database.
     * @param {NumberingRangeUpdateManyAndReturnArgs} args - Arguments to update many NumberingRanges.
     * @example
     * // Update many NumberingRanges
     * const numberingRange = await prisma.numberingRange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NumberingRanges and only return the `id`
     * const numberingRangeWithIdOnly = await prisma.numberingRange.updateManyAndReturn({
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
    updateManyAndReturn<T extends NumberingRangeUpdateManyAndReturnArgs>(args: SelectSubset<T, NumberingRangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NumberingRange.
     * @param {NumberingRangeUpsertArgs} args - Arguments to update or create a NumberingRange.
     * @example
     * // Update or create a NumberingRange
     * const numberingRange = await prisma.numberingRange.upsert({
     *   create: {
     *     // ... data to create a NumberingRange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NumberingRange we want to update
     *   }
     * })
     */
    upsert<T extends NumberingRangeUpsertArgs>(args: SelectSubset<T, NumberingRangeUpsertArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NumberingRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberingRangeCountArgs} args - Arguments to filter NumberingRanges to count.
     * @example
     * // Count the number of NumberingRanges
     * const count = await prisma.numberingRange.count({
     *   where: {
     *     // ... the filter for the NumberingRanges we want to count
     *   }
     * })
    **/
    count<T extends NumberingRangeCountArgs>(
      args?: Subset<T, NumberingRangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NumberingRangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NumberingRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberingRangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NumberingRangeAggregateArgs>(args: Subset<T, NumberingRangeAggregateArgs>): Prisma.PrismaPromise<GetNumberingRangeAggregateType<T>>

    /**
     * Group by NumberingRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberingRangeGroupByArgs} args - Group by arguments.
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
      T extends NumberingRangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NumberingRangeGroupByArgs['orderBy'] }
        : { orderBy?: NumberingRangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NumberingRangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumberingRangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NumberingRange model
   */
  readonly fields: NumberingRangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NumberingRange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NumberingRangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facturas<T extends NumberingRange$facturasArgs<ExtArgs> = {}>(args?: Subset<T, NumberingRange$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NumberingRange model
   */
  interface NumberingRangeFieldRefs {
    readonly id: FieldRef<"NumberingRange", 'Int'>
    readonly prefix: FieldRef<"NumberingRange", 'String'>
    readonly from: FieldRef<"NumberingRange", 'Int'>
    readonly to: FieldRef<"NumberingRange", 'Int'>
    readonly resolutionNumber: FieldRef<"NumberingRange", 'String'>
    readonly startDate: FieldRef<"NumberingRange", 'DateTime'>
    readonly endDate: FieldRef<"NumberingRange", 'DateTime'>
    readonly months: FieldRef<"NumberingRange", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NumberingRange findUnique
   */
  export type NumberingRangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * Filter, which NumberingRange to fetch.
     */
    where: NumberingRangeWhereUniqueInput
  }

  /**
   * NumberingRange findUniqueOrThrow
   */
  export type NumberingRangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * Filter, which NumberingRange to fetch.
     */
    where: NumberingRangeWhereUniqueInput
  }

  /**
   * NumberingRange findFirst
   */
  export type NumberingRangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * Filter, which NumberingRange to fetch.
     */
    where?: NumberingRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberingRanges to fetch.
     */
    orderBy?: NumberingRangeOrderByWithRelationInput | NumberingRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberingRanges.
     */
    cursor?: NumberingRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberingRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberingRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberingRanges.
     */
    distinct?: NumberingRangeScalarFieldEnum | NumberingRangeScalarFieldEnum[]
  }

  /**
   * NumberingRange findFirstOrThrow
   */
  export type NumberingRangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * Filter, which NumberingRange to fetch.
     */
    where?: NumberingRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberingRanges to fetch.
     */
    orderBy?: NumberingRangeOrderByWithRelationInput | NumberingRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberingRanges.
     */
    cursor?: NumberingRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberingRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberingRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberingRanges.
     */
    distinct?: NumberingRangeScalarFieldEnum | NumberingRangeScalarFieldEnum[]
  }

  /**
   * NumberingRange findMany
   */
  export type NumberingRangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * Filter, which NumberingRanges to fetch.
     */
    where?: NumberingRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberingRanges to fetch.
     */
    orderBy?: NumberingRangeOrderByWithRelationInput | NumberingRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NumberingRanges.
     */
    cursor?: NumberingRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberingRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberingRanges.
     */
    skip?: number
    distinct?: NumberingRangeScalarFieldEnum | NumberingRangeScalarFieldEnum[]
  }

  /**
   * NumberingRange create
   */
  export type NumberingRangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * The data needed to create a NumberingRange.
     */
    data: XOR<NumberingRangeCreateInput, NumberingRangeUncheckedCreateInput>
  }

  /**
   * NumberingRange createMany
   */
  export type NumberingRangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NumberingRanges.
     */
    data: NumberingRangeCreateManyInput | NumberingRangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NumberingRange createManyAndReturn
   */
  export type NumberingRangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * The data used to create many NumberingRanges.
     */
    data: NumberingRangeCreateManyInput | NumberingRangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NumberingRange update
   */
  export type NumberingRangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * The data needed to update a NumberingRange.
     */
    data: XOR<NumberingRangeUpdateInput, NumberingRangeUncheckedUpdateInput>
    /**
     * Choose, which NumberingRange to update.
     */
    where: NumberingRangeWhereUniqueInput
  }

  /**
   * NumberingRange updateMany
   */
  export type NumberingRangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NumberingRanges.
     */
    data: XOR<NumberingRangeUpdateManyMutationInput, NumberingRangeUncheckedUpdateManyInput>
    /**
     * Filter which NumberingRanges to update
     */
    where?: NumberingRangeWhereInput
    /**
     * Limit how many NumberingRanges to update.
     */
    limit?: number
  }

  /**
   * NumberingRange updateManyAndReturn
   */
  export type NumberingRangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * The data used to update NumberingRanges.
     */
    data: XOR<NumberingRangeUpdateManyMutationInput, NumberingRangeUncheckedUpdateManyInput>
    /**
     * Filter which NumberingRanges to update
     */
    where?: NumberingRangeWhereInput
    /**
     * Limit how many NumberingRanges to update.
     */
    limit?: number
  }

  /**
   * NumberingRange upsert
   */
  export type NumberingRangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * The filter to search for the NumberingRange to update in case it exists.
     */
    where: NumberingRangeWhereUniqueInput
    /**
     * In case the NumberingRange found by the `where` argument doesn't exist, create a new NumberingRange with this data.
     */
    create: XOR<NumberingRangeCreateInput, NumberingRangeUncheckedCreateInput>
    /**
     * In case the NumberingRange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NumberingRangeUpdateInput, NumberingRangeUncheckedUpdateInput>
  }

  /**
   * NumberingRange delete
   */
  export type NumberingRangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
    /**
     * Filter which NumberingRange to delete.
     */
    where: NumberingRangeWhereUniqueInput
  }

  /**
   * NumberingRange deleteMany
   */
  export type NumberingRangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberingRanges to delete
     */
    where?: NumberingRangeWhereInput
    /**
     * Limit how many NumberingRanges to delete.
     */
    limit?: number
  }

  /**
   * NumberingRange.facturas
   */
  export type NumberingRange$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * NumberingRange without action
   */
  export type NumberingRangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberingRange
     */
    select?: NumberingRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberingRange
     */
    omit?: NumberingRangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberingRangeInclude<ExtArgs> | null
  }


  /**
   * Model Factura
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
    status: number | null
    discountRate: number | null
    discount: number | null
    grossValue: number | null
    taxableAmount: number | null
    taxAmount: number | null
    total: number | null
    clienteId: number | null
    companyId: number | null
    numberingRangeId: number | null
  }

  export type FacturaSumAggregateOutputType = {
    id: number | null
    status: number | null
    discountRate: number | null
    discount: number | null
    grossValue: number | null
    taxableAmount: number | null
    taxAmount: number | null
    total: number | null
    clienteId: number | null
    companyId: number | null
    numberingRangeId: number | null
  }

  export type FacturaMinAggregateOutputType = {
    id: number | null
    documentCode: string | null
    documentName: string | null
    number: string | null
    referenceCode: string | null
    status: number | null
    sendEmail: boolean | null
    qr: string | null
    cufe: string | null
    validated: Date | null
    discountRate: number | null
    discount: number | null
    grossValue: number | null
    taxableAmount: number | null
    taxAmount: number | null
    total: number | null
    fecha: Date | null
    clienteId: number | null
    companyId: number | null
    numberingRangeId: number | null
  }

  export type FacturaMaxAggregateOutputType = {
    id: number | null
    documentCode: string | null
    documentName: string | null
    number: string | null
    referenceCode: string | null
    status: number | null
    sendEmail: boolean | null
    qr: string | null
    cufe: string | null
    validated: Date | null
    discountRate: number | null
    discount: number | null
    grossValue: number | null
    taxableAmount: number | null
    taxAmount: number | null
    total: number | null
    fecha: Date | null
    clienteId: number | null
    companyId: number | null
    numberingRangeId: number | null
  }

  export type FacturaCountAggregateOutputType = {
    id: number
    documentCode: number
    documentName: number
    number: number
    referenceCode: number
    status: number
    sendEmail: number
    qr: number
    cufe: number
    validated: number
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha: number
    clienteId: number
    companyId: number
    numberingRangeId: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    id?: true
    status?: true
    discountRate?: true
    discount?: true
    grossValue?: true
    taxableAmount?: true
    taxAmount?: true
    total?: true
    clienteId?: true
    companyId?: true
    numberingRangeId?: true
  }

  export type FacturaSumAggregateInputType = {
    id?: true
    status?: true
    discountRate?: true
    discount?: true
    grossValue?: true
    taxableAmount?: true
    taxAmount?: true
    total?: true
    clienteId?: true
    companyId?: true
    numberingRangeId?: true
  }

  export type FacturaMinAggregateInputType = {
    id?: true
    documentCode?: true
    documentName?: true
    number?: true
    referenceCode?: true
    status?: true
    sendEmail?: true
    qr?: true
    cufe?: true
    validated?: true
    discountRate?: true
    discount?: true
    grossValue?: true
    taxableAmount?: true
    taxAmount?: true
    total?: true
    fecha?: true
    clienteId?: true
    companyId?: true
    numberingRangeId?: true
  }

  export type FacturaMaxAggregateInputType = {
    id?: true
    documentCode?: true
    documentName?: true
    number?: true
    referenceCode?: true
    status?: true
    sendEmail?: true
    qr?: true
    cufe?: true
    validated?: true
    discountRate?: true
    discount?: true
    grossValue?: true
    taxableAmount?: true
    taxAmount?: true
    total?: true
    fecha?: true
    clienteId?: true
    companyId?: true
    numberingRangeId?: true
  }

  export type FacturaCountAggregateInputType = {
    id?: true
    documentCode?: true
    documentName?: true
    number?: true
    referenceCode?: true
    status?: true
    sendEmail?: true
    qr?: true
    cufe?: true
    validated?: true
    discountRate?: true
    discount?: true
    grossValue?: true
    taxableAmount?: true
    taxAmount?: true
    total?: true
    fecha?: true
    clienteId?: true
    companyId?: true
    numberingRangeId?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factura to aggregate.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facturas
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




  export type FacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithAggregationInput | FacturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: FacturaScalarWhereWithAggregatesInput
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
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha: Date
    clienteId: number
    companyId: number
    numberingRangeId: number
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<
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


  export type FacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentCode?: boolean
    documentName?: boolean
    number?: boolean
    referenceCode?: boolean
    status?: boolean
    sendEmail?: boolean
    qr?: boolean
    cufe?: boolean
    validated?: boolean
    discountRate?: boolean
    discount?: boolean
    grossValue?: boolean
    taxableAmount?: boolean
    taxAmount?: boolean
    total?: boolean
    fecha?: boolean
    clienteId?: boolean
    companyId?: boolean
    numberingRangeId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    numberingRange?: boolean | NumberingRangeDefaultArgs<ExtArgs>
    detalles?: boolean | Factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentCode?: boolean
    documentName?: boolean
    number?: boolean
    referenceCode?: boolean
    status?: boolean
    sendEmail?: boolean
    qr?: boolean
    cufe?: boolean
    validated?: boolean
    discountRate?: boolean
    discount?: boolean
    grossValue?: boolean
    taxableAmount?: boolean
    taxAmount?: boolean
    total?: boolean
    fecha?: boolean
    clienteId?: boolean
    companyId?: boolean
    numberingRangeId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    numberingRange?: boolean | NumberingRangeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentCode?: boolean
    documentName?: boolean
    number?: boolean
    referenceCode?: boolean
    status?: boolean
    sendEmail?: boolean
    qr?: boolean
    cufe?: boolean
    validated?: boolean
    discountRate?: boolean
    discount?: boolean
    grossValue?: boolean
    taxableAmount?: boolean
    taxAmount?: boolean
    total?: boolean
    fecha?: boolean
    clienteId?: boolean
    companyId?: boolean
    numberingRangeId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    numberingRange?: boolean | NumberingRangeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectScalar = {
    id?: boolean
    documentCode?: boolean
    documentName?: boolean
    number?: boolean
    referenceCode?: boolean
    status?: boolean
    sendEmail?: boolean
    qr?: boolean
    cufe?: boolean
    validated?: boolean
    discountRate?: boolean
    discount?: boolean
    grossValue?: boolean
    taxableAmount?: boolean
    taxAmount?: boolean
    total?: boolean
    fecha?: boolean
    clienteId?: boolean
    companyId?: boolean
    numberingRangeId?: boolean
  }

  export type FacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentCode" | "documentName" | "number" | "referenceCode" | "status" | "sendEmail" | "qr" | "cufe" | "validated" | "discountRate" | "discount" | "grossValue" | "taxableAmount" | "taxAmount" | "total" | "fecha" | "clienteId" | "companyId" | "numberingRangeId", ExtArgs["result"]["factura"]>
  export type FacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    numberingRange?: boolean | NumberingRangeDefaultArgs<ExtArgs>
    detalles?: boolean | Factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    numberingRange?: boolean | NumberingRangeDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    numberingRange?: boolean | NumberingRangeDefaultArgs<ExtArgs>
  }

  export type $FacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factura"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      numberingRange: Prisma.$NumberingRangePayload<ExtArgs>
      detalles: Prisma.$DetalleFacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentCode: string
      documentName: string
      number: string
      referenceCode: string
      status: number
      sendEmail: boolean
      qr: string
      cufe: string
      validated: Date
      discountRate: number
      discount: number
      grossValue: number
      taxableAmount: number
      taxAmount: number
      total: number
      fecha: Date
      clienteId: number
      companyId: number
      numberingRangeId: number
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = $Result.GetResult<Prisma.$FacturaPayload, S>

  type FacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface FacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factura'], meta: { name: 'Factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {FacturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaFindUniqueArgs>(args: SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaFindFirstArgs>(args?: SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FacturaFindManyArgs>(args?: SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura.
     * @param {FacturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends FacturaCreateArgs>(args: SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {FacturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCreateManyArgs>(args?: SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {FacturaCreateManyAndReturnArgs} args - Arguments to create many Facturas.
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
    createManyAndReturn<T extends FacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factura.
     * @param {FacturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends FacturaDeleteArgs>(args: SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura.
     * @param {FacturaUpdateArgs} args - Arguments to update one Factura.
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
    update<T extends FacturaUpdateArgs>(args: SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {FacturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaDeleteManyArgs>(args?: SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends FacturaUpdateManyArgs>(args: SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {FacturaUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
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
    updateManyAndReturn<T extends FacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factura.
     * @param {FacturaUpsertArgs} args - Arguments to update or create a Factura.
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
    upsert<T extends FacturaUpsertArgs>(args: SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends FacturaCountArgs>(
      args?: Subset<T, FacturaCountArgs>,
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
     * @param {FacturaGroupByArgs} args - Group by arguments.
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
      T extends FacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factura model
   */
  readonly fields: FacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    numberingRange<T extends NumberingRangeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NumberingRangeDefaultArgs<ExtArgs>>): Prisma__NumberingRangeClient<$Result.GetResult<Prisma.$NumberingRangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Factura$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Factura$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Factura model
   */
  interface FacturaFieldRefs {
    readonly id: FieldRef<"Factura", 'Int'>
    readonly documentCode: FieldRef<"Factura", 'String'>
    readonly documentName: FieldRef<"Factura", 'String'>
    readonly number: FieldRef<"Factura", 'String'>
    readonly referenceCode: FieldRef<"Factura", 'String'>
    readonly status: FieldRef<"Factura", 'Int'>
    readonly sendEmail: FieldRef<"Factura", 'Boolean'>
    readonly qr: FieldRef<"Factura", 'String'>
    readonly cufe: FieldRef<"Factura", 'String'>
    readonly validated: FieldRef<"Factura", 'DateTime'>
    readonly discountRate: FieldRef<"Factura", 'Float'>
    readonly discount: FieldRef<"Factura", 'Float'>
    readonly grossValue: FieldRef<"Factura", 'Float'>
    readonly taxableAmount: FieldRef<"Factura", 'Float'>
    readonly taxAmount: FieldRef<"Factura", 'Float'>
    readonly total: FieldRef<"Factura", 'Float'>
    readonly fecha: FieldRef<"Factura", 'DateTime'>
    readonly clienteId: FieldRef<"Factura", 'Int'>
    readonly companyId: FieldRef<"Factura", 'Int'>
    readonly numberingRangeId: FieldRef<"Factura", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Factura findUnique
   */
  export type FacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findUniqueOrThrow
   */
  export type FacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findFirst
   */
  export type FacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findFirstOrThrow
   */
  export type FacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findMany
   */
  export type FacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Facturas to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura create
   */
  export type FacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Factura.
     */
    data: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
  }

  /**
   * Factura createMany
   */
  export type FacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura createManyAndReturn
   */
  export type FacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura update
   */
  export type FacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Factura.
     */
    data: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
    /**
     * Choose, which Factura to update.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura updateMany
   */
  export type FacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura updateManyAndReturn
   */
  export type FacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura upsert
   */
  export type FacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Factura to update in case it exists.
     */
    where: FacturaWhereUniqueInput
    /**
     * In case the Factura found by the `where` argument doesn't exist, create a new Factura with this data.
     */
    create: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
    /**
     * In case the Factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
  }

  /**
   * Factura delete
   */
  export type FacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter which Factura to delete.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura deleteMany
   */
  export type FacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facturas to delete
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to delete.
     */
    limit?: number
  }

  /**
   * Factura.detalles
   */
  export type Factura$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    where?: DetalleFacturaWhereInput
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    cursor?: DetalleFacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * Factura without action
   */
  export type FacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
  }


  /**
   * Model DetalleFactura
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
     * Filter which DetalleFactura to aggregate.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleFacturas
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




  export type DetalleFacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleFacturaWhereInput
    orderBy?: DetalleFacturaOrderByWithAggregationInput | DetalleFacturaOrderByWithAggregationInput[]
    by: DetalleFacturaScalarFieldEnum[] | DetalleFacturaScalarFieldEnum
    having?: DetalleFacturaScalarWhereWithAggregatesInput
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

  type GetDetalleFacturaGroupByPayload<T extends DetalleFacturaGroupByArgs> = Prisma.PrismaPromise<
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


  export type DetalleFacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type DetalleFacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type DetalleFacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type DetalleFacturaSelectScalar = {
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    subtotal?: boolean
  }

  export type DetalleFacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facturaId" | "productoId" | "cantidad" | "precioUnitario" | "subtotal", ExtArgs["result"]["detalleFactura"]>
  export type DetalleFacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type DetalleFacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type DetalleFacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $DetalleFacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleFactura"
    objects: {
      factura: Prisma.$FacturaPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
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

  type DetalleFacturaGetPayload<S extends boolean | null | undefined | DetalleFacturaDefaultArgs> = $Result.GetResult<Prisma.$DetalleFacturaPayload, S>

  type DetalleFacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleFacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleFacturaCountAggregateInputType | true
    }

  export interface DetalleFacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleFactura'], meta: { name: 'DetalleFactura' } }
    /**
     * Find zero or one DetalleFactura that matches the filter.
     * @param {DetalleFacturaFindUniqueArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleFacturaFindUniqueArgs>(args: SelectSubset<T, DetalleFacturaFindUniqueArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleFactura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleFacturaFindUniqueOrThrowArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleFacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleFacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleFactura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindFirstArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleFacturaFindFirstArgs>(args?: SelectSubset<T, DetalleFacturaFindFirstArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleFactura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindFirstOrThrowArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleFacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleFacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleFacturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends DetalleFacturaFindManyArgs>(args?: SelectSubset<T, DetalleFacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleFactura.
     * @param {DetalleFacturaCreateArgs} args - Arguments to create a DetalleFactura.
     * @example
     * // Create one DetalleFactura
     * const DetalleFactura = await prisma.detalleFactura.create({
     *   data: {
     *     // ... data to create a DetalleFactura
     *   }
     * })
     * 
     */
    create<T extends DetalleFacturaCreateArgs>(args: SelectSubset<T, DetalleFacturaCreateArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleFacturas.
     * @param {DetalleFacturaCreateManyArgs} args - Arguments to create many DetalleFacturas.
     * @example
     * // Create many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleFacturaCreateManyArgs>(args?: SelectSubset<T, DetalleFacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalleFacturas and returns the data saved in the database.
     * @param {DetalleFacturaCreateManyAndReturnArgs} args - Arguments to create many DetalleFacturas.
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
    createManyAndReturn<T extends DetalleFacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleFacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalleFactura.
     * @param {DetalleFacturaDeleteArgs} args - Arguments to delete one DetalleFactura.
     * @example
     * // Delete one DetalleFactura
     * const DetalleFactura = await prisma.detalleFactura.delete({
     *   where: {
     *     // ... filter to delete one DetalleFactura
     *   }
     * })
     * 
     */
    delete<T extends DetalleFacturaDeleteArgs>(args: SelectSubset<T, DetalleFacturaDeleteArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleFactura.
     * @param {DetalleFacturaUpdateArgs} args - Arguments to update one DetalleFactura.
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
    update<T extends DetalleFacturaUpdateArgs>(args: SelectSubset<T, DetalleFacturaUpdateArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleFacturas.
     * @param {DetalleFacturaDeleteManyArgs} args - Arguments to filter DetalleFacturas to delete.
     * @example
     * // Delete a few DetalleFacturas
     * const { count } = await prisma.detalleFactura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleFacturaDeleteManyArgs>(args?: SelectSubset<T, DetalleFacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleFacturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends DetalleFacturaUpdateManyArgs>(args: SelectSubset<T, DetalleFacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleFacturas and returns the data updated in the database.
     * @param {DetalleFacturaUpdateManyAndReturnArgs} args - Arguments to update many DetalleFacturas.
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
    updateManyAndReturn<T extends DetalleFacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleFacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalleFactura.
     * @param {DetalleFacturaUpsertArgs} args - Arguments to update or create a DetalleFactura.
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
    upsert<T extends DetalleFacturaUpsertArgs>(args: SelectSubset<T, DetalleFacturaUpsertArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleFacturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaCountArgs} args - Arguments to filter DetalleFacturas to count.
     * @example
     * // Count the number of DetalleFacturas
     * const count = await prisma.detalleFactura.count({
     *   where: {
     *     // ... the filter for the DetalleFacturas we want to count
     *   }
     * })
    **/
    count<T extends DetalleFacturaCountArgs>(
      args?: Subset<T, DetalleFacturaCountArgs>,
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
     * @param {DetalleFacturaGroupByArgs} args - Group by arguments.
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
      T extends DetalleFacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleFacturaGroupByArgs['orderBy'] }
        : { orderBy?: DetalleFacturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetalleFacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleFactura model
   */
  readonly fields: DetalleFacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleFactura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleFacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends FacturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacturaDefaultArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetalleFactura model
   */
  interface DetalleFacturaFieldRefs {
    readonly id: FieldRef<"DetalleFactura", 'Int'>
    readonly facturaId: FieldRef<"DetalleFactura", 'Int'>
    readonly productoId: FieldRef<"DetalleFactura", 'Int'>
    readonly cantidad: FieldRef<"DetalleFactura", 'Int'>
    readonly precioUnitario: FieldRef<"DetalleFactura", 'Float'>
    readonly subtotal: FieldRef<"DetalleFactura", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * DetalleFactura findUnique
   */
  export type DetalleFacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura findUniqueOrThrow
   */
  export type DetalleFacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura findFirst
   */
  export type DetalleFacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura findFirstOrThrow
   */
  export type DetalleFacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura findMany
   */
  export type DetalleFacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFacturas to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura create
   */
  export type DetalleFacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleFactura.
     */
    data: XOR<DetalleFacturaCreateInput, DetalleFacturaUncheckedCreateInput>
  }

  /**
   * DetalleFactura createMany
   */
  export type DetalleFacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleFacturas.
     */
    data: DetalleFacturaCreateManyInput | DetalleFacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleFactura createManyAndReturn
   */
  export type DetalleFacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * The data used to create many DetalleFacturas.
     */
    data: DetalleFacturaCreateManyInput | DetalleFacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleFactura update
   */
  export type DetalleFacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleFactura.
     */
    data: XOR<DetalleFacturaUpdateInput, DetalleFacturaUncheckedUpdateInput>
    /**
     * Choose, which DetalleFactura to update.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura updateMany
   */
  export type DetalleFacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleFacturas.
     */
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleFacturas to update
     */
    where?: DetalleFacturaWhereInput
    /**
     * Limit how many DetalleFacturas to update.
     */
    limit?: number
  }

  /**
   * DetalleFactura updateManyAndReturn
   */
  export type DetalleFacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * The data used to update DetalleFacturas.
     */
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleFacturas to update
     */
    where?: DetalleFacturaWhereInput
    /**
     * Limit how many DetalleFacturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleFactura upsert
   */
  export type DetalleFacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleFactura to update in case it exists.
     */
    where: DetalleFacturaWhereUniqueInput
    /**
     * In case the DetalleFactura found by the `where` argument doesn't exist, create a new DetalleFactura with this data.
     */
    create: XOR<DetalleFacturaCreateInput, DetalleFacturaUncheckedCreateInput>
    /**
     * In case the DetalleFactura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleFacturaUpdateInput, DetalleFacturaUncheckedUpdateInput>
  }

  /**
   * DetalleFactura delete
   */
  export type DetalleFacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter which DetalleFactura to delete.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura deleteMany
   */
  export type DetalleFacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleFacturas to delete
     */
    where?: DetalleFacturaWhereInput
    /**
     * Limit how many DetalleFacturas to delete.
     */
    limit?: number
  }

  /**
   * DetalleFactura without action
   */
  export type DetalleFacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    urlLogo: string | null
    nit: string | null
    dv: string | null
    companyName: string | null
    name: string | null
    graphicRepresentationName: string | null
    registrationCode: string | null
    economicActivity: string | null
    phone: string | null
    email: string | null
    direccion: string | null
    municipality: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    urlLogo: string | null
    nit: string | null
    dv: string | null
    companyName: string | null
    name: string | null
    graphicRepresentationName: string | null
    registrationCode: string | null
    economicActivity: string | null
    phone: string | null
    email: string | null
    direccion: string | null
    municipality: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    urlLogo: number
    nit: number
    dv: number
    companyName: number
    name: number
    graphicRepresentationName: number
    registrationCode: number
    economicActivity: number
    phone: number
    email: number
    direccion: number
    municipality: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    urlLogo?: true
    nit?: true
    dv?: true
    companyName?: true
    name?: true
    graphicRepresentationName?: true
    registrationCode?: true
    economicActivity?: true
    phone?: true
    email?: true
    direccion?: true
    municipality?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    urlLogo?: true
    nit?: true
    dv?: true
    companyName?: true
    name?: true
    graphicRepresentationName?: true
    registrationCode?: true
    economicActivity?: true
    phone?: true
    email?: true
    direccion?: true
    municipality?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    urlLogo?: true
    nit?: true
    dv?: true
    companyName?: true
    name?: true
    graphicRepresentationName?: true
    registrationCode?: true
    economicActivity?: true
    phone?: true
    email?: true
    direccion?: true
    municipality?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    urlLogo: string
    nit: string
    dv: string
    companyName: string
    name: string
    graphicRepresentationName: string
    registrationCode: string
    economicActivity: string
    phone: string
    email: string
    direccion: string
    municipality: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlLogo?: boolean
    nit?: boolean
    dv?: boolean
    companyName?: boolean
    name?: boolean
    graphicRepresentationName?: boolean
    registrationCode?: boolean
    economicActivity?: boolean
    phone?: boolean
    email?: boolean
    direccion?: boolean
    municipality?: boolean
    facturas?: boolean | Company$facturasArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlLogo?: boolean
    nit?: boolean
    dv?: boolean
    companyName?: boolean
    name?: boolean
    graphicRepresentationName?: boolean
    registrationCode?: boolean
    economicActivity?: boolean
    phone?: boolean
    email?: boolean
    direccion?: boolean
    municipality?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlLogo?: boolean
    nit?: boolean
    dv?: boolean
    companyName?: boolean
    name?: boolean
    graphicRepresentationName?: boolean
    registrationCode?: boolean
    economicActivity?: boolean
    phone?: boolean
    email?: boolean
    direccion?: boolean
    municipality?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    urlLogo?: boolean
    nit?: boolean
    dv?: boolean
    companyName?: boolean
    name?: boolean
    graphicRepresentationName?: boolean
    registrationCode?: boolean
    economicActivity?: boolean
    phone?: boolean
    email?: boolean
    direccion?: boolean
    municipality?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "urlLogo" | "nit" | "dv" | "companyName" | "name" | "graphicRepresentationName" | "registrationCode" | "economicActivity" | "phone" | "email" | "direccion" | "municipality", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | Company$facturasArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      urlLogo: string
      nit: string
      dv: string
      companyName: string
      name: string
      graphicRepresentationName: string
      registrationCode: string
      economicActivity: string
      phone: string
      email: string
      direccion: string
      municipality: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facturas<T extends Company$facturasArgs<ExtArgs> = {}>(args?: Subset<T, Company$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly urlLogo: FieldRef<"Company", 'String'>
    readonly nit: FieldRef<"Company", 'String'>
    readonly dv: FieldRef<"Company", 'String'>
    readonly companyName: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly graphicRepresentationName: FieldRef<"Company", 'String'>
    readonly registrationCode: FieldRef<"Company", 'String'>
    readonly economicActivity: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly direccion: FieldRef<"Company", 'String'>
    readonly municipality: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.facturas
   */
  export type Company$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
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
    ruc: 'ruc',
    dv: 'dv',
    graphicRepresentationName: 'graphicRepresentationName',
    tradeName: 'tradeName',
    correo: 'correo',
    password: 'password',
    telefono: 'telefono',
    direccion: 'direccion',
    company: 'company',
    existe: 'existe',
    legalOrganizationId: 'legalOrganizationId',
    tributeId: 'tributeId',
    municipalityId: 'municipalityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const LegalOrganizationScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type LegalOrganizationScalarFieldEnum = (typeof LegalOrganizationScalarFieldEnum)[keyof typeof LegalOrganizationScalarFieldEnum]


  export const TributeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type TributeScalarFieldEnum = (typeof TributeScalarFieldEnum)[keyof typeof TributeScalarFieldEnum]


  export const MunicipalityScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type MunicipalityScalarFieldEnum = (typeof MunicipalityScalarFieldEnum)[keyof typeof MunicipalityScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    stock: 'stock'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const NumberingRangeScalarFieldEnum: {
    id: 'id',
    prefix: 'prefix',
    from: 'from',
    to: 'to',
    resolutionNumber: 'resolutionNumber',
    startDate: 'startDate',
    endDate: 'endDate',
    months: 'months'
  };

  export type NumberingRangeScalarFieldEnum = (typeof NumberingRangeScalarFieldEnum)[keyof typeof NumberingRangeScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id: 'id',
    documentCode: 'documentCode',
    documentName: 'documentName',
    number: 'number',
    referenceCode: 'referenceCode',
    status: 'status',
    sendEmail: 'sendEmail',
    qr: 'qr',
    cufe: 'cufe',
    validated: 'validated',
    discountRate: 'discountRate',
    discount: 'discount',
    grossValue: 'grossValue',
    taxableAmount: 'taxableAmount',
    taxAmount: 'taxAmount',
    total: 'total',
    fecha: 'fecha',
    clienteId: 'clienteId',
    companyId: 'companyId',
    numberingRangeId: 'numberingRangeId'
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    urlLogo: 'urlLogo',
    nit: 'nit',
    dv: 'dv',
    companyName: 'companyName',
    name: 'name',
    graphicRepresentationName: 'graphicRepresentationName',
    registrationCode: 'registrationCode',
    economicActivity: 'economicActivity',
    phone: 'phone',
    email: 'email',
    direccion: 'direccion',
    municipality: 'municipality'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    ruc?: StringFilter<"Cliente"> | string
    dv?: StringNullableFilter<"Cliente"> | string | null
    graphicRepresentationName?: StringFilter<"Cliente"> | string
    tradeName?: StringNullableFilter<"Cliente"> | string | null
    correo?: StringFilter<"Cliente"> | string
    password?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    company?: StringNullableFilter<"Cliente"> | string | null
    existe?: BoolFilter<"Cliente"> | boolean
    legalOrganizationId?: IntFilter<"Cliente"> | number
    tributeId?: IntFilter<"Cliente"> | number
    municipalityId?: IntFilter<"Cliente"> | number
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    facturas?: FacturaListRelationFilter
    legalOrganization?: XOR<LegalOrganizationScalarRelationFilter, LegalOrganizationWhereInput>
    tribute?: XOR<TributeScalarRelationFilter, TributeWhereInput>
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    dv?: SortOrderInput | SortOrder
    graphicRepresentationName?: SortOrder
    tradeName?: SortOrderInput | SortOrder
    correo?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    company?: SortOrderInput | SortOrder
    existe?: SortOrder
    legalOrganizationId?: SortOrder
    tributeId?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facturas?: FacturaOrderByRelationAggregateInput
    legalOrganization?: LegalOrganizationOrderByWithRelationInput
    tribute?: TributeOrderByWithRelationInput
    municipality?: MunicipalityOrderByWithRelationInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    ruc?: StringFilter<"Cliente"> | string
    dv?: StringNullableFilter<"Cliente"> | string | null
    graphicRepresentationName?: StringFilter<"Cliente"> | string
    tradeName?: StringNullableFilter<"Cliente"> | string | null
    password?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    company?: StringNullableFilter<"Cliente"> | string | null
    existe?: BoolFilter<"Cliente"> | boolean
    legalOrganizationId?: IntFilter<"Cliente"> | number
    tributeId?: IntFilter<"Cliente"> | number
    municipalityId?: IntFilter<"Cliente"> | number
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    facturas?: FacturaListRelationFilter
    legalOrganization?: XOR<LegalOrganizationScalarRelationFilter, LegalOrganizationWhereInput>
    tribute?: XOR<TributeScalarRelationFilter, TributeWhereInput>
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }, "id" | "correo">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    dv?: SortOrderInput | SortOrder
    graphicRepresentationName?: SortOrder
    tradeName?: SortOrderInput | SortOrder
    correo?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    company?: SortOrderInput | SortOrder
    existe?: SortOrder
    legalOrganizationId?: SortOrder
    tributeId?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    ruc?: StringWithAggregatesFilter<"Cliente"> | string
    dv?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    graphicRepresentationName?: StringWithAggregatesFilter<"Cliente"> | string
    tradeName?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    correo?: StringWithAggregatesFilter<"Cliente"> | string
    password?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    direccion?: StringWithAggregatesFilter<"Cliente"> | string
    company?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    existe?: BoolWithAggregatesFilter<"Cliente"> | boolean
    legalOrganizationId?: IntWithAggregatesFilter<"Cliente"> | number
    tributeId?: IntWithAggregatesFilter<"Cliente"> | number
    municipalityId?: IntWithAggregatesFilter<"Cliente"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type LegalOrganizationWhereInput = {
    AND?: LegalOrganizationWhereInput | LegalOrganizationWhereInput[]
    OR?: LegalOrganizationWhereInput[]
    NOT?: LegalOrganizationWhereInput | LegalOrganizationWhereInput[]
    id?: IntFilter<"LegalOrganization"> | number
    code?: StringFilter<"LegalOrganization"> | string
    name?: StringFilter<"LegalOrganization"> | string
    clientes?: ClienteListRelationFilter
  }

  export type LegalOrganizationOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    clientes?: ClienteOrderByRelationAggregateInput
  }

  export type LegalOrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LegalOrganizationWhereInput | LegalOrganizationWhereInput[]
    OR?: LegalOrganizationWhereInput[]
    NOT?: LegalOrganizationWhereInput | LegalOrganizationWhereInput[]
    code?: StringFilter<"LegalOrganization"> | string
    name?: StringFilter<"LegalOrganization"> | string
    clientes?: ClienteListRelationFilter
  }, "id">

  export type LegalOrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: LegalOrganizationCountOrderByAggregateInput
    _avg?: LegalOrganizationAvgOrderByAggregateInput
    _max?: LegalOrganizationMaxOrderByAggregateInput
    _min?: LegalOrganizationMinOrderByAggregateInput
    _sum?: LegalOrganizationSumOrderByAggregateInput
  }

  export type LegalOrganizationScalarWhereWithAggregatesInput = {
    AND?: LegalOrganizationScalarWhereWithAggregatesInput | LegalOrganizationScalarWhereWithAggregatesInput[]
    OR?: LegalOrganizationScalarWhereWithAggregatesInput[]
    NOT?: LegalOrganizationScalarWhereWithAggregatesInput | LegalOrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LegalOrganization"> | number
    code?: StringWithAggregatesFilter<"LegalOrganization"> | string
    name?: StringWithAggregatesFilter<"LegalOrganization"> | string
  }

  export type TributeWhereInput = {
    AND?: TributeWhereInput | TributeWhereInput[]
    OR?: TributeWhereInput[]
    NOT?: TributeWhereInput | TributeWhereInput[]
    id?: IntFilter<"Tribute"> | number
    code?: StringFilter<"Tribute"> | string
    name?: StringFilter<"Tribute"> | string
    clientes?: ClienteListRelationFilter
  }

  export type TributeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    clientes?: ClienteOrderByRelationAggregateInput
  }

  export type TributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TributeWhereInput | TributeWhereInput[]
    OR?: TributeWhereInput[]
    NOT?: TributeWhereInput | TributeWhereInput[]
    code?: StringFilter<"Tribute"> | string
    name?: StringFilter<"Tribute"> | string
    clientes?: ClienteListRelationFilter
  }, "id">

  export type TributeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: TributeCountOrderByAggregateInput
    _avg?: TributeAvgOrderByAggregateInput
    _max?: TributeMaxOrderByAggregateInput
    _min?: TributeMinOrderByAggregateInput
    _sum?: TributeSumOrderByAggregateInput
  }

  export type TributeScalarWhereWithAggregatesInput = {
    AND?: TributeScalarWhereWithAggregatesInput | TributeScalarWhereWithAggregatesInput[]
    OR?: TributeScalarWhereWithAggregatesInput[]
    NOT?: TributeScalarWhereWithAggregatesInput | TributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tribute"> | number
    code?: StringWithAggregatesFilter<"Tribute"> | string
    name?: StringWithAggregatesFilter<"Tribute"> | string
  }

  export type MunicipalityWhereInput = {
    AND?: MunicipalityWhereInput | MunicipalityWhereInput[]
    OR?: MunicipalityWhereInput[]
    NOT?: MunicipalityWhereInput | MunicipalityWhereInput[]
    id?: IntFilter<"Municipality"> | number
    code?: StringFilter<"Municipality"> | string
    name?: StringFilter<"Municipality"> | string
    clientes?: ClienteListRelationFilter
  }

  export type MunicipalityOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    clientes?: ClienteOrderByRelationAggregateInput
  }

  export type MunicipalityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MunicipalityWhereInput | MunicipalityWhereInput[]
    OR?: MunicipalityWhereInput[]
    NOT?: MunicipalityWhereInput | MunicipalityWhereInput[]
    code?: StringFilter<"Municipality"> | string
    name?: StringFilter<"Municipality"> | string
    clientes?: ClienteListRelationFilter
  }, "id">

  export type MunicipalityOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: MunicipalityCountOrderByAggregateInput
    _avg?: MunicipalityAvgOrderByAggregateInput
    _max?: MunicipalityMaxOrderByAggregateInput
    _min?: MunicipalityMinOrderByAggregateInput
    _sum?: MunicipalitySumOrderByAggregateInput
  }

  export type MunicipalityScalarWhereWithAggregatesInput = {
    AND?: MunicipalityScalarWhereWithAggregatesInput | MunicipalityScalarWhereWithAggregatesInput[]
    OR?: MunicipalityScalarWhereWithAggregatesInput[]
    NOT?: MunicipalityScalarWhereWithAggregatesInput | MunicipalityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Municipality"> | number
    code?: StringWithAggregatesFilter<"Municipality"> | string
    name?: StringWithAggregatesFilter<"Municipality"> | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    detallesFactura?: DetalleFacturaListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    detallesFactura?: DetalleFacturaOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    detallesFactura?: DetalleFacturaListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    precio?: FloatWithAggregatesFilter<"Producto"> | number
    stock?: IntWithAggregatesFilter<"Producto"> | number
  }

  export type NumberingRangeWhereInput = {
    AND?: NumberingRangeWhereInput | NumberingRangeWhereInput[]
    OR?: NumberingRangeWhereInput[]
    NOT?: NumberingRangeWhereInput | NumberingRangeWhereInput[]
    id?: IntFilter<"NumberingRange"> | number
    prefix?: StringFilter<"NumberingRange"> | string
    from?: IntFilter<"NumberingRange"> | number
    to?: IntFilter<"NumberingRange"> | number
    resolutionNumber?: StringFilter<"NumberingRange"> | string
    startDate?: DateTimeFilter<"NumberingRange"> | Date | string
    endDate?: DateTimeFilter<"NumberingRange"> | Date | string
    months?: IntFilter<"NumberingRange"> | number
    facturas?: FacturaListRelationFilter
  }

  export type NumberingRangeOrderByWithRelationInput = {
    id?: SortOrder
    prefix?: SortOrder
    from?: SortOrder
    to?: SortOrder
    resolutionNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    months?: SortOrder
    facturas?: FacturaOrderByRelationAggregateInput
  }

  export type NumberingRangeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NumberingRangeWhereInput | NumberingRangeWhereInput[]
    OR?: NumberingRangeWhereInput[]
    NOT?: NumberingRangeWhereInput | NumberingRangeWhereInput[]
    prefix?: StringFilter<"NumberingRange"> | string
    from?: IntFilter<"NumberingRange"> | number
    to?: IntFilter<"NumberingRange"> | number
    resolutionNumber?: StringFilter<"NumberingRange"> | string
    startDate?: DateTimeFilter<"NumberingRange"> | Date | string
    endDate?: DateTimeFilter<"NumberingRange"> | Date | string
    months?: IntFilter<"NumberingRange"> | number
    facturas?: FacturaListRelationFilter
  }, "id">

  export type NumberingRangeOrderByWithAggregationInput = {
    id?: SortOrder
    prefix?: SortOrder
    from?: SortOrder
    to?: SortOrder
    resolutionNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    months?: SortOrder
    _count?: NumberingRangeCountOrderByAggregateInput
    _avg?: NumberingRangeAvgOrderByAggregateInput
    _max?: NumberingRangeMaxOrderByAggregateInput
    _min?: NumberingRangeMinOrderByAggregateInput
    _sum?: NumberingRangeSumOrderByAggregateInput
  }

  export type NumberingRangeScalarWhereWithAggregatesInput = {
    AND?: NumberingRangeScalarWhereWithAggregatesInput | NumberingRangeScalarWhereWithAggregatesInput[]
    OR?: NumberingRangeScalarWhereWithAggregatesInput[]
    NOT?: NumberingRangeScalarWhereWithAggregatesInput | NumberingRangeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NumberingRange"> | number
    prefix?: StringWithAggregatesFilter<"NumberingRange"> | string
    from?: IntWithAggregatesFilter<"NumberingRange"> | number
    to?: IntWithAggregatesFilter<"NumberingRange"> | number
    resolutionNumber?: StringWithAggregatesFilter<"NumberingRange"> | string
    startDate?: DateTimeWithAggregatesFilter<"NumberingRange"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"NumberingRange"> | Date | string
    months?: IntWithAggregatesFilter<"NumberingRange"> | number
  }

  export type FacturaWhereInput = {
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    id?: IntFilter<"Factura"> | number
    documentCode?: StringFilter<"Factura"> | string
    documentName?: StringFilter<"Factura"> | string
    number?: StringFilter<"Factura"> | string
    referenceCode?: StringFilter<"Factura"> | string
    status?: IntFilter<"Factura"> | number
    sendEmail?: BoolFilter<"Factura"> | boolean
    qr?: StringFilter<"Factura"> | string
    cufe?: StringFilter<"Factura"> | string
    validated?: DateTimeFilter<"Factura"> | Date | string
    discountRate?: FloatFilter<"Factura"> | number
    discount?: FloatFilter<"Factura"> | number
    grossValue?: FloatFilter<"Factura"> | number
    taxableAmount?: FloatFilter<"Factura"> | number
    taxAmount?: FloatFilter<"Factura"> | number
    total?: FloatFilter<"Factura"> | number
    fecha?: DateTimeFilter<"Factura"> | Date | string
    clienteId?: IntFilter<"Factura"> | number
    companyId?: IntFilter<"Factura"> | number
    numberingRangeId?: IntFilter<"Factura"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    numberingRange?: XOR<NumberingRangeScalarRelationFilter, NumberingRangeWhereInput>
    detalles?: DetalleFacturaListRelationFilter
  }

  export type FacturaOrderByWithRelationInput = {
    id?: SortOrder
    documentCode?: SortOrder
    documentName?: SortOrder
    number?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    sendEmail?: SortOrder
    qr?: SortOrder
    cufe?: SortOrder
    validated?: SortOrder
    discountRate?: SortOrder
    discount?: SortOrder
    grossValue?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    companyId?: SortOrder
    numberingRangeId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    numberingRange?: NumberingRangeOrderByWithRelationInput
    detalles?: DetalleFacturaOrderByRelationAggregateInput
  }

  export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    documentCode?: StringFilter<"Factura"> | string
    documentName?: StringFilter<"Factura"> | string
    number?: StringFilter<"Factura"> | string
    referenceCode?: StringFilter<"Factura"> | string
    status?: IntFilter<"Factura"> | number
    sendEmail?: BoolFilter<"Factura"> | boolean
    qr?: StringFilter<"Factura"> | string
    cufe?: StringFilter<"Factura"> | string
    validated?: DateTimeFilter<"Factura"> | Date | string
    discountRate?: FloatFilter<"Factura"> | number
    discount?: FloatFilter<"Factura"> | number
    grossValue?: FloatFilter<"Factura"> | number
    taxableAmount?: FloatFilter<"Factura"> | number
    taxAmount?: FloatFilter<"Factura"> | number
    total?: FloatFilter<"Factura"> | number
    fecha?: DateTimeFilter<"Factura"> | Date | string
    clienteId?: IntFilter<"Factura"> | number
    companyId?: IntFilter<"Factura"> | number
    numberingRangeId?: IntFilter<"Factura"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    numberingRange?: XOR<NumberingRangeScalarRelationFilter, NumberingRangeWhereInput>
    detalles?: DetalleFacturaListRelationFilter
  }, "id">

  export type FacturaOrderByWithAggregationInput = {
    id?: SortOrder
    documentCode?: SortOrder
    documentName?: SortOrder
    number?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    sendEmail?: SortOrder
    qr?: SortOrder
    cufe?: SortOrder
    validated?: SortOrder
    discountRate?: SortOrder
    discount?: SortOrder
    grossValue?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    companyId?: SortOrder
    numberingRangeId?: SortOrder
    _count?: FacturaCountOrderByAggregateInput
    _avg?: FacturaAvgOrderByAggregateInput
    _max?: FacturaMaxOrderByAggregateInput
    _min?: FacturaMinOrderByAggregateInput
    _sum?: FacturaSumOrderByAggregateInput
  }

  export type FacturaScalarWhereWithAggregatesInput = {
    AND?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    OR?: FacturaScalarWhereWithAggregatesInput[]
    NOT?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Factura"> | number
    documentCode?: StringWithAggregatesFilter<"Factura"> | string
    documentName?: StringWithAggregatesFilter<"Factura"> | string
    number?: StringWithAggregatesFilter<"Factura"> | string
    referenceCode?: StringWithAggregatesFilter<"Factura"> | string
    status?: IntWithAggregatesFilter<"Factura"> | number
    sendEmail?: BoolWithAggregatesFilter<"Factura"> | boolean
    qr?: StringWithAggregatesFilter<"Factura"> | string
    cufe?: StringWithAggregatesFilter<"Factura"> | string
    validated?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    discountRate?: FloatWithAggregatesFilter<"Factura"> | number
    discount?: FloatWithAggregatesFilter<"Factura"> | number
    grossValue?: FloatWithAggregatesFilter<"Factura"> | number
    taxableAmount?: FloatWithAggregatesFilter<"Factura"> | number
    taxAmount?: FloatWithAggregatesFilter<"Factura"> | number
    total?: FloatWithAggregatesFilter<"Factura"> | number
    fecha?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    clienteId?: IntWithAggregatesFilter<"Factura"> | number
    companyId?: IntWithAggregatesFilter<"Factura"> | number
    numberingRangeId?: IntWithAggregatesFilter<"Factura"> | number
  }

  export type DetalleFacturaWhereInput = {
    AND?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    OR?: DetalleFacturaWhereInput[]
    NOT?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    id?: IntFilter<"DetalleFactura"> | number
    facturaId?: IntFilter<"DetalleFactura"> | number
    productoId?: IntFilter<"DetalleFactura"> | number
    cantidad?: IntFilter<"DetalleFactura"> | number
    precioUnitario?: FloatFilter<"DetalleFactura"> | number
    subtotal?: FloatFilter<"DetalleFactura"> | number
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type DetalleFacturaOrderByWithRelationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    factura?: FacturaOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type DetalleFacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    OR?: DetalleFacturaWhereInput[]
    NOT?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    facturaId?: IntFilter<"DetalleFactura"> | number
    productoId?: IntFilter<"DetalleFactura"> | number
    cantidad?: IntFilter<"DetalleFactura"> | number
    precioUnitario?: FloatFilter<"DetalleFactura"> | number
    subtotal?: FloatFilter<"DetalleFactura"> | number
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type DetalleFacturaOrderByWithAggregationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
    _count?: DetalleFacturaCountOrderByAggregateInput
    _avg?: DetalleFacturaAvgOrderByAggregateInput
    _max?: DetalleFacturaMaxOrderByAggregateInput
    _min?: DetalleFacturaMinOrderByAggregateInput
    _sum?: DetalleFacturaSumOrderByAggregateInput
  }

  export type DetalleFacturaScalarWhereWithAggregatesInput = {
    AND?: DetalleFacturaScalarWhereWithAggregatesInput | DetalleFacturaScalarWhereWithAggregatesInput[]
    OR?: DetalleFacturaScalarWhereWithAggregatesInput[]
    NOT?: DetalleFacturaScalarWhereWithAggregatesInput | DetalleFacturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleFactura"> | number
    facturaId?: IntWithAggregatesFilter<"DetalleFactura"> | number
    productoId?: IntWithAggregatesFilter<"DetalleFactura"> | number
    cantidad?: IntWithAggregatesFilter<"DetalleFactura"> | number
    precioUnitario?: FloatWithAggregatesFilter<"DetalleFactura"> | number
    subtotal?: FloatWithAggregatesFilter<"DetalleFactura"> | number
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    urlLogo?: StringFilter<"Company"> | string
    nit?: StringFilter<"Company"> | string
    dv?: StringFilter<"Company"> | string
    companyName?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    graphicRepresentationName?: StringFilter<"Company"> | string
    registrationCode?: StringFilter<"Company"> | string
    economicActivity?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    direccion?: StringFilter<"Company"> | string
    municipality?: StringFilter<"Company"> | string
    facturas?: FacturaListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    urlLogo?: SortOrder
    nit?: SortOrder
    dv?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    graphicRepresentationName?: SortOrder
    registrationCode?: SortOrder
    economicActivity?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    municipality?: SortOrder
    facturas?: FacturaOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    urlLogo?: StringFilter<"Company"> | string
    nit?: StringFilter<"Company"> | string
    dv?: StringFilter<"Company"> | string
    companyName?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    graphicRepresentationName?: StringFilter<"Company"> | string
    registrationCode?: StringFilter<"Company"> | string
    economicActivity?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    direccion?: StringFilter<"Company"> | string
    municipality?: StringFilter<"Company"> | string
    facturas?: FacturaListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    urlLogo?: SortOrder
    nit?: SortOrder
    dv?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    graphicRepresentationName?: SortOrder
    registrationCode?: SortOrder
    economicActivity?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    municipality?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    urlLogo?: StringWithAggregatesFilter<"Company"> | string
    nit?: StringWithAggregatesFilter<"Company"> | string
    dv?: StringWithAggregatesFilter<"Company"> | string
    companyName?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    graphicRepresentationName?: StringWithAggregatesFilter<"Company"> | string
    registrationCode?: StringWithAggregatesFilter<"Company"> | string
    economicActivity?: StringWithAggregatesFilter<"Company"> | string
    phone?: StringWithAggregatesFilter<"Company"> | string
    email?: StringWithAggregatesFilter<"Company"> | string
    direccion?: StringWithAggregatesFilter<"Company"> | string
    municipality?: StringWithAggregatesFilter<"Company"> | string
  }

  export type ClienteCreateInput = {
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facturas?: FacturaCreateNestedManyWithoutClienteInput
    legalOrganization: LegalOrganizationCreateNestedOneWithoutClientesInput
    tribute: TributeCreateNestedOneWithoutClientesInput
    municipality: MunicipalityCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    legalOrganizationId: number
    tributeId: number
    municipalityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    facturas?: FacturaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facturas?: FacturaUpdateManyWithoutClienteNestedInput
    legalOrganization?: LegalOrganizationUpdateOneRequiredWithoutClientesNestedInput
    tribute?: TributeUpdateOneRequiredWithoutClientesNestedInput
    municipality?: MunicipalityUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    legalOrganizationId?: IntFieldUpdateOperationsInput | number
    tributeId?: IntFieldUpdateOperationsInput | number
    municipalityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facturas?: FacturaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    legalOrganizationId: number
    tributeId: number
    municipalityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    legalOrganizationId?: IntFieldUpdateOperationsInput | number
    tributeId?: IntFieldUpdateOperationsInput | number
    municipalityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalOrganizationCreateInput = {
    code: string
    name: string
    clientes?: ClienteCreateNestedManyWithoutLegalOrganizationInput
  }

  export type LegalOrganizationUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    clientes?: ClienteUncheckedCreateNestedManyWithoutLegalOrganizationInput
  }

  export type LegalOrganizationUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUpdateManyWithoutLegalOrganizationNestedInput
  }

  export type LegalOrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUncheckedUpdateManyWithoutLegalOrganizationNestedInput
  }

  export type LegalOrganizationCreateManyInput = {
    id?: number
    code: string
    name: string
  }

  export type LegalOrganizationUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LegalOrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TributeCreateInput = {
    code: string
    name: string
    clientes?: ClienteCreateNestedManyWithoutTributeInput
  }

  export type TributeUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    clientes?: ClienteUncheckedCreateNestedManyWithoutTributeInput
  }

  export type TributeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUpdateManyWithoutTributeNestedInput
  }

  export type TributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUncheckedUpdateManyWithoutTributeNestedInput
  }

  export type TributeCreateManyInput = {
    id?: number
    code: string
    name: string
  }

  export type TributeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityCreateInput = {
    code: string
    name: string
    clientes?: ClienteCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    clientes?: ClienteUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityCreateManyInput = {
    id?: number
    code: string
    name: string
  }

  export type MunicipalityUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCreateInput = {
    nombre: string
    precio: number
    stock: number
    detallesFactura?: DetalleFacturaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    detallesFactura?: DetalleFacturaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    detallesFactura?: DetalleFacturaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    detallesFactura?: DetalleFacturaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type NumberingRangeCreateInput = {
    prefix: string
    from: number
    to: number
    resolutionNumber: string
    startDate: Date | string
    endDate: Date | string
    months: number
    facturas?: FacturaCreateNestedManyWithoutNumberingRangeInput
  }

  export type NumberingRangeUncheckedCreateInput = {
    id?: number
    prefix: string
    from: number
    to: number
    resolutionNumber: string
    startDate: Date | string
    endDate: Date | string
    months: number
    facturas?: FacturaUncheckedCreateNestedManyWithoutNumberingRangeInput
  }

  export type NumberingRangeUpdateInput = {
    prefix?: StringFieldUpdateOperationsInput | string
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    resolutionNumber?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: IntFieldUpdateOperationsInput | number
    facturas?: FacturaUpdateManyWithoutNumberingRangeNestedInput
  }

  export type NumberingRangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: StringFieldUpdateOperationsInput | string
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    resolutionNumber?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: IntFieldUpdateOperationsInput | number
    facturas?: FacturaUncheckedUpdateManyWithoutNumberingRangeNestedInput
  }

  export type NumberingRangeCreateManyInput = {
    id?: number
    prefix: string
    from: number
    to: number
    resolutionNumber: string
    startDate: Date | string
    endDate: Date | string
    months: number
  }

  export type NumberingRangeUpdateManyMutationInput = {
    prefix?: StringFieldUpdateOperationsInput | string
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    resolutionNumber?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: IntFieldUpdateOperationsInput | number
  }

  export type NumberingRangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: StringFieldUpdateOperationsInput | string
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    resolutionNumber?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaCreateInput = {
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    cliente: ClienteCreateNestedOneWithoutFacturasInput
    company: CompanyCreateNestedOneWithoutFacturasInput
    numberingRange: NumberingRangeCreateNestedOneWithoutFacturasInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    clienteId: number
    companyId: number
    numberingRangeId: number
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUpdateInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutFacturasNestedInput
    company?: CompanyUpdateOneRequiredWithoutFacturasNestedInput
    numberingRange?: NumberingRangeUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    numberingRangeId?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaCreateManyInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    clienteId: number
    companyId: number
    numberingRangeId: number
  }

  export type FacturaUpdateManyMutationInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    numberingRangeId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaCreateInput = {
    cantidad: number
    precioUnitario: number
    subtotal: number
    factura: FacturaCreateNestedOneWithoutDetallesInput
    producto: ProductoCreateNestedOneWithoutDetallesFacturaInput
  }

  export type DetalleFacturaUncheckedCreateInput = {
    id?: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type DetalleFacturaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    factura?: FacturaUpdateOneRequiredWithoutDetallesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutDetallesFacturaNestedInput
  }

  export type DetalleFacturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaCreateManyInput = {
    id?: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type DetalleFacturaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type CompanyCreateInput = {
    urlLogo: string
    nit: string
    dv: string
    companyName: string
    name: string
    graphicRepresentationName: string
    registrationCode: string
    economicActivity: string
    phone: string
    email: string
    direccion: string
    municipality: string
    facturas?: FacturaCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    urlLogo: string
    nit: string
    dv: string
    companyName: string
    name: string
    graphicRepresentationName: string
    registrationCode: string
    economicActivity: string
    phone: string
    email: string
    direccion: string
    municipality: string
    facturas?: FacturaUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    urlLogo?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    dv?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    economicActivity?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    facturas?: FacturaUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlLogo?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    dv?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    economicActivity?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    facturas?: FacturaUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    urlLogo: string
    nit: string
    dv: string
    companyName: string
    name: string
    graphicRepresentationName: string
    registrationCode: string
    economicActivity: string
    phone: string
    email: string
    direccion: string
    municipality: string
  }

  export type CompanyUpdateManyMutationInput = {
    urlLogo?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    dv?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    economicActivity?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlLogo?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    dv?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    economicActivity?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type FacturaListRelationFilter = {
    every?: FacturaWhereInput
    some?: FacturaWhereInput
    none?: FacturaWhereInput
  }

  export type LegalOrganizationScalarRelationFilter = {
    is?: LegalOrganizationWhereInput
    isNot?: LegalOrganizationWhereInput
  }

  export type TributeScalarRelationFilter = {
    is?: TributeWhereInput
    isNot?: TributeWhereInput
  }

  export type MunicipalityScalarRelationFilter = {
    is?: MunicipalityWhereInput
    isNot?: MunicipalityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    dv?: SortOrder
    graphicRepresentationName?: SortOrder
    tradeName?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    company?: SortOrder
    existe?: SortOrder
    legalOrganizationId?: SortOrder
    tributeId?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
    legalOrganizationId?: SortOrder
    tributeId?: SortOrder
    municipalityId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    dv?: SortOrder
    graphicRepresentationName?: SortOrder
    tradeName?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    company?: SortOrder
    existe?: SortOrder
    legalOrganizationId?: SortOrder
    tributeId?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    dv?: SortOrder
    graphicRepresentationName?: SortOrder
    tradeName?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    company?: SortOrder
    existe?: SortOrder
    legalOrganizationId?: SortOrder
    tributeId?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
    legalOrganizationId?: SortOrder
    tributeId?: SortOrder
    municipalityId?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LegalOrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type LegalOrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LegalOrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type LegalOrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type LegalOrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TributeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type TributeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TributeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type TributeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type TributeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MunicipalityCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type MunicipalityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MunicipalityMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type MunicipalityMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type MunicipalitySumOrderByAggregateInput = {
    id?: SortOrder
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
    every?: DetalleFacturaWhereInput
    some?: DetalleFacturaWhereInput
    none?: DetalleFacturaWhereInput
  }

  export type DetalleFacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
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

  export type NumberingRangeCountOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    from?: SortOrder
    to?: SortOrder
    resolutionNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    months?: SortOrder
  }

  export type NumberingRangeAvgOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    months?: SortOrder
  }

  export type NumberingRangeMaxOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    from?: SortOrder
    to?: SortOrder
    resolutionNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    months?: SortOrder
  }

  export type NumberingRangeMinOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    from?: SortOrder
    to?: SortOrder
    resolutionNumber?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    months?: SortOrder
  }

  export type NumberingRangeSumOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    months?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type NumberingRangeScalarRelationFilter = {
    is?: NumberingRangeWhereInput
    isNot?: NumberingRangeWhereInput
  }

  export type FacturaCountOrderByAggregateInput = {
    id?: SortOrder
    documentCode?: SortOrder
    documentName?: SortOrder
    number?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    sendEmail?: SortOrder
    qr?: SortOrder
    cufe?: SortOrder
    validated?: SortOrder
    discountRate?: SortOrder
    discount?: SortOrder
    grossValue?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    companyId?: SortOrder
    numberingRangeId?: SortOrder
  }

  export type FacturaAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    discountRate?: SortOrder
    discount?: SortOrder
    grossValue?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    companyId?: SortOrder
    numberingRangeId?: SortOrder
  }

  export type FacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    documentCode?: SortOrder
    documentName?: SortOrder
    number?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    sendEmail?: SortOrder
    qr?: SortOrder
    cufe?: SortOrder
    validated?: SortOrder
    discountRate?: SortOrder
    discount?: SortOrder
    grossValue?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    companyId?: SortOrder
    numberingRangeId?: SortOrder
  }

  export type FacturaMinOrderByAggregateInput = {
    id?: SortOrder
    documentCode?: SortOrder
    documentName?: SortOrder
    number?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    sendEmail?: SortOrder
    qr?: SortOrder
    cufe?: SortOrder
    validated?: SortOrder
    discountRate?: SortOrder
    discount?: SortOrder
    grossValue?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    companyId?: SortOrder
    numberingRangeId?: SortOrder
  }

  export type FacturaSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    discountRate?: SortOrder
    discount?: SortOrder
    grossValue?: SortOrder
    taxableAmount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
    companyId?: SortOrder
    numberingRangeId?: SortOrder
  }

  export type FacturaScalarRelationFilter = {
    is?: FacturaWhereInput
    isNot?: FacturaWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type DetalleFacturaCountOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type DetalleFacturaAvgOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type DetalleFacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type DetalleFacturaMinOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type DetalleFacturaSumOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    subtotal?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    urlLogo?: SortOrder
    nit?: SortOrder
    dv?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    graphicRepresentationName?: SortOrder
    registrationCode?: SortOrder
    economicActivity?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    municipality?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    urlLogo?: SortOrder
    nit?: SortOrder
    dv?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    graphicRepresentationName?: SortOrder
    registrationCode?: SortOrder
    economicActivity?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    municipality?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    urlLogo?: SortOrder
    nit?: SortOrder
    dv?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    graphicRepresentationName?: SortOrder
    registrationCode?: SortOrder
    economicActivity?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    municipality?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacturaCreateNestedManyWithoutClienteInput = {
    create?: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput> | FacturaCreateWithoutClienteInput[] | FacturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput | FacturaCreateOrConnectWithoutClienteInput[]
    createMany?: FacturaCreateManyClienteInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type LegalOrganizationCreateNestedOneWithoutClientesInput = {
    create?: XOR<LegalOrganizationCreateWithoutClientesInput, LegalOrganizationUncheckedCreateWithoutClientesInput>
    connectOrCreate?: LegalOrganizationCreateOrConnectWithoutClientesInput
    connect?: LegalOrganizationWhereUniqueInput
  }

  export type TributeCreateNestedOneWithoutClientesInput = {
    create?: XOR<TributeCreateWithoutClientesInput, TributeUncheckedCreateWithoutClientesInput>
    connectOrCreate?: TributeCreateOrConnectWithoutClientesInput
    connect?: TributeWhereUniqueInput
  }

  export type MunicipalityCreateNestedOneWithoutClientesInput = {
    create?: XOR<MunicipalityCreateWithoutClientesInput, MunicipalityUncheckedCreateWithoutClientesInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutClientesInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type FacturaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput> | FacturaCreateWithoutClienteInput[] | FacturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput | FacturaCreateOrConnectWithoutClienteInput[]
    createMany?: FacturaCreateManyClienteInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FacturaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput> | FacturaCreateWithoutClienteInput[] | FacturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput | FacturaCreateOrConnectWithoutClienteInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutClienteInput | FacturaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FacturaCreateManyClienteInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutClienteInput | FacturaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutClienteInput | FacturaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type LegalOrganizationUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<LegalOrganizationCreateWithoutClientesInput, LegalOrganizationUncheckedCreateWithoutClientesInput>
    connectOrCreate?: LegalOrganizationCreateOrConnectWithoutClientesInput
    upsert?: LegalOrganizationUpsertWithoutClientesInput
    connect?: LegalOrganizationWhereUniqueInput
    update?: XOR<XOR<LegalOrganizationUpdateToOneWithWhereWithoutClientesInput, LegalOrganizationUpdateWithoutClientesInput>, LegalOrganizationUncheckedUpdateWithoutClientesInput>
  }

  export type TributeUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<TributeCreateWithoutClientesInput, TributeUncheckedCreateWithoutClientesInput>
    connectOrCreate?: TributeCreateOrConnectWithoutClientesInput
    upsert?: TributeUpsertWithoutClientesInput
    connect?: TributeWhereUniqueInput
    update?: XOR<XOR<TributeUpdateToOneWithWhereWithoutClientesInput, TributeUpdateWithoutClientesInput>, TributeUncheckedUpdateWithoutClientesInput>
  }

  export type MunicipalityUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<MunicipalityCreateWithoutClientesInput, MunicipalityUncheckedCreateWithoutClientesInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutClientesInput
    upsert?: MunicipalityUpsertWithoutClientesInput
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutClientesInput, MunicipalityUpdateWithoutClientesInput>, MunicipalityUncheckedUpdateWithoutClientesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FacturaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput> | FacturaCreateWithoutClienteInput[] | FacturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput | FacturaCreateOrConnectWithoutClienteInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutClienteInput | FacturaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FacturaCreateManyClienteInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutClienteInput | FacturaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutClienteInput | FacturaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type ClienteCreateNestedManyWithoutLegalOrganizationInput = {
    create?: XOR<ClienteCreateWithoutLegalOrganizationInput, ClienteUncheckedCreateWithoutLegalOrganizationInput> | ClienteCreateWithoutLegalOrganizationInput[] | ClienteUncheckedCreateWithoutLegalOrganizationInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLegalOrganizationInput | ClienteCreateOrConnectWithoutLegalOrganizationInput[]
    createMany?: ClienteCreateManyLegalOrganizationInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutLegalOrganizationInput = {
    create?: XOR<ClienteCreateWithoutLegalOrganizationInput, ClienteUncheckedCreateWithoutLegalOrganizationInput> | ClienteCreateWithoutLegalOrganizationInput[] | ClienteUncheckedCreateWithoutLegalOrganizationInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLegalOrganizationInput | ClienteCreateOrConnectWithoutLegalOrganizationInput[]
    createMany?: ClienteCreateManyLegalOrganizationInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUpdateManyWithoutLegalOrganizationNestedInput = {
    create?: XOR<ClienteCreateWithoutLegalOrganizationInput, ClienteUncheckedCreateWithoutLegalOrganizationInput> | ClienteCreateWithoutLegalOrganizationInput[] | ClienteUncheckedCreateWithoutLegalOrganizationInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLegalOrganizationInput | ClienteCreateOrConnectWithoutLegalOrganizationInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutLegalOrganizationInput | ClienteUpsertWithWhereUniqueWithoutLegalOrganizationInput[]
    createMany?: ClienteCreateManyLegalOrganizationInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutLegalOrganizationInput | ClienteUpdateWithWhereUniqueWithoutLegalOrganizationInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutLegalOrganizationInput | ClienteUpdateManyWithWhereWithoutLegalOrganizationInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutLegalOrganizationNestedInput = {
    create?: XOR<ClienteCreateWithoutLegalOrganizationInput, ClienteUncheckedCreateWithoutLegalOrganizationInput> | ClienteCreateWithoutLegalOrganizationInput[] | ClienteUncheckedCreateWithoutLegalOrganizationInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLegalOrganizationInput | ClienteCreateOrConnectWithoutLegalOrganizationInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutLegalOrganizationInput | ClienteUpsertWithWhereUniqueWithoutLegalOrganizationInput[]
    createMany?: ClienteCreateManyLegalOrganizationInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutLegalOrganizationInput | ClienteUpdateWithWhereUniqueWithoutLegalOrganizationInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutLegalOrganizationInput | ClienteUpdateManyWithWhereWithoutLegalOrganizationInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteCreateNestedManyWithoutTributeInput = {
    create?: XOR<ClienteCreateWithoutTributeInput, ClienteUncheckedCreateWithoutTributeInput> | ClienteCreateWithoutTributeInput[] | ClienteUncheckedCreateWithoutTributeInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTributeInput | ClienteCreateOrConnectWithoutTributeInput[]
    createMany?: ClienteCreateManyTributeInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutTributeInput = {
    create?: XOR<ClienteCreateWithoutTributeInput, ClienteUncheckedCreateWithoutTributeInput> | ClienteCreateWithoutTributeInput[] | ClienteUncheckedCreateWithoutTributeInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTributeInput | ClienteCreateOrConnectWithoutTributeInput[]
    createMany?: ClienteCreateManyTributeInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUpdateManyWithoutTributeNestedInput = {
    create?: XOR<ClienteCreateWithoutTributeInput, ClienteUncheckedCreateWithoutTributeInput> | ClienteCreateWithoutTributeInput[] | ClienteUncheckedCreateWithoutTributeInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTributeInput | ClienteCreateOrConnectWithoutTributeInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutTributeInput | ClienteUpsertWithWhereUniqueWithoutTributeInput[]
    createMany?: ClienteCreateManyTributeInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutTributeInput | ClienteUpdateWithWhereUniqueWithoutTributeInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutTributeInput | ClienteUpdateManyWithWhereWithoutTributeInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutTributeNestedInput = {
    create?: XOR<ClienteCreateWithoutTributeInput, ClienteUncheckedCreateWithoutTributeInput> | ClienteCreateWithoutTributeInput[] | ClienteUncheckedCreateWithoutTributeInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTributeInput | ClienteCreateOrConnectWithoutTributeInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutTributeInput | ClienteUpsertWithWhereUniqueWithoutTributeInput[]
    createMany?: ClienteCreateManyTributeInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutTributeInput | ClienteUpdateWithWhereUniqueWithoutTributeInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutTributeInput | ClienteUpdateManyWithWhereWithoutTributeInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<ClienteCreateWithoutMunicipalityInput, ClienteUncheckedCreateWithoutMunicipalityInput> | ClienteCreateWithoutMunicipalityInput[] | ClienteUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutMunicipalityInput | ClienteCreateOrConnectWithoutMunicipalityInput[]
    createMany?: ClienteCreateManyMunicipalityInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<ClienteCreateWithoutMunicipalityInput, ClienteUncheckedCreateWithoutMunicipalityInput> | ClienteCreateWithoutMunicipalityInput[] | ClienteUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutMunicipalityInput | ClienteCreateOrConnectWithoutMunicipalityInput[]
    createMany?: ClienteCreateManyMunicipalityInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<ClienteCreateWithoutMunicipalityInput, ClienteUncheckedCreateWithoutMunicipalityInput> | ClienteCreateWithoutMunicipalityInput[] | ClienteUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutMunicipalityInput | ClienteCreateOrConnectWithoutMunicipalityInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutMunicipalityInput | ClienteUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: ClienteCreateManyMunicipalityInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutMunicipalityInput | ClienteUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutMunicipalityInput | ClienteUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<ClienteCreateWithoutMunicipalityInput, ClienteUncheckedCreateWithoutMunicipalityInput> | ClienteCreateWithoutMunicipalityInput[] | ClienteUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutMunicipalityInput | ClienteCreateOrConnectWithoutMunicipalityInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutMunicipalityInput | ClienteUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: ClienteCreateManyMunicipalityInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutMunicipalityInput | ClienteUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutMunicipalityInput | ClienteUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type DetalleFacturaCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput> | DetalleFacturaCreateWithoutProductoInput[] | DetalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutProductoInput | DetalleFacturaCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleFacturaCreateManyProductoInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type DetalleFacturaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput> | DetalleFacturaCreateWithoutProductoInput[] | DetalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutProductoInput | DetalleFacturaCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleFacturaCreateManyProductoInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DetalleFacturaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput> | DetalleFacturaCreateWithoutProductoInput[] | DetalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutProductoInput | DetalleFacturaCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput | DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleFacturaCreateManyProductoInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput | DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutProductoInput | DetalleFacturaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput> | DetalleFacturaCreateWithoutProductoInput[] | DetalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutProductoInput | DetalleFacturaCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput | DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleFacturaCreateManyProductoInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput | DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutProductoInput | DetalleFacturaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type FacturaCreateNestedManyWithoutNumberingRangeInput = {
    create?: XOR<FacturaCreateWithoutNumberingRangeInput, FacturaUncheckedCreateWithoutNumberingRangeInput> | FacturaCreateWithoutNumberingRangeInput[] | FacturaUncheckedCreateWithoutNumberingRangeInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutNumberingRangeInput | FacturaCreateOrConnectWithoutNumberingRangeInput[]
    createMany?: FacturaCreateManyNumberingRangeInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutNumberingRangeInput = {
    create?: XOR<FacturaCreateWithoutNumberingRangeInput, FacturaUncheckedCreateWithoutNumberingRangeInput> | FacturaCreateWithoutNumberingRangeInput[] | FacturaUncheckedCreateWithoutNumberingRangeInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutNumberingRangeInput | FacturaCreateOrConnectWithoutNumberingRangeInput[]
    createMany?: FacturaCreateManyNumberingRangeInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUpdateManyWithoutNumberingRangeNestedInput = {
    create?: XOR<FacturaCreateWithoutNumberingRangeInput, FacturaUncheckedCreateWithoutNumberingRangeInput> | FacturaCreateWithoutNumberingRangeInput[] | FacturaUncheckedCreateWithoutNumberingRangeInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutNumberingRangeInput | FacturaCreateOrConnectWithoutNumberingRangeInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutNumberingRangeInput | FacturaUpsertWithWhereUniqueWithoutNumberingRangeInput[]
    createMany?: FacturaCreateManyNumberingRangeInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutNumberingRangeInput | FacturaUpdateWithWhereUniqueWithoutNumberingRangeInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutNumberingRangeInput | FacturaUpdateManyWithWhereWithoutNumberingRangeInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutNumberingRangeNestedInput = {
    create?: XOR<FacturaCreateWithoutNumberingRangeInput, FacturaUncheckedCreateWithoutNumberingRangeInput> | FacturaCreateWithoutNumberingRangeInput[] | FacturaUncheckedCreateWithoutNumberingRangeInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutNumberingRangeInput | FacturaCreateOrConnectWithoutNumberingRangeInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutNumberingRangeInput | FacturaUpsertWithWhereUniqueWithoutNumberingRangeInput[]
    createMany?: FacturaCreateManyNumberingRangeInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutNumberingRangeInput | FacturaUpdateWithWhereUniqueWithoutNumberingRangeInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutNumberingRangeInput | FacturaUpdateManyWithWhereWithoutNumberingRangeInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutFacturasInput = {
    create?: XOR<ClienteCreateWithoutFacturasInput, ClienteUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFacturasInput
    connect?: ClienteWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutFacturasInput = {
    create?: XOR<CompanyCreateWithoutFacturasInput, CompanyUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFacturasInput
    connect?: CompanyWhereUniqueInput
  }

  export type NumberingRangeCreateNestedOneWithoutFacturasInput = {
    create?: XOR<NumberingRangeCreateWithoutFacturasInput, NumberingRangeUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: NumberingRangeCreateOrConnectWithoutFacturasInput
    connect?: NumberingRangeWhereUniqueInput
  }

  export type DetalleFacturaCreateNestedManyWithoutFacturaInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: XOR<ClienteCreateWithoutFacturasInput, ClienteUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFacturasInput
    upsert?: ClienteUpsertWithoutFacturasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutFacturasInput, ClienteUpdateWithoutFacturasInput>, ClienteUncheckedUpdateWithoutFacturasInput>
  }

  export type CompanyUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: XOR<CompanyCreateWithoutFacturasInput, CompanyUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFacturasInput
    upsert?: CompanyUpsertWithoutFacturasInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFacturasInput, CompanyUpdateWithoutFacturasInput>, CompanyUncheckedUpdateWithoutFacturasInput>
  }

  export type NumberingRangeUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: XOR<NumberingRangeCreateWithoutFacturasInput, NumberingRangeUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: NumberingRangeCreateOrConnectWithoutFacturasInput
    upsert?: NumberingRangeUpsertWithoutFacturasInput
    connect?: NumberingRangeWhereUniqueInput
    update?: XOR<XOR<NumberingRangeUpdateToOneWithWhereWithoutFacturasInput, NumberingRangeUpdateWithoutFacturasInput>, NumberingRangeUncheckedUpdateWithoutFacturasInput>
  }

  export type DetalleFacturaUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutFacturaInput | DetalleFacturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutFacturaInput | DetalleFacturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type FacturaCreateNestedOneWithoutDetallesInput = {
    create?: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutDetallesInput
    connect?: FacturaWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutDetallesFacturaInput = {
    create?: XOR<ProductoCreateWithoutDetallesFacturaInput, ProductoUncheckedCreateWithoutDetallesFacturaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesFacturaInput
    connect?: ProductoWhereUniqueInput
  }

  export type FacturaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutDetallesInput
    upsert?: FacturaUpsertWithoutDetallesInput
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutDetallesInput, FacturaUpdateWithoutDetallesInput>, FacturaUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateOneRequiredWithoutDetallesFacturaNestedInput = {
    create?: XOR<ProductoCreateWithoutDetallesFacturaInput, ProductoUncheckedCreateWithoutDetallesFacturaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesFacturaInput
    upsert?: ProductoUpsertWithoutDetallesFacturaInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetallesFacturaInput, ProductoUpdateWithoutDetallesFacturaInput>, ProductoUncheckedUpdateWithoutDetallesFacturaInput>
  }

  export type FacturaCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FacturaCreateWithoutCompanyInput, FacturaUncheckedCreateWithoutCompanyInput> | FacturaCreateWithoutCompanyInput[] | FacturaUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCompanyInput | FacturaCreateOrConnectWithoutCompanyInput[]
    createMany?: FacturaCreateManyCompanyInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FacturaCreateWithoutCompanyInput, FacturaUncheckedCreateWithoutCompanyInput> | FacturaCreateWithoutCompanyInput[] | FacturaUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCompanyInput | FacturaCreateOrConnectWithoutCompanyInput[]
    createMany?: FacturaCreateManyCompanyInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FacturaCreateWithoutCompanyInput, FacturaUncheckedCreateWithoutCompanyInput> | FacturaCreateWithoutCompanyInput[] | FacturaUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCompanyInput | FacturaCreateOrConnectWithoutCompanyInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutCompanyInput | FacturaUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FacturaCreateManyCompanyInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutCompanyInput | FacturaUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutCompanyInput | FacturaUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FacturaCreateWithoutCompanyInput, FacturaUncheckedCreateWithoutCompanyInput> | FacturaCreateWithoutCompanyInput[] | FacturaUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCompanyInput | FacturaCreateOrConnectWithoutCompanyInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutCompanyInput | FacturaUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FacturaCreateManyCompanyInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutCompanyInput | FacturaUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutCompanyInput | FacturaUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FacturaCreateWithoutClienteInput = {
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    company: CompanyCreateNestedOneWithoutFacturasInput
    numberingRange: NumberingRangeCreateNestedOneWithoutFacturasInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutClienteInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    companyId: number
    numberingRangeId: number
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutClienteInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput>
  }

  export type FacturaCreateManyClienteInputEnvelope = {
    data: FacturaCreateManyClienteInput | FacturaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type LegalOrganizationCreateWithoutClientesInput = {
    code: string
    name: string
  }

  export type LegalOrganizationUncheckedCreateWithoutClientesInput = {
    id?: number
    code: string
    name: string
  }

  export type LegalOrganizationCreateOrConnectWithoutClientesInput = {
    where: LegalOrganizationWhereUniqueInput
    create: XOR<LegalOrganizationCreateWithoutClientesInput, LegalOrganizationUncheckedCreateWithoutClientesInput>
  }

  export type TributeCreateWithoutClientesInput = {
    code: string
    name: string
  }

  export type TributeUncheckedCreateWithoutClientesInput = {
    id?: number
    code: string
    name: string
  }

  export type TributeCreateOrConnectWithoutClientesInput = {
    where: TributeWhereUniqueInput
    create: XOR<TributeCreateWithoutClientesInput, TributeUncheckedCreateWithoutClientesInput>
  }

  export type MunicipalityCreateWithoutClientesInput = {
    code: string
    name: string
  }

  export type MunicipalityUncheckedCreateWithoutClientesInput = {
    id?: number
    code: string
    name: string
  }

  export type MunicipalityCreateOrConnectWithoutClientesInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutClientesInput, MunicipalityUncheckedCreateWithoutClientesInput>
  }

  export type FacturaUpsertWithWhereUniqueWithoutClienteInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutClienteInput, FacturaUncheckedUpdateWithoutClienteInput>
    create: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutClienteInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutClienteInput, FacturaUncheckedUpdateWithoutClienteInput>
  }

  export type FacturaUpdateManyWithWhereWithoutClienteInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutClienteInput>
  }

  export type FacturaScalarWhereInput = {
    AND?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    OR?: FacturaScalarWhereInput[]
    NOT?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    id?: IntFilter<"Factura"> | number
    documentCode?: StringFilter<"Factura"> | string
    documentName?: StringFilter<"Factura"> | string
    number?: StringFilter<"Factura"> | string
    referenceCode?: StringFilter<"Factura"> | string
    status?: IntFilter<"Factura"> | number
    sendEmail?: BoolFilter<"Factura"> | boolean
    qr?: StringFilter<"Factura"> | string
    cufe?: StringFilter<"Factura"> | string
    validated?: DateTimeFilter<"Factura"> | Date | string
    discountRate?: FloatFilter<"Factura"> | number
    discount?: FloatFilter<"Factura"> | number
    grossValue?: FloatFilter<"Factura"> | number
    taxableAmount?: FloatFilter<"Factura"> | number
    taxAmount?: FloatFilter<"Factura"> | number
    total?: FloatFilter<"Factura"> | number
    fecha?: DateTimeFilter<"Factura"> | Date | string
    clienteId?: IntFilter<"Factura"> | number
    companyId?: IntFilter<"Factura"> | number
    numberingRangeId?: IntFilter<"Factura"> | number
  }

  export type LegalOrganizationUpsertWithoutClientesInput = {
    update: XOR<LegalOrganizationUpdateWithoutClientesInput, LegalOrganizationUncheckedUpdateWithoutClientesInput>
    create: XOR<LegalOrganizationCreateWithoutClientesInput, LegalOrganizationUncheckedCreateWithoutClientesInput>
    where?: LegalOrganizationWhereInput
  }

  export type LegalOrganizationUpdateToOneWithWhereWithoutClientesInput = {
    where?: LegalOrganizationWhereInput
    data: XOR<LegalOrganizationUpdateWithoutClientesInput, LegalOrganizationUncheckedUpdateWithoutClientesInput>
  }

  export type LegalOrganizationUpdateWithoutClientesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LegalOrganizationUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TributeUpsertWithoutClientesInput = {
    update: XOR<TributeUpdateWithoutClientesInput, TributeUncheckedUpdateWithoutClientesInput>
    create: XOR<TributeCreateWithoutClientesInput, TributeUncheckedCreateWithoutClientesInput>
    where?: TributeWhereInput
  }

  export type TributeUpdateToOneWithWhereWithoutClientesInput = {
    where?: TributeWhereInput
    data: XOR<TributeUpdateWithoutClientesInput, TributeUncheckedUpdateWithoutClientesInput>
  }

  export type TributeUpdateWithoutClientesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TributeUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityUpsertWithoutClientesInput = {
    update: XOR<MunicipalityUpdateWithoutClientesInput, MunicipalityUncheckedUpdateWithoutClientesInput>
    create: XOR<MunicipalityCreateWithoutClientesInput, MunicipalityUncheckedCreateWithoutClientesInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutClientesInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutClientesInput, MunicipalityUncheckedUpdateWithoutClientesInput>
  }

  export type MunicipalityUpdateWithoutClientesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateWithoutLegalOrganizationInput = {
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facturas?: FacturaCreateNestedManyWithoutClienteInput
    tribute: TributeCreateNestedOneWithoutClientesInput
    municipality: MunicipalityCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutLegalOrganizationInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    tributeId: number
    municipalityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    facturas?: FacturaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutLegalOrganizationInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutLegalOrganizationInput, ClienteUncheckedCreateWithoutLegalOrganizationInput>
  }

  export type ClienteCreateManyLegalOrganizationInputEnvelope = {
    data: ClienteCreateManyLegalOrganizationInput | ClienteCreateManyLegalOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutLegalOrganizationInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutLegalOrganizationInput, ClienteUncheckedUpdateWithoutLegalOrganizationInput>
    create: XOR<ClienteCreateWithoutLegalOrganizationInput, ClienteUncheckedCreateWithoutLegalOrganizationInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutLegalOrganizationInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutLegalOrganizationInput, ClienteUncheckedUpdateWithoutLegalOrganizationInput>
  }

  export type ClienteUpdateManyWithWhereWithoutLegalOrganizationInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutLegalOrganizationInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    ruc?: StringFilter<"Cliente"> | string
    dv?: StringNullableFilter<"Cliente"> | string | null
    graphicRepresentationName?: StringFilter<"Cliente"> | string
    tradeName?: StringNullableFilter<"Cliente"> | string | null
    correo?: StringFilter<"Cliente"> | string
    password?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    company?: StringNullableFilter<"Cliente"> | string | null
    existe?: BoolFilter<"Cliente"> | boolean
    legalOrganizationId?: IntFilter<"Cliente"> | number
    tributeId?: IntFilter<"Cliente"> | number
    municipalityId?: IntFilter<"Cliente"> | number
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
  }

  export type ClienteCreateWithoutTributeInput = {
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facturas?: FacturaCreateNestedManyWithoutClienteInput
    legalOrganization: LegalOrganizationCreateNestedOneWithoutClientesInput
    municipality: MunicipalityCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutTributeInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    legalOrganizationId: number
    municipalityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    facturas?: FacturaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutTributeInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutTributeInput, ClienteUncheckedCreateWithoutTributeInput>
  }

  export type ClienteCreateManyTributeInputEnvelope = {
    data: ClienteCreateManyTributeInput | ClienteCreateManyTributeInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutTributeInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutTributeInput, ClienteUncheckedUpdateWithoutTributeInput>
    create: XOR<ClienteCreateWithoutTributeInput, ClienteUncheckedCreateWithoutTributeInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutTributeInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutTributeInput, ClienteUncheckedUpdateWithoutTributeInput>
  }

  export type ClienteUpdateManyWithWhereWithoutTributeInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutTributeInput>
  }

  export type ClienteCreateWithoutMunicipalityInput = {
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    facturas?: FacturaCreateNestedManyWithoutClienteInput
    legalOrganization: LegalOrganizationCreateNestedOneWithoutClientesInput
    tribute: TributeCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutMunicipalityInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    legalOrganizationId: number
    tributeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    facturas?: FacturaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutMunicipalityInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutMunicipalityInput, ClienteUncheckedCreateWithoutMunicipalityInput>
  }

  export type ClienteCreateManyMunicipalityInputEnvelope = {
    data: ClienteCreateManyMunicipalityInput | ClienteCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutMunicipalityInput, ClienteUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<ClienteCreateWithoutMunicipalityInput, ClienteUncheckedCreateWithoutMunicipalityInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutMunicipalityInput, ClienteUncheckedUpdateWithoutMunicipalityInput>
  }

  export type ClienteUpdateManyWithWhereWithoutMunicipalityInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type DetalleFacturaCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: number
    subtotal: number
    factura: FacturaCreateNestedOneWithoutDetallesInput
  }

  export type DetalleFacturaUncheckedCreateWithoutProductoInput = {
    id?: number
    facturaId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type DetalleFacturaCreateOrConnectWithoutProductoInput = {
    where: DetalleFacturaWhereUniqueInput
    create: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleFacturaCreateManyProductoInputEnvelope = {
    data: DetalleFacturaCreateManyProductoInput | DetalleFacturaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput = {
    where: DetalleFacturaWhereUniqueInput
    update: XOR<DetalleFacturaUpdateWithoutProductoInput, DetalleFacturaUncheckedUpdateWithoutProductoInput>
    create: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput = {
    where: DetalleFacturaWhereUniqueInput
    data: XOR<DetalleFacturaUpdateWithoutProductoInput, DetalleFacturaUncheckedUpdateWithoutProductoInput>
  }

  export type DetalleFacturaUpdateManyWithWhereWithoutProductoInput = {
    where: DetalleFacturaScalarWhereInput
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetalleFacturaScalarWhereInput = {
    AND?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
    OR?: DetalleFacturaScalarWhereInput[]
    NOT?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
    id?: IntFilter<"DetalleFactura"> | number
    facturaId?: IntFilter<"DetalleFactura"> | number
    productoId?: IntFilter<"DetalleFactura"> | number
    cantidad?: IntFilter<"DetalleFactura"> | number
    precioUnitario?: FloatFilter<"DetalleFactura"> | number
    subtotal?: FloatFilter<"DetalleFactura"> | number
  }

  export type FacturaCreateWithoutNumberingRangeInput = {
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    cliente: ClienteCreateNestedOneWithoutFacturasInput
    company: CompanyCreateNestedOneWithoutFacturasInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutNumberingRangeInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    clienteId: number
    companyId: number
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutNumberingRangeInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutNumberingRangeInput, FacturaUncheckedCreateWithoutNumberingRangeInput>
  }

  export type FacturaCreateManyNumberingRangeInputEnvelope = {
    data: FacturaCreateManyNumberingRangeInput | FacturaCreateManyNumberingRangeInput[]
    skipDuplicates?: boolean
  }

  export type FacturaUpsertWithWhereUniqueWithoutNumberingRangeInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutNumberingRangeInput, FacturaUncheckedUpdateWithoutNumberingRangeInput>
    create: XOR<FacturaCreateWithoutNumberingRangeInput, FacturaUncheckedCreateWithoutNumberingRangeInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutNumberingRangeInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutNumberingRangeInput, FacturaUncheckedUpdateWithoutNumberingRangeInput>
  }

  export type FacturaUpdateManyWithWhereWithoutNumberingRangeInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutNumberingRangeInput>
  }

  export type ClienteCreateWithoutFacturasInput = {
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    legalOrganization: LegalOrganizationCreateNestedOneWithoutClientesInput
    tribute: TributeCreateNestedOneWithoutClientesInput
    municipality: MunicipalityCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutFacturasInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    legalOrganizationId: number
    tributeId: number
    municipalityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutFacturasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutFacturasInput, ClienteUncheckedCreateWithoutFacturasInput>
  }

  export type CompanyCreateWithoutFacturasInput = {
    urlLogo: string
    nit: string
    dv: string
    companyName: string
    name: string
    graphicRepresentationName: string
    registrationCode: string
    economicActivity: string
    phone: string
    email: string
    direccion: string
    municipality: string
  }

  export type CompanyUncheckedCreateWithoutFacturasInput = {
    id?: number
    urlLogo: string
    nit: string
    dv: string
    companyName: string
    name: string
    graphicRepresentationName: string
    registrationCode: string
    economicActivity: string
    phone: string
    email: string
    direccion: string
    municipality: string
  }

  export type CompanyCreateOrConnectWithoutFacturasInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFacturasInput, CompanyUncheckedCreateWithoutFacturasInput>
  }

  export type NumberingRangeCreateWithoutFacturasInput = {
    prefix: string
    from: number
    to: number
    resolutionNumber: string
    startDate: Date | string
    endDate: Date | string
    months: number
  }

  export type NumberingRangeUncheckedCreateWithoutFacturasInput = {
    id?: number
    prefix: string
    from: number
    to: number
    resolutionNumber: string
    startDate: Date | string
    endDate: Date | string
    months: number
  }

  export type NumberingRangeCreateOrConnectWithoutFacturasInput = {
    where: NumberingRangeWhereUniqueInput
    create: XOR<NumberingRangeCreateWithoutFacturasInput, NumberingRangeUncheckedCreateWithoutFacturasInput>
  }

  export type DetalleFacturaCreateWithoutFacturaInput = {
    cantidad: number
    precioUnitario: number
    subtotal: number
    producto: ProductoCreateNestedOneWithoutDetallesFacturaInput
  }

  export type DetalleFacturaUncheckedCreateWithoutFacturaInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type DetalleFacturaCreateOrConnectWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    create: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput>
  }

  export type DetalleFacturaCreateManyFacturaInputEnvelope = {
    data: DetalleFacturaCreateManyFacturaInput | DetalleFacturaCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutFacturasInput = {
    update: XOR<ClienteUpdateWithoutFacturasInput, ClienteUncheckedUpdateWithoutFacturasInput>
    create: XOR<ClienteCreateWithoutFacturasInput, ClienteUncheckedCreateWithoutFacturasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutFacturasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutFacturasInput, ClienteUncheckedUpdateWithoutFacturasInput>
  }

  export type ClienteUpdateWithoutFacturasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalOrganization?: LegalOrganizationUpdateOneRequiredWithoutClientesNestedInput
    tribute?: TributeUpdateOneRequiredWithoutClientesNestedInput
    municipality?: MunicipalityUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutFacturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    legalOrganizationId?: IntFieldUpdateOperationsInput | number
    tributeId?: IntFieldUpdateOperationsInput | number
    municipalityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpsertWithoutFacturasInput = {
    update: XOR<CompanyUpdateWithoutFacturasInput, CompanyUncheckedUpdateWithoutFacturasInput>
    create: XOR<CompanyCreateWithoutFacturasInput, CompanyUncheckedCreateWithoutFacturasInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFacturasInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFacturasInput, CompanyUncheckedUpdateWithoutFacturasInput>
  }

  export type CompanyUpdateWithoutFacturasInput = {
    urlLogo?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    dv?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    economicActivity?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutFacturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlLogo?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    dv?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    economicActivity?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
  }

  export type NumberingRangeUpsertWithoutFacturasInput = {
    update: XOR<NumberingRangeUpdateWithoutFacturasInput, NumberingRangeUncheckedUpdateWithoutFacturasInput>
    create: XOR<NumberingRangeCreateWithoutFacturasInput, NumberingRangeUncheckedCreateWithoutFacturasInput>
    where?: NumberingRangeWhereInput
  }

  export type NumberingRangeUpdateToOneWithWhereWithoutFacturasInput = {
    where?: NumberingRangeWhereInput
    data: XOR<NumberingRangeUpdateWithoutFacturasInput, NumberingRangeUncheckedUpdateWithoutFacturasInput>
  }

  export type NumberingRangeUpdateWithoutFacturasInput = {
    prefix?: StringFieldUpdateOperationsInput | string
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    resolutionNumber?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: IntFieldUpdateOperationsInput | number
  }

  export type NumberingRangeUncheckedUpdateWithoutFacturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: StringFieldUpdateOperationsInput | string
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    resolutionNumber?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    update: XOR<DetalleFacturaUpdateWithoutFacturaInput, DetalleFacturaUncheckedUpdateWithoutFacturaInput>
    create: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput>
  }

  export type DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    data: XOR<DetalleFacturaUpdateWithoutFacturaInput, DetalleFacturaUncheckedUpdateWithoutFacturaInput>
  }

  export type DetalleFacturaUpdateManyWithWhereWithoutFacturaInput = {
    where: DetalleFacturaScalarWhereInput
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyWithoutFacturaInput>
  }

  export type FacturaCreateWithoutDetallesInput = {
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    cliente: ClienteCreateNestedOneWithoutFacturasInput
    company: CompanyCreateNestedOneWithoutFacturasInput
    numberingRange: NumberingRangeCreateNestedOneWithoutFacturasInput
  }

  export type FacturaUncheckedCreateWithoutDetallesInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    clienteId: number
    companyId: number
    numberingRangeId: number
  }

  export type FacturaCreateOrConnectWithoutDetallesInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
  }

  export type ProductoCreateWithoutDetallesFacturaInput = {
    nombre: string
    precio: number
    stock: number
  }

  export type ProductoUncheckedCreateWithoutDetallesFacturaInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
  }

  export type ProductoCreateOrConnectWithoutDetallesFacturaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetallesFacturaInput, ProductoUncheckedCreateWithoutDetallesFacturaInput>
  }

  export type FacturaUpsertWithoutDetallesInput = {
    update: XOR<FacturaUpdateWithoutDetallesInput, FacturaUncheckedUpdateWithoutDetallesInput>
    create: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutDetallesInput, FacturaUncheckedUpdateWithoutDetallesInput>
  }

  export type FacturaUpdateWithoutDetallesInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutFacturasNestedInput
    company?: CompanyUpdateOneRequiredWithoutFacturasNestedInput
    numberingRange?: NumberingRangeUpdateOneRequiredWithoutFacturasNestedInput
  }

  export type FacturaUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    numberingRangeId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoUpsertWithoutDetallesFacturaInput = {
    update: XOR<ProductoUpdateWithoutDetallesFacturaInput, ProductoUncheckedUpdateWithoutDetallesFacturaInput>
    create: XOR<ProductoCreateWithoutDetallesFacturaInput, ProductoUncheckedCreateWithoutDetallesFacturaInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetallesFacturaInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetallesFacturaInput, ProductoUncheckedUpdateWithoutDetallesFacturaInput>
  }

  export type ProductoUpdateWithoutDetallesFacturaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoUncheckedUpdateWithoutDetallesFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaCreateWithoutCompanyInput = {
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    cliente: ClienteCreateNestedOneWithoutFacturasInput
    numberingRange: NumberingRangeCreateNestedOneWithoutFacturasInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutCompanyInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    clienteId: number
    numberingRangeId: number
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutCompanyInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutCompanyInput, FacturaUncheckedCreateWithoutCompanyInput>
  }

  export type FacturaCreateManyCompanyInputEnvelope = {
    data: FacturaCreateManyCompanyInput | FacturaCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type FacturaUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutCompanyInput, FacturaUncheckedUpdateWithoutCompanyInput>
    create: XOR<FacturaCreateWithoutCompanyInput, FacturaUncheckedCreateWithoutCompanyInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutCompanyInput, FacturaUncheckedUpdateWithoutCompanyInput>
  }

  export type FacturaUpdateManyWithWhereWithoutCompanyInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FacturaCreateManyClienteInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    companyId: number
    numberingRangeId: number
  }

  export type FacturaUpdateWithoutClienteInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutFacturasNestedInput
    numberingRange?: NumberingRangeUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: IntFieldUpdateOperationsInput | number
    numberingRangeId?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: IntFieldUpdateOperationsInput | number
    numberingRangeId?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateManyLegalOrganizationInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    tributeId: number
    municipalityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateWithoutLegalOrganizationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facturas?: FacturaUpdateManyWithoutClienteNestedInput
    tribute?: TributeUpdateOneRequiredWithoutClientesNestedInput
    municipality?: MunicipalityUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutLegalOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    tributeId?: IntFieldUpdateOperationsInput | number
    municipalityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facturas?: FacturaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutLegalOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    tributeId?: IntFieldUpdateOperationsInput | number
    municipalityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateManyTributeInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    legalOrganizationId: number
    municipalityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateWithoutTributeInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facturas?: FacturaUpdateManyWithoutClienteNestedInput
    legalOrganization?: LegalOrganizationUpdateOneRequiredWithoutClientesNestedInput
    municipality?: MunicipalityUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutTributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    legalOrganizationId?: IntFieldUpdateOperationsInput | number
    municipalityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facturas?: FacturaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutTributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    legalOrganizationId?: IntFieldUpdateOperationsInput | number
    municipalityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateManyMunicipalityInput = {
    id?: number
    nombre: string
    ruc: string
    dv?: string | null
    graphicRepresentationName: string
    tradeName?: string | null
    correo: string
    password: string
    telefono: string
    direccion: string
    company?: string | null
    existe?: boolean
    legalOrganizationId: number
    tributeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateWithoutMunicipalityInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facturas?: FacturaUpdateManyWithoutClienteNestedInput
    legalOrganization?: LegalOrganizationUpdateOneRequiredWithoutClientesNestedInput
    tribute?: TributeUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutMunicipalityInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    legalOrganizationId?: IntFieldUpdateOperationsInput | number
    tributeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facturas?: FacturaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    dv?: NullableStringFieldUpdateOperationsInput | string | null
    graphicRepresentationName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    existe?: BoolFieldUpdateOperationsInput | boolean
    legalOrganizationId?: IntFieldUpdateOperationsInput | number
    tributeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleFacturaCreateManyProductoInput = {
    id?: number
    facturaId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type DetalleFacturaUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    factura?: FacturaUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type DetalleFacturaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type FacturaCreateManyNumberingRangeInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    clienteId: number
    companyId: number
  }

  export type FacturaUpdateWithoutNumberingRangeInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutFacturasNestedInput
    company?: CompanyUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutNumberingRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutNumberingRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaCreateManyFacturaInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: number
    subtotal: number
  }

  export type DetalleFacturaUpdateWithoutFacturaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutDetallesFacturaNestedInput
  }

  export type DetalleFacturaUncheckedUpdateWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type FacturaCreateManyCompanyInput = {
    id?: number
    documentCode: string
    documentName: string
    number: string
    referenceCode: string
    status: number
    sendEmail: boolean
    qr: string
    cufe: string
    validated: Date | string
    discountRate: number
    discount: number
    grossValue: number
    taxableAmount: number
    taxAmount: number
    total: number
    fecha?: Date | string
    clienteId: number
    numberingRangeId: number
  }

  export type FacturaUpdateWithoutCompanyInput = {
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutFacturasNestedInput
    numberingRange?: NumberingRangeUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    numberingRangeId?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentCode?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    sendEmail?: BoolFieldUpdateOperationsInput | boolean
    qr?: StringFieldUpdateOperationsInput | string
    cufe?: StringFieldUpdateOperationsInput | string
    validated?: DateTimeFieldUpdateOperationsInput | Date | string
    discountRate?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    grossValue?: FloatFieldUpdateOperationsInput | number
    taxableAmount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    numberingRangeId?: IntFieldUpdateOperationsInput | number
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