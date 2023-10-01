import{j as e,W as p,r as f,b,d as g}from"./app-58604280.js";import{G as h}from"./GuestLayout-be406da9.js";import{T as n,I as l}from"./TextInput-c9c1ab0b.js";import{I as c}from"./InputLabel-4c58e45b.js";function j({className:r="",...t}){return e.jsx("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function y({status:r,canResetPassword:t}){const{data:a,setData:o,post:i,processing:d,errors:m,reset:u}=p({email:"",password:"",remember:!1});f.useEffect(()=>()=>{u("password")},[]);const x=s=>{s.preventDefault(),i(route("login"))};return e.jsxs(h,{children:[e.jsx(b,{title:"ログイン"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{children:[e.jsx(c,{htmlFor:"email",value:"メールアドレス"}),e.jsx(n,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(l,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{htmlFor:"password",value:"パスワード"}),e.jsx(n,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx(l,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(j,{name:"remember",checked:a.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"入力情報を記録する"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[t&&e.jsx(g,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"パスワードをお忘れた方はこちら"}),e.jsx("button",{className:"custom-button",disabled:d,children:"ログイン"})]})]}),e.jsx("style",{children:`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                    }

                    .custom-button:hover {
                        background-color: #d3381c; /* ホバー時の背景色 */
                        color: white; /* ボタンのテキスト色 */
                    }

                                `})]})}export{y as default};
