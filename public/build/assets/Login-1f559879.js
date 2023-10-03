import{j as e,W as p,r as b,b as h,d as f}from"./app-15fbdc5e.js";import{G as g}from"./GuestLayout-1d6073e9.js";import{T as l,I as m}from"./TextInput-79a5dec2.js";import{I as c}from"./InputLabel-ed93a46c.js";function j({className:r="",...t}){return e.jsx("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function y({status:r,canResetPassword:t}){const{data:o,setData:a,post:d,processing:i,errors:n,reset:u}=p({email:"",password:"",remember:!1});b.useEffect(()=>()=>{u("password")},[]);const x=s=>{s.preventDefault(),d(route("login"))};return e.jsxs(g,{children:[e.jsx(h,{title:"ログイン"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{children:[e.jsx(c,{htmlFor:"email",value:"メールアドレス"}),e.jsx(l,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>a("email",s.target.value)}),e.jsx(m,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{htmlFor:"password",value:"パスワード"}),e.jsx(l,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>a("password",s.target.value)}),e.jsx(m,{message:n.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(j,{name:"remember",checked:o.remember,onChange:s=>a("remember",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"ログイン状態を保持する"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[t&&e.jsx(f,{href:route("password.request"),className:"mr-1 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"パスワードをお忘れた方はこちら"}),e.jsx("button",{className:"red-button",disabled:i,children:"ログイン"})]})]}),e.jsx("div",{className:"flex flex-col items-center mt-36 my-8",children:e.jsx("div",{className:"mb-16",children:e.jsx("button",{onClick:()=>{window.location.href=route("welcome")},className:"custom-button",children:"トップページへ戻る"})})}),e.jsx("style",{children:`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                    }

                    .red-button {
                        background-color: #d3381c; /* ボタンの背景色 */
                        color: white; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                    }

                    .custom-button:hover {
                        background-color: #d3381c; /* ホバー時の背景色 */
                        color: white; /* ボタンのテキスト色 */
                    }

                                `})]})}export{y as default};
