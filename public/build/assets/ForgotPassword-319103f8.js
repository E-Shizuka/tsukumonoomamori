import{W as m,j as e,b as c}from"./app-66e65dfe.js";import{G as d}from"./GuestLayout-1793f540.js";import{T as u,I as x}from"./TextInput-97f33f08.js";function f({status:t}){const{data:o,setData:r,post:a,processing:n,errors:i}=m({email:""}),l=s=>{s.preventDefault(),a(route("password.email"))};return e.jsxs(d,{children:[e.jsx(c,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"パスワードをお忘れですか？下記より会員登録しているメールアドレスを記入し送信ボタンをクリックください。パスワード再設定用のリンクをメールでお送りします。"}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:l,children:[e.jsx(u,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(x,{message:i.email,className:"mt-2"}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx("button",{onClick:()=>{window.location.href=route("login")},className:"custom-button",children:"戻る"}),e.jsx("button",{className:"custom-button2",disabled:n,children:"送信"})]})]}),e.jsx("style",{children:`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                    }

                    .custom-button2 {
                        background-color: #d3381c; /* ホバー時の背景色 */
                        color: white; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                    }

                                `})]})}export{f as default};
