import{W as u,r as x,j as e,b as p,d as g}from"./app-237fc0c5.js";import{G as f}from"./GuestLayout-cf3223d6.js";import{T as m,I as l}from"./TextInput-e1a89f25.js";import{I as o}from"./InputLabel-829c4cef.js";function N(){const{data:a,setData:t,post:n,processing:i,errors:r,reset:d}=u({name:"",lastname:"",firstname:"",email:"",password:"",password_confirmation:""});x.useEffect(()=>()=>{d("password","password_confirmation")},[]);const c=s=>{s.preventDefault(),n(route("register"))};return e.jsxs(f,{children:[e.jsx(p,{title:"開運の旅へ"}),e.jsx("div",{className:"max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center",children:e.jsxs("div",{className:"mt-4",children:[e.jsx("h1",{className:"font-bold text-gray-800 leading-tight m-2 mb-5",children:"開運の旅へようこそ"}),e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"このアプリではパワースポットのご案内とパワースポットの巡り方をご案内しています。"}),e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"パワースポットは基本的にはその場所に行くだけでパワーを得ることができますが、そのパワーを自分の中に取り込み、ここぞというときにその力を発揮させるためには正しい手順で行くと良いとされています。"}),e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"そのため、手順に沿ってミッションをご用意していますのでミッションにそってパワースポットを巡ってください。 またにはミッション写真撮影もございます。 神様のお力を、写真に残すことで、そのパワーを持って帰らせていただけますので、あなたの日常に取り入れてください。また、あなたの旅の思い出として大切にしてください。"}),e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"このアプリはパワースポットの巡り方や進行を管理し、旅の記録を共有できます。下記よりユーザー登録をして、開運の旅を楽しみましょう！"})]})}),e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"name",value:"ユーザー名（ニックネーム）"}),e.jsx(m,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>t("name",s.target.value),required:!0}),e.jsx(l,{message:r.name,className:"mt-2"})]}),e.jsxs("div",{className:"flex",children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"lastname",value:"姓"}),e.jsx(m,{id:"lastname",name:"lastname",value:a.lastname,className:"mt-1 block w-full",autoComplete:"lastname",isFocused:!0,onChange:s=>t("lastname",s.target.value),required:!0}),e.jsx(l,{message:r.lastname,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"firstname",value:"名"}),e.jsx(m,{id:"firstname",name:"firstname",value:a.firstname,className:"mt-1 block w-full",autoComplete:"firstname",isFocused:!0,onChange:s=>t("firstname",s.target.value),required:!0}),e.jsx(l,{message:r.firstname,className:"mt-2"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"email",value:"メールアドレス"}),e.jsx(m,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>t("email",s.target.value),required:!0}),e.jsx(l,{message:r.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"password",value:"パスワード"}),e.jsx(m,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>t("password",s.target.value),required:!0}),e.jsx(l,{message:r.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"password_confirmation",value:"確認用パスワード"}),e.jsx(m,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>t("password_confirmation",s.target.value),required:!0}),e.jsx(l,{message:r.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 m-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"ログインはこちらから"}),e.jsx("button",{className:"custom-button",disabled:i,children:"新規登録"})]})]}),e.jsx("style",{children:`
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

                                `})]})}export{N as default};
