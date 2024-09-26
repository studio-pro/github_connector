type TupleToUnion<T> = T extends Array<infer U> ? U : never;

// 사용 예시
type Test3 = TupleToUnion<[string, number, boolean]>; // string | number | boolean
