// https://github.com/Microsoft/TypeScript/pull/24897

type Head<T> = T extends [infer P, ...any[]] ? P : never;
type Tail<T extends any[]> = ((...x: T) => void) extends ((x: any, ...xs: infer P) => void) ? P : never;
type Cons<X, T extends any[]> = ((x: X, ...args: T) => void) extends ((...args: infer R) => void) ? R : [];
