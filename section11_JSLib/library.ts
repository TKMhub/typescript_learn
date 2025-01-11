import axios from "axios";

//⭐️index.d.ts（declare）ファイルを見て型を判別している
// (method) Axios.get<any, AxiosResponse<any, any>, any>(url: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>>
// axios.get();

//.d.ts・・・型定義ファイルがない場合
// →npm install --save-dev @types/lodash
import _ from "lodash";
_.shuffle([1, 2, 3, 4]);
