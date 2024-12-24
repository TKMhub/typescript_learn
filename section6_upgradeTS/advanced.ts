type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

//⭐️インターセクション型（エンジニアブロガー）
type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger {}

const quill2: EngineerBlogger = {
  name: "Quill",
  role: "front",
  follower: 111,
};

//type tmp = never
type tmp = string & number;

//numberまたはbool / stringまたはnumber　→number 集合の考え方
type NumberBoolean = number | boolean;
type StringNumber = number | String;

type Mix = NumberBoolean & StringNumber;
