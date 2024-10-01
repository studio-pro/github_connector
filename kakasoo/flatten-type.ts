type Flatten<T> = T extends Array<infer U> ? U : T;

// 사용 예시
type Test1 = Flatten<[number, [string, [boolean]]]>; // number | string | boolean
