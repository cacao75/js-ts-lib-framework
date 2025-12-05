declare module '*.css' {
  // 일반적인 CSS 파일 import를 허용합니다.
  // 내용이 필요하지 않으므로 빈 객체 타입을 선언합니다.
  const content: any;
  export default content;
}

// 만약 CSS Module (예: .module.css)을 사용한다면 다음 정의를 추가합니다.
/*
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
*/
