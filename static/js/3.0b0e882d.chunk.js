(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[3],{301:function(t,e,o){t.exports={statusContainer:"ProfileInfo_statusContainer__287f4",profileInfo:"ProfileInfo_profileInfo__hb7xu",sendFileButton:"ProfileInfo_sendFileButton__Dj4f6",lookingForAJobBlock:"ProfileInfo_lookingForAJobBlock__Gr_zx",aboutMeBlock:"ProfileInfo_aboutMeBlock__2w_Mq",fullNameBlock:"ProfileInfo_fullNameBlock__1DdzO",skills:"ProfileInfo_skills__1MQDZ",contactsBlock:"ProfileInfo_contactsBlock__-X8S7",editProfileInfoBtn:"ProfileInfo_editProfileInfoBtn__3GApz",profileDataBlock:"ProfileInfo_profileDataBlock__2Hac0"}},304:function(t,e,o){t.exports={mainContent:"Profile_mainContent__1wIGk"}},305:function(t,e,o){t.exports={avatar:"Post_avatar__3XMBm",counter:"Post_counter__3qy7M",likeCount:"Post_likeCount__2HQp7",likeButton:"Post_likeButton__3jUJv"}},306:function(t,e,o){t.exports={spanStyle:"ProfileStatus_spanStyle__23sGa"}},309:function(t,e,o){"use strict";o.r(e),o.d(e,"ProfileContainer",(function(){return q}));var n=o(3);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=i(t);if(e){var s=i(this).constructor;o=Reflect.construct(n,arguments,s)}else o=n.apply(this,arguments);return l(this,o)}}var f=o(0),j=o.n(f),b=o(10),d=o(101),p=o(12),h=o(304),O=o.n(h),m=o(305),x=o.n(m),v=o(1),k=j.a.memo((function(t){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:x.a.avatar,children:[Object(v.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5W2tli7-nT4GT1zqSkZziPAeOoHuZUwljrQ&usqp=CAU",alt:"user-avatar"}),Object(v.jsxs)("div",{children:[t.post,Object(v.jsxs)("div",{className:x.a.counter,children:[Object(v.jsx)("button",{className:x.a.likeCount,children:t.likes}),Object(v.jsx)("button",{className:x.a.likeButton,children:"Like"})]})]})]})})})),_=o(134),P=o(69),y=o(30),g=j.a.memo((function(t){var e=t.handleSubmit;return Object(v.jsxs)("form",{onSubmit:e,children:[Object(v.jsx)("div",{children:Object(y.c)("Type your post here","newPostText",y.b,[P.b])}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:"Post"})})]})})),S=Object(_.a)({form:"postTextarea"})(g),B=j.a.memo((function(t){var e=t.postsData.map((function(t){return Object(v.jsx)(k,{post:t.post,likes:t.likes},t.id)})),o=Object(b.c)();return Object(v.jsxs)("div",{children:[Object(v.jsx)("h5",{children:"Previous Posts"}),e,Object(v.jsxs)("div",{children:[Object(v.jsx)("h5",{children:"New Post"}),Object(v.jsx)(S,{onSubmit:function(t){o(d.a.addPost(t.newPostText))}})]})]})})),N=Object(b.b)((function(t){return{postsData:t.profilePage.postsData}}),{addPost:d.a.addPost})(B),I=o(100),w=o(68),C=o(306),A=o.n(C),D=j.a.memo((function(t){var e=Object(f.useState)(!1),o=Object(I.a)(e,2),n=o[0],s=o[1],c=Object(f.useState)(t.status),r=Object(I.a)(c,2),i=r[0],a=r[1];return Object(f.useEffect)((function(){a(t.status)}),[t.status]),Object(v.jsxs)("div",{className:A.a.profileStatusWrapper,children:[!n&&Object(v.jsxs)("div",{className:A.a.spanStyle,children:[Object(v.jsx)("b",{children:"Status: "})," ",Object(v.jsx)("span",{onDoubleClick:function(){return s(!0)},children:t.status})]}),n&&Object(v.jsx)("input",{onChange:function(t){a(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(i)},value:i,placeholder:"what are you thinking about?"})]})})),F=o(301),M=o.n(F),J=o(104),T=Object(_.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,o=t.error,n=t.profile;return Object(v.jsxs)("form",{onSubmit:e,children:[Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:"Save"})}),o&&Object(v.jsx)("div",{children:o}),Object(v.jsxs)("div",{className:M.a.fullNameBlock,children:[Object(v.jsx)("b",{children:"Full name:"})," ",Object(y.c)("Full name","fullName",y.a,[])]}),Object(v.jsxs)("div",{className:M.a.aboutMeBlock,children:[Object(v.jsx)("b",{children:"About me: "}),Object(y.c)("About me","aboutMe",y.a,[])]}),Object(v.jsxs)("div",{className:M.a.lookingForAJobBlock,children:[Object(v.jsx)("b",{children:"Looking for a job:"}),Object(y.c)(void 0,"lookingForAJob",y.a,[],{type:"checkbox"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Professionals skills: "}),Object(y.c)("Professional skills","lookingForAJobDescription",y.a,[])]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Contacts:"})," ",Object.keys(n.contacts).map((function(t){return Object(v.jsx)("div",{className:M.a.contactBlockForm,children:Object(v.jsxs)("b",{children:[t,":",Object(y.c)(t,"contacts."+t,y.a,[])]})},t)}))]})]})})),z=function(t){var e=t.profile,o=t.status,n=t.updateStatus,s=t.isOwner,c=t.savePhoto,r=Object(f.useState)(!1),i=Object(I.a)(r,2),a=i[0],l=i[1],u=Object(b.c)();if(!e)return Object(v.jsx)(w.a,{});return Object(v.jsxs)("div",{className:M.a.profileInfoContainer,children:[Object(v.jsxs)("div",{className:M.a.profileInfo,children:[Object(v.jsx)("img",{className:M.a.profilePhoto,src:e.photos.large||J.a,alt:"profile"}),Object(v.jsx)(D,{status:o,updateStatus:n})]}),Object(v.jsx)("div",{className:M.a.sendFileButton,children:s&&Object(v.jsx)("input",{type:"file",onChange:function(t){var e;(null===(e=t.target.files)||void 0===e?void 0:e.length)&&c(t.target.files[0])}})}),a?Object(v.jsx)(T,{initialValues:e,onSubmit:function(t){u(Object(d.f)(t)),l(!1)},profile:e}):Object(v.jsx)(E,{profile:e,isOwner:s,onEditMode:function(){return l(!0)}})]})},E=function(t){var e=t.profile,o=t.isOwner,n=t.onEditMode;return Object(v.jsxs)("div",{className:M.a.profileDataBlock,children:[o&&Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:M.a.editProfileInfoBtn,onClick:n,children:"Edit"})}),Object(v.jsxs)("div",{className:M.a.fullNameBlock,children:[Object(v.jsx)("b",{children:"Full name:"})," ",e.fullName]}),Object(v.jsxs)("div",{className:M.a.aboutMeBlock,children:[Object(v.jsx)("b",{children:"About me: "}),e.aboutMe]}),Object(v.jsxs)("div",{className:M.a.lookingForAJobBlock,children:[Object(v.jsx)("b",{children:"Looking for a job:"})," ",e.lookingForAJob?"I'm opened for offers":"Currently working"]}),Object(v.jsxs)("div",{className:M.a.skills,children:[Object(v.jsx)("b",{children:"Professionals skills: "}),e.lookingForAJobDescription]}),Object(v.jsxs)("div",{className:M.a.contactsBlock,children:[Object(v.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.contacts).map((function(t){return Object(v.jsx)(R,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},R=function(t){var e=t.contactTitle,o=t.contactValue;return Object(v.jsxs)("div",{className:M.a.contactsBlock,children:[Object(v.jsx)("b",{children:e}),": ",o]})},U=function(t){return Object(v.jsxs)("div",{className:O.a.mainContent,children:[Object(v.jsx)(z,{saveProfile:t.saveProfile,savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(v.jsx)(N,{})]})},G=o(11),q=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(l,t);var e,o,i,a=u(l);function l(){return s(this,l),a.apply(this,arguments)}return e=l,(o=[{key:"updateProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)?(this.props.getProfile(t),this.props.getStatus(t)):this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userId!==t.match.params.userId&&this.updateProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(v.jsx)(U,Object(n.a)(Object(n.a)({},this.props),{},{savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}])&&c(e.prototype,o),i&&c(e,i),l}(j.a.Component);e.default=Object(G.d)(Object(b.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:d.c,getStatus:d.d,updateStatus:d.g,savePhoto:d.e,saveProfile:d.f}),p.g)(q)}}]);
//# sourceMappingURL=3.0b0e882d.chunk.js.map