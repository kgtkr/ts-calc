type TupleToNum<T extends any[]> = T["length"];
type NumToTuple<T extends number> =
  T extends 0 ? [] :
  T extends 1 ? [any] :
  T extends 2 ? [any, any] :
  T extends 3 ? [any, any, any] :
  T extends 4 ? [any, any, any, any] :
  T extends 5 ? [any, any, any, any, any] :
  T extends 6 ? [any, any, any, any, any, any] :
  T extends 7 ? [any, any, any, any, any, any, any] :
  T extends 8 ? [any, any, any, any, any, any, any, any] :
  T extends 9 ? [any, any, any, any, any, any, any, any, any] :
  never;


type Inc<X extends any[]> = Cons<any, X>;
type Dec<X extends any[]> = Tail<X>;
type Add<A extends any[], B extends any[]> = {
  0: A,
  1: Add<Inc<A>, Dec<B>>
}[B extends [] ? 0 : 1];

type Sub<A extends any[], B extends any[]> = {
  0: A,
  1: Sub<Dec<A>, Dec<B>>
}[B extends [] ? 0 : 1];

