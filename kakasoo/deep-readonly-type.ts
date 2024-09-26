type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 사용 예시
type Test2 = DeepReadonly<{ a: { b: { c: string } } }>;
// { readonly a: { readonly b: { readonly c: string } } }
